import mongoose from "mongoose";
import Trip from "../models/trip.js";

import JournalEntry from "../models/journalEntry.js";

function formatEntry(entry) {
  return {
    id: entry._id.toString(),
    title: entry.title,
    text: entry.text,
    placeId: entry.placeId,
    tripId: entry.tripId ? entry.tripId.toString() : null,
    createdAt: entry.createdAt.toISOString(),
    updatedAt: entry.updatedAt.toISOString(),
  };
}

export async function getJournalEntries(req, res) {
  try {
    const entries = await JournalEntry.find({
      owner: req.userId,
    }).sort({ createdAt: -1, _id: -1 });

    return res.json({
      entries: entries.map(formatEntry),
    });
  } catch {
    return res.status(500).json({
      message: "Unable to load journal entries. Please try again.",
    });
  }
}

export async function createJournalEntry(req, res) {
  const { title, text, placeId = null, tripId = null } = req.body ?? {};

  if (
    typeof title !== "string" ||
    typeof text !== "string" ||
    (placeId !== null && !Number.isSafeInteger(placeId)) ||
    (tripId !== null &&
      (typeof tripId !== "string" || !mongoose.isObjectIdOrHexString(tripId)))
  ) {
    return res.status(400).json({
      message: "Enter a title, notes, and valid connections.",
    });
  }

  try {
    if (tripId !== null) {
      const trip = await Trip.exists({
        _id: tripId,
        owner: req.userId,
      });

      if (!trip) {
        return res.status(404).json({
          message: "Connected trip not found.",
        });
      }
    }

    const entry = await JournalEntry.create({
      owner: req.userId,
      title: title.trim(),
      text: text.trim(),
      placeId,
      tripId,
    });

    return res.status(201).json({
      entry: formatEntry(entry),
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: Object.values(error.errors)[0].message,
      });
    }

    return res.status(500).json({
      message: "Unable to create your journal entry. Please try again.",
    });
  }
}
