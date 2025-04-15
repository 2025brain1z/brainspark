import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

if (!MONGODB_URI || !MONGODB_DB_NAME) {
  throw new Error("Please define the MONGODB_URI and MONGODB_DB_NAME environment variables");
}

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }
  await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB_NAME });
};

