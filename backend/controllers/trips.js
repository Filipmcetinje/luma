import mongoose from "mongoose";

import Trip from "../models/trip.js";
import placeIds from "../data/placeIds.js";

function formatTrip(trip) {
  return {
    id: trip._id.toString(),
    name: trip.name,
    startDate: trip.startDate,
    endDate: trip.endDate,
    notes: trip.notes,
    places: trip.places,
  };
}

export async function getTrips(req, res) {
  try {
    const trips = await Trip.find({ owner: req.userId }).sort({
      createdAt: -1,
    });

    return res.json({
      trips: trips.map(formatTrip),
    });
  } catch {
    return res.status(500).json({
      message: "Unable to load trips. Please try again.",
    });
  }
}

export async function createTrip(req, res) {
  const { name, startDate, endDate, notes = "" } = req.body ?? {};

  if (
    typeof name !== "string" ||
    typeof startDate !== "string" ||
    typeof endDate !== "string" ||
    typeof notes !== "string"
  ) {
    return res.status(400).json({
      message: "Enter a trip name, dates, and valid notes.",
    });
  }

  try {
    await Trip.init();

    const trip = await Trip.create({
      owner: req.userId,
      name: name.trim(),
      startDate,
      endDate,
      notes: notes.trim(),
      places: [],
    });

    return res.status(201).json({
      trip: formatTrip(trip),
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "A trip with this name already exists.",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: Object.values(error.errors)[0].message,
      });
    }

    return res.status(500).json({
      message: "Unable to create your trip. Please try again.",
    });
  }
}

export async function updateTrip(req, res) {
  const { tripId } = req.params;
  const { name, startDate, endDate, notes = "" } = req.body ?? {};

  if (!mongoose.isObjectIdOrHexString(tripId)) {
    return res.status(400).json({
      message: "Enter a valid trip ID.",
    });
  }

  if (
    typeof name !== "string" ||
    typeof startDate !== "string" ||
    typeof endDate !== "string" ||
    typeof notes !== "string"
  ) {
    return res.status(400).json({
      message: "Enter a trip name, dates, and valid notes.",
    });
  }

  try {
    const trip = await Trip.findOne({
      _id: tripId,
      owner: req.userId,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found.",
      });
    }

    trip.name = name.trim();
    trip.startDate = startDate;
    trip.endDate = endDate;
    trip.notes = notes.trim();

    await trip.save();

    return res.json({
      trip: formatTrip(trip),
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "A trip with this name already exists.",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: Object.values(error.errors)[0].message,
      });
    }

    return res.status(500).json({
      message: "Unable to update your trip. Please try again.",
    });
  }
}

export async function deleteTrip(req, res) {
  const { tripId } = req.params;

  if (!mongoose.isObjectIdOrHexString(tripId)) {
    return res.status(400).json({
      message: "Enter a valid trip ID.",
    });
  }

  try {
    const trip = await Trip.findOneAndDelete({
      _id: tripId,
      owner: req.userId,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found.",
      });
    }

    return res.json({
      message: "Trip deleted.",
      id: trip._id.toString(),
    });
  } catch {
    return res.status(500).json({
      message: "Unable to delete your trip. Please try again.",
    });
  }
}

async function updateTripPlace(req, res, operation) {
  const { tripId, placeId: rawPlaceId } = req.params;

  if (!mongoose.isObjectIdOrHexString(tripId)) {
    return res.status(400).json({
      message: "Enter a valid trip ID.",
    });
  }

  if (!/^[1-9]\d*$/.test(rawPlaceId)) {
    return res.status(400).json({
      message: "Enter a valid destination ID.",
    });
  }

  const placeId = Number(rawPlaceId);

  if (!Number.isSafeInteger(placeId) || !placeIds.has(placeId)) {
    return res.status(404).json({
      message: "Destination not found.",
    });
  }

  try {
    const trip = await Trip.findOneAndUpdate(
      { _id: tripId, owner: req.userId },
      { [operation]: { places: placeId } },
      { returnDocument: "after", runValidators: true },
    );

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found.",
      });
    }

    return res.json({
      trip: formatTrip(trip),
    });
  } catch {
    return res.status(500).json({
      message: "Unable to update trip destinations. Please try again.",
    });
  }
}

export function addPlaceToTrip(req, res) {
  return updateTripPlace(req, res, "$addToSet");
}

export function removePlaceFromTrip(req, res) {
  return updateTripPlace(req, res, "$pull");
}
