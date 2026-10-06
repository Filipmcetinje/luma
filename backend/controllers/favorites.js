import User from "../models/user.js";
import placeIds from "../data/placeIds.js";

export async function getFavorites(req, res) {
  try {
    const user = await User.findById(req.userId).select("favoritePlaceIds");

    if (!user) {
      return res.status(401).json({
        message: "Account no longer exists. Please log in again.",
      });
    }

    return res.json({
      favoritePlaceIds: user.favoritePlaceIds ?? [],
    });
  } catch {
    return res.status(500).json({
      message: "Unable to load favorites. Please try again.",
    });
  }
}

async function updateFavorite(req, res, operation) {
  const rawPlaceId = req.params.placeId;

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
    const user = await User.findByIdAndUpdate(
      req.userId,
      { [operation]: { favoritePlaceIds: placeId } },
      { returnDocument: "after", runValidators: true },
    ).select("favoritePlaceIds");

    if (!user) {
      return res.status(401).json({
        message: "Account no longer exists. Please log in again.",
      });
    }

    return res.json({
      favoritePlaceIds: user.favoritePlaceIds ?? [],
    });
  } catch {
    return res.status(500).json({
      message: "Unable to update favorites. Please try again.",
    });
  }
}

export function addFavorite(req, res) {
  return updateFavorite(req, res, "$addToSet");
}

export function removeFavorite(req, res) {
  return updateFavorite(req, res, "$pull");
}
