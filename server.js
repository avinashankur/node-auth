import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnect.js";
import authRoutes from './routes/authRoutes.js'

dotenv.config();
const app = express();

// Connecting to MongoDB
connectDB();

app.use(express.json());

app.use("/api/users", authRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Authentication application.");
});

// Starting the application
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});