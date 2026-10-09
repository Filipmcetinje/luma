import mongoose from "mongoose";
import placeIds from "../data/placeIds.js";

const journalEntrySchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Entry title is required."],
      trim: true,
      maxlength: [100, "Entry title cannot exceed 100 characters."],
    },
    text: {
      type: String,
      required: [true, "Journal notes are required."],
      trim: true,
      maxlength: [10000, "Journal notes cannot exceed 10,000 characters."],
    },
    placeId: {
      type: Number,
      default: null,
      validate: {
        validator: (value) => value === null || placeIds.has(value),
        message: "Choose a valid destination.",
      },
    },
    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      default: null,
    },
  },
  { timestamps: true },
);

journalEntrySchema.index({ owner: 1, createdAt: -1 });

export default mongoose.model("JournalEntry", journalEntrySchema);
