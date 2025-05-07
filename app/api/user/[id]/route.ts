import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

/**
 * GET handler for retrieving a single user by their Clerk ID
 * @param req - Next.js request object
 * @param params - Route parameters containing the user's Clerk ID
 * @returns JSON response with user data or error message
 */
export async function GET(req: NextRequest, { params }: any) {
  // Connect to MongoDB database
  await connectToDatabase();
  
  // Query database for user with matching Clerk ID
  const user = await User.findOne({ clerkId: params.id });

  // Return 404 if user is not found
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Return the found user data
  return NextResponse.json(user);
}

