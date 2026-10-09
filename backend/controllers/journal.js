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