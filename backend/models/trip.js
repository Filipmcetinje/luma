import mongoose from "mongoose";
import isValidTripDate from "../utils/isValidTripDate.js";
import placeIds from "../data/placeIds.js";

const tripSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Trip name is required."],
      trim: true,
      minlength: 1,
      maxlength: [50, "Trip name cannot exceed 50 characters."],
    },
    startDate: {
      type: String,
      required: true,
      validate: {
        validator: isValidTripDate,
        message: "Enter a valid start date.",
      },
    },
    endDate: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return (
            isValidTripDate(value) &&
            isValidTripDate(this.startDate) &&
            value >= this.startDate
          );
        },
        message: "Enter a valid end date on or after the start date.",
      },
    },
    notes: {
      type: String,
      trim: true,
      default: "",
    },
    places: {
      type: [Number],
      default: [],
      validate: {
        validator: (ids) =>
          ids.every((id) => placeIds.has(id)) &&
          new Set(ids).size === ids.length,
        message: "Trip destinations must be valid and unique.",
      },
    },
  },
  { timestamps: true },
);

tripSchema.index(
  { owner: 1, name: 1 },
  {
    unique: true,
    collation: { locale: "en", strength: 2 },
  },
);

export default mongoose.model("Trip", tripSchema);
