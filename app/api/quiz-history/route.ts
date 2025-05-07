// app/api/quiz-history/route.ts
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from "@/lib/mongodb";
import { auth } from '@clerk/nextjs/server';

// TypeScript interface for history entry
interface HistoryEntry {
  date: Date;
  courseName: string;
  score: string;
}

// Development mock for auth check
const isDevelopment = process.env.NODE_ENV === 'development';
async function checkAuth(userId: string) {
  if (isDevelopment) {
    console.log('⚠️ Auth check bypassed in development mode');
    return true; // Always return true in development
  }
  
  const { userId: authUserId } = await auth();
  if (!authUserId || authUserId !== userId) {
    return false;
  }
  return true;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Add auth check
    if (!(await checkAuth(userId))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    
    // Connect directly to the users collection with a null check
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error('Database connection failed');
    }
    
    const usersCollection = db.collection('users');
    
    // Find the user
    const user = await usersCollection.findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Return quizHistory if it exists, otherwise empty array
    return NextResponse.json({
      history: user.quizHistory || []
    });

  } catch (error) {
    console.error('Error fetching quiz history:', error instanceof Error ? error.message : String(error));
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { userId, courseName, score } = await request.json();

    if (!userId || !courseName || score === undefined) {
      return NextResponse.json({ 
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    // Add auth check
    if (!(await checkAuth(userId))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    
    // Connect directly to the users collection with a null check
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error('Database connection failed');
    }
    
    const usersCollection = db.collection('users');
    
    // Create a new history entry
    const historyEntry: HistoryEntry = {
      date: new Date(),
      courseName,
      score
    };
    
    // Check if the user has a quizHistory field already
    const userDoc = await usersCollection.findOne({ clerkId: userId });
    
    if (!userDoc) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    let result;
    
    // If quizHistory doesn't exist, initialize it
    if (!userDoc.quizHistory) {
      result = await usersCollection.updateOne(
        { clerkId: userId },
        { $set: { quizHistory: [historyEntry] } }
      );
    } else {
      // If quizHistory exists, push to the array
      result = await usersCollection.updateOne(
        { clerkId: userId },
        { 
          $push: {
            'quizHistory': {
              $each: [historyEntry],
              $position: 0,
              $slice: 20
            } as any
          }
        }
      );
    }

    // Get the updated user document
    const updatedUser = await usersCollection.findOne({ clerkId: userId });
    
    if (!updatedUser) {
      return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      history: updatedUser.quizHistory || [],
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount
    });

  } catch (error) {
    console.error('Error updating quiz history:', error instanceof Error ? error.message : String(error));
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}