import mongoose from "mongoose";
import Trip from "../models/trip.js";

import JournalEntry from "../models/journalEntry.js";
import cloudinary from "../utils/cloudinary.js";
import uploadPhotoBuffer from "../utils/uploadJournalPhoto.js";

function formatEntry(entry) {
  return {
    id: entry._id.toString(),
    title: entry.title,
    text: entry.text,
    placeId: entry.placeId,
    tripId: entry.tripId ? entry.tripId.toString() : null,
    photo: entry.photo ?? null,
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

export async function updateJournalEntry(req, res) {
  const { entryId } = req.params;
  const { title, text, placeId = null, tripId = null } = req.body ?? {};

  if (!mongoose.isObjectIdOrHexString(entryId)) {
    return res.status(400).json({
      message: "Enter a valid journal entry ID.",
    });
  }

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
    const entry = await JournalEntry.findOne({
      _id: entryId,
      owner: req.userId,
    });

    if (!entry) {
      return res.status(404).json({
        message: "Journal entry not found.",
      });
    }

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

    entry.title = title.trim();
    entry.text = text.trim();
    entry.placeId = placeId;
    entry.tripId = tripId;

    await entry.save();

    return res.json({
      entry: formatEntry(entry),
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: Object.values(error.errors)[0].message,
      });
    }

    return res.status(500).json({
      message: "Unable to update your journal entry. Please try again.",
    });
  }
}

export async function deleteJournalEntry(req, res) {
  const { entryId } = req.params;

  if (!mongoose.isObjectIdOrHexString(entryId)) {
    return res.status(400).json({
      message: "Enter a valid journal entry ID.",
    });
  }

  try {
    const entry = await JournalEntry.findOne({
      _id: entryId,
      owner: req.userId,
    });

    if (!entry) {
      return res.status(404).json({
        message: "Journal entry not found.",
      });
    }

    if (entry.photoPublicId) {
      const result = await cloudinary.uploader.destroy(entry.photoPublicId, {
        resource_type: "image",
        invalidate: true,
      });

      if (!["ok", "not found"].includes(result.result)) {
        return res.status(502).json({
          message: "Unable to remove the entry’s photo. Please try again.",
        });
      }
    }

    const deletedEntry = await JournalEntry.findOneAndDelete({
      _id: entryId,
      owner: req.userId,
      photoPublicId: entry.photoPublicId ?? null,
    });

    if (!deletedEntry) {
      return res.status(409).json({
        message: "The entry changed during deletion. Please refresh.",
      });
    }

    return res.json({
      message: "Journal entry deleted.",
      id: deletedEntry._id.toString(),
    });
  } catch {
    return res.status(500).json({
      message: "Unable to delete your journal entry. Please try again.",
    });
  }
}

export async function addJournalPhoto(req, res) {
  const { entryId } = req.params;

  if (!mongoose.isObjectIdOrHexString(entryId)) {
    return res.status(400).json({
      message: "Enter a valid journal entry ID.",
    });
  }

  let uploadedPhoto = null;
  let photoSaved = false;
  let uploading = false;

  try {
    const entry = await JournalEntry.findOne({
      _id: entryId,
      owner: req.userId,
    });

    if (!entry) {
      return res.status(404).json({
        message: "Journal entry not found.",
      });
    }

    if (entry.photoPublicId) {
      return res.status(409).json({
        message: "Remove the existing photo before adding another.",
      });
    }

    uploading = true;
    uploadedPhoto = await uploadPhotoBuffer(req.file.buffer);
    uploading = false;

    const updatedEntry = await JournalEntry.findOneAndUpdate(
      {
        _id: entryId,
        owner: req.userId,
        photoPublicId: null,
      },
      {
        $set: {
          photo: uploadedPhoto.secure_url,
          photoPublicId: uploadedPhoto.public_id,
        },
      },
      { returnDocument: "after", runValidators: true },
    );

    if (!updatedEntry) {
      return res.status(409).json({
        message: "The entry changed during upload. Please refresh.",
      });
    }

    photoSaved = true;

    return res.json({
      entry: formatEntry(updatedEntry),
    });
  } catch (error) {
    if (uploading && error.http_code === 400) {
      return res.status(400).json({
        message: "Choose a valid JPEG, PNG, or WebP photo.",
      });
    }

    return res.status(uploading ? 502 : 500).json({
      message: "Unable to save your photo. Please try again.",
    });
  } finally {
    if (uploadedPhoto && !photoSaved) {
      try {
        await cloudinary.uploader.destroy(uploadedPhoto.public_id, {
          resource_type: "image",
          invalidate: true,
        });
      } catch {
        console.error("Unable to clean up an unsaved Journal photo.");
      }
    }
  }
}

export async function removeJournalPhoto(req, res) {
  const { entryId } = req.params;

  if (!mongoose.isObjectIdOrHexString(entryId)) {
    return res.status(400).json({
      message: "Enter a valid journal entry ID.",
    });
  }

  try {
    const entry = await JournalEntry.findOne({
      _id: entryId,
      owner: req.userId,
    });

    if (!entry) {
      return res.status(404).json({
        message: "Journal entry not found.",
      });
    }

    if (!entry.photoPublicId) {
      return res.json({
        entry: formatEntry(entry),
      });
    }

    const result = await cloudinary.uploader.destroy(entry.photoPublicId, {
      resource_type: "image",
      invalidate: true,
    });

    if (!["ok", "not found"].includes(result.result)) {
      return res.status(502).json({
        message: "Unable to remove your photo. Please try again.",
      });
    }

    const updatedEntry = await JournalEntry.findOneAndUpdate(
      {
        _id: entryId,
        owner: req.userId,
        photoPublicId: entry.photoPublicId,
      },
      {
        $set: {
          photo: null,
          photoPublicId: null,
        },
      },
      { returnDocument: "after", runValidators: true },
    );

    if (!updatedEntry) {
      return res.status(409).json({
        message: "The entry changed during removal. Please refresh.",
      });
    }

    return res.json({
      entry: formatEntry(updatedEntry),
    });
  } catch {
    return res.status(500).json({
      message: "Unable to remove your photo. Please try again.",
    });
  }
}
