import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";
// @ts-ignore
const pdfParse = require("pdf-parse");
import { generateQuizQuestions, saveQuestionsToFile } from "@/utils/quizGenerator";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const difficulty = formData.get("difficulty") as string || "medium"; // Default to medium

    if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Save file to public/uploads
    const uploadPath = path.join(process.cwd(), "public/uploads", file.name);
    const bytes = await file.arrayBuffer();
    await writeFile(uploadPath, Buffer.from(bytes));

    console.log("📂 File saved at:", uploadPath);

    try {
        // Read and extract text from PDF
        const pdfBuffer = await readFile(uploadPath);
        const pdfData = await pdfParse(pdfBuffer);
        const extractedText = pdfData.text;

        console.log("📖 Extracted text:", extractedText.slice(0, 500)); // Log first 500 chars for debugging

        // Call GPT-4o Mini API to generate quiz questions
        const questions = await generateQuizQuestions(extractedText, difficulty);

        if (!questions) {
            return NextResponse.json({ error: "Failed to generate questions" }, { status: 500 });
        }

        // Save questions to data/generated.d.ts
        const saved = await saveQuestionsToFile(questions);

        if (!saved) {
            return NextResponse.json({ error: "Failed to save questions" }, { status: 500 });
        }

        return NextResponse.json({ success: true, questions });
    } catch (error) {
        console.error("❌ Error processing PDF:", error);
        return NextResponse.json({ error: "Failed to process PDF" }, { status: 500 });
    }
}
