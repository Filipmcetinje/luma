import Trip from "../models/trip.js";

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
