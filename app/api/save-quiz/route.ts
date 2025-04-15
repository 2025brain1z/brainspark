import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const { questions } = await req.json();

    if (!questions || !Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json({ error: "Invalid questions data" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "data", "currentquiz.d.ts");

    // Formatting the questions as a TypeScript export
    const fileContent = `export const questions = ${JSON.stringify(questions, null, 2)};`;

    // Save the file
    await writeFile(filePath, fileContent, "utf8");

    return NextResponse.json({ message: "Quiz saved successfully" });
  } catch (error) {
    console.error("Error saving quiz:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
