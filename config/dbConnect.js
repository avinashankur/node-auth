import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// connecting MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("Failed to connect to DB.");

    // Forcefully stop the Node.js server. If not used we'll get the error message but ther server will continure to run.
    process.exit(1);
  }
};

export default connectDB;
