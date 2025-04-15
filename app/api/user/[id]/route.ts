import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  await connectToDatabase();
  const user = await User.findOne({ clerkId: params.id });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}
