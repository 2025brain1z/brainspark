import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";
import { generateQuizQuestions, saveQuestionsToFile } from "@/utils/quizGenerator";
import { extractTextFromPPTX } from "@/utils/pptxExtractor";

export async function POST(req: NextRequest) {
    // @ts-ignore
    const pdfParse = require("pdf-parse");
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const difficulty = formData.get("difficulty") as string || "medium"; // Default to medium

    if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Save to temp directory instead of /public
    const uploadPath = path.join("/tmp", file.name);
    const bytes = await file.arrayBuffer();
    await writeFile(uploadPath, Buffer.from(bytes));

    console.log("📂 File saved at:", uploadPath);

    try {
        let extractedText: string;
        const fileExtension = path.extname(file.name).toLowerCase();

        // Extract text based on file type
        if (fileExtension === ".pdf") {
            // PDF processing
            const pdfBuffer = await readFile(uploadPath);
            const pdfData = await pdfParse(pdfBuffer);
            extractedText = pdfData.text;
            console.log("📖 Extracted text from PDF:", extractedText.slice(0, 500)); // Log first 500 chars for debugging
        } else if (fileExtension === ".pptx") {
            // PPTX processing
            extractedText = await extractTextFromPPTX(uploadPath);
            console.log("📖 Extracted text from PPTX:", extractedText.slice(0, 500)); // Log first 500 chars for debugging
        } else {
            return NextResponse.json({ error: "Unsupported file format. Please upload a PDF or PPTX file." }, { status: 400 });
        }

        // Call GPT-4o Mini API to generate quiz questions
        const questions = await generateQuizQuestions(extractedText, difficulty);

        if (!questions) {
            return NextResponse.json({ error: "Failed to generate questions" }, { status: 500 });
        }

        // Save questions to /tmp
        const saved = await saveQuestionsToFile(questions);

        if (!saved) {
            return NextResponse.json({ error: "Failed to save questions" }, { status: 500 });
        }

        return NextResponse.json({ success: true, questions });
    } catch (error) {
        console.error(`❌ Error processing ${file.name}:`, error);
        return NextResponse.json({ error: `Failed to process ${file.name}` }, { status: 500 });
    }
}