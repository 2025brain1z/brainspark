import { NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    console.log("✅ Connected to the database");
    
    const { userId } = await auth();
    console.log("✅ Authenticated userId:", userId);
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { email } = await req.json();

    // Get user using currentUser
    const clerkUser = await currentUser();
    console.log("✅ Clerk user:", clerkUser);
    if (!clerkUser) return NextResponse.json({ error: "User not found in Clerk" }, { status: 404 });

    const firstName = clerkUser.firstName || "Unknown";
    const lastName = clerkUser.lastName || "User";

    let user;
    try {
      user = await User.findOneAndUpdate(
        { clerkId: userId },
        { email, firstName, lastName },
        { new: true, upsert: true }
      );
      console.log("✅ User updated/created:", user);
    } catch (dbError) {
      console.error("❌ Database error:", dbError);
      throw dbError;
    }

    return NextResponse.json({ message: "User registered/updated", user });
  } catch (error) {
    console.error("Error in /api/user/register:", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 });
    } else {
      return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
  }
}