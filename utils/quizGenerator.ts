import { writeFile } from "fs/promises";
import path from "path";

const GPT_4O_MINI_API_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function generateQuizQuestions(text: string, difficulty: string) {
    try {
        const response = await fetch(GPT_4O_MINI_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You are an AI that generates quiz questions based only on academic topics, ignoring personal information." },
                    {
                        role: "user",
                        content: `The following text is from a study material. Generate 40 multiple-choice questions focusing ONLY on the academic content, ignoring lecturer names, emails, and any unrelated details.

Text:
"""${text}"""

Instructions:
- Focus on key concepts, definitions, theories, and important points.
- Exclude any personal names, emails, or administrative details.
- The questions should be structured at a ${difficulty} level.
- Strictly Format the response as an array of JSON objects: [{"question": "...", "options": ["...", "...", "...", "..."], "correctOption": "...", "difficulty": "..."}]. 
- Do NOT include any extra text before or after the JSON.`,
                    }
                ],
                temperature: 0.7,
                max_tokens: 4096,
            }),
        });

        const data = await response.json();

        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error("❌ GPT Response Error:", data);
            return null;
        }

        let rawResponse = data.choices[0].message.content.trim();

        // ✅ Remove any Markdown formatting (```json ... ```)
        if (rawResponse.startsWith("```json")) {
            rawResponse = rawResponse.replace(/^```json/, "").replace(/```$/, "").trim();
        }

        console.log("📜 Raw GPT Response:", rawResponse); // Debugging log

        // ✅ Attempt to fix broken JSON (if needed)
        try {
            return JSON.parse(rawResponse);
        } catch (jsonError) {
            console.warn("⚠️ Invalid JSON received, attempting to fix...");

            // ✅ Fix common JSON errors (unterminated strings, missing brackets)
            rawResponse = rawResponse.replace(/,\s*]$/, "]").replace(/,\s*}/g, "}");

            try {
                return JSON.parse(rawResponse);
            } catch (finalError) {
                console.error("❌ Failed to fix JSON:", finalError);
                return null;
            }
        }
    } catch (error) {
        console.error("❌ Error generating quiz questions:", error);
        return null;
    }
}



export async function saveQuestionsToFile(questions: any[]) {
    const filePath = path.join(process.cwd(), "data/generated.d.ts");
    const fileContent = `export const generatedQuestions = ${JSON.stringify(questions, null, 2)};`;

    try {
        await writeFile(filePath, fileContent);
        console.log("✅ Questions saved to:", filePath);
        return true;
    } catch (error) {
        console.error("❌ Error saving questions to file:", error);
        return false;
    }
}
