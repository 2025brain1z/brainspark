import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * POST handler for the chat API endpoint
 * Processes user prompts and returns AI-generated responses using Google's Gemini model
 * @param req - Next.js request object containing the user's prompt
 * @returns JSON response with generated text or error message
 */
export async function POST(req: NextRequest) {
  // Extract the user's prompt from the request body
  const reqBody = await req.json();
  const { userPrompt } = reqBody;
  const prompt = userPrompt;

  // Initialize Google's Generative AI with API key
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

  // Configure the Gemini model with specific parameters
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", // Using Gemini 1.5 Flash for faster responses
    generationConfig: { maxOutputTokens: 5000 }, // Limit response length to 5000 tokens
  });

  try {
    // Generate content based on the user's prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Return successful response
    return NextResponse.json({
      text,
    });
  } catch (error) {
    // Return error response if content generation fails
    return NextResponse.json({
      text: "Unable to process the prompt. Please try again.",
    });
  }
}
