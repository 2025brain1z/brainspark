import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User"; // Ensure correct import path

// Connect to MongoDB
async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI!, { dbName: process.env.MONGODB_DB_NAME });
}

// Fetch leaderboard data
async function getLeaderboardFromMongo() {
  await connectToDatabase();

  const leaderboardData = await User.find()
    .sort({ points: -1 }) // Sort by highest points
    .limit(10) // Get top 10 users
    .select("clerkId email firstName lastName points") // Fetch only necessary fields
    .lean(); // Return plain objects (better performance)

  return leaderboardData
    .filter((user) => user.clerkId)
    .map((user) => ({
      id: user.clerkId,
      name: `${user.firstName || "Unknown"} ${user.lastName || ""}`.trim(), // Use first and last name
      score: user.points
    }));

}

// API Route Handler
export async function GET() {
  try {
    const leaderboard = await getLeaderboardFromMongo();
    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error("Leaderboard Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 });
  }
}
