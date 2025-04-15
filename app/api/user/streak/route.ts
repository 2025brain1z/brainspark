import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ dailyStreak: user.dailyStreak || 0, lastUpdated: user.lastStreakUpdate || null });
  } catch (error) {
    console.error("Error fetching user streak:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
