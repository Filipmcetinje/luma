import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { signup } from "./controllers/auth.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: ["https://luma-delta-bice.vercel.app", "http://localhost:5173"],
  }),
);

app.use(express.json());

app.post("/signup", signup);

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Luma backend is running" });
});

async function startServer() {
  if (!process.env.MONGODB_URI) {
    console.error("Missing MONGODB_URI in backend environment settings.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("Luma connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Luma backend is running on port ${PORT}`);
    });
  } catch {
    console.error(
      "MongoDB connection failed. Check database credentials and Atlas network access.",
    );
    process.exit(1);
  }
}

startServer();
