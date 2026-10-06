import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters"],
      maxlength: [50, "Name must contain no more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Enter a valid email address",
      },
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    favoritePlaceIds: {
      type: [Number],
      default: [],
      validate: {
        validator: (ids) =>
          ids.every((id) => Number.isInteger(id) && id > 0) &&
          new Set(ids).size === ids.length,
        message: "Favorites must contain unique positive integer IDs.",
      },
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
