import mongoose from "mongoose";

// Retrieve MongoDB connection details from environment variables
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

// Validate that required environment variables are defined
if (!MONGODB_URI || !MONGODB_DB_NAME) {
  throw new Error("Please define the MONGODB_URI and MONGODB_DB_NAME environment variables");
}

/**
 * Establishes a connection to MongoDB using mongoose
 * Reuses existing connection if one is already established
 * @returns mongoose connection instance
 */
export const connectToDatabase = async () => {
  // Check if connection is already established (readyState >= 1)
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }
  // Create new connection if none exists
  await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB_NAME });
};

