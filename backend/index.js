import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { signup, login } from "./controllers/auth.js";
import { requireAuth } from "./middleware/auth.js";
import { getCurrentUser } from "./controllers/users.js";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "./controllers/favorites.js";
import {
  getTrips,
  createTrip,
  updateTrip,
  deleteTrip,
  addPlaceToTrip,
  removePlaceFromTrip,
} from "./controllers/trips.js";

import {
  getJournalEntries,
  createJournalEntry,
  updateJournalEntry,
  deleteJournalEntry,
} from "./controllers/journal.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: ["https://luma-delta-bice.vercel.app", "http://localhost:5173"],
  }),
);

app.use(express.json());

app.post("/signup", signup);
app.post("/login", login);
app.get("/users/me", requireAuth, getCurrentUser);
app.get("/users/me/favorites", requireAuth, getFavorites);
app.put("/users/me/favorites/:placeId", requireAuth, addFavorite);
app.delete("/users/me/favorites/:placeId", requireAuth, removeFavorite);
app.get("/trips", requireAuth, getTrips);
app.post("/trips", requireAuth, createTrip);
app.patch("/trips/:tripId", requireAuth, updateTrip);
app.delete("/trips/:tripId", requireAuth, deleteTrip);
app.put("/trips/:tripId/places/:placeId", requireAuth, addPlaceToTrip);
app.delete("/trips/:tripId/places/:placeId", requireAuth, removePlaceFromTrip);
app.get("/journal", requireAuth, getJournalEntries);
app.post("/journal", requireAuth, createJournalEntry);
app.patch("/journal/:entryId", requireAuth, updateJournalEntry);
app.delete("/journal/:entryId", requireAuth, deleteJournalEntry);

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
