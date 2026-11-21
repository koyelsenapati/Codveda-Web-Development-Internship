
import mongoose from "mongoose";

export async function connectDB() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is missing. Check server/.env");
  }

  await mongoose.connect(mongoUri);

  console.log("MongoDB Atlas connected successfully.");
}
