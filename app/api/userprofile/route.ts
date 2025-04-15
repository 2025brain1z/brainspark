import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID required" }, { status: 400 });
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Ensure the database is accessible
    if (!mongoose.connection.readyState) {
      return NextResponse.json({ error: "Database not connected" }, { status: 500 });
    }

    // Select database explicitly
    const db = mongoose.connection.useDb(process.env.MONGODB_DB_NAME || "default_db");

    // Find user by Clerk ID
    const user = await db.collection("users").findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Ensure achievements and badges are always arrays
    return NextResponse.json({
      streak: user.dailyStreak || 0,
      achievements: user.achievements || [], // ✅ Always return an array!
      badges: user.badges || [], // ✅ Always return an array!
      points: user.points || 0,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
