import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

/**
 * POST handler for retrieving a user's daily streak information
 * Fetches the user's current streak count and last update timestamp
 * @param req - Next.js request object containing the user's ID
 * @returns JSON response with streak data or error message
 */
export async function POST(req: NextRequest) {
  try {
    // Establish connection to MongoDB database
    await connectToDatabase();
    
    // Extract user ID from request body
    const { userId } = await req.json();

    // Validate that user ID is provided
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Query database for user with matching Clerk ID
    const user = await User.findOne({ clerkId: userId });

    // Return 404 if user is not found
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return user's streak information, defaulting to 0 if no streak exists
    return NextResponse.json({ dailyStreak: user.dailyStreak || 0, lastUpdated: user.lastStreakUpdate || null });
  } catch (error) {
    // Log error and return generic error message to client
    console.error("Error fetching user streak:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
