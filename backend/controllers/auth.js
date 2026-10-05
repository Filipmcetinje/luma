import bcrypt from "bcryptjs";
import validator from "validator";
import User from "../models/user.js";

export async function signup(req, res) {
  const { name, email, password } = req.body ?? {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return res.status(400).json({
      message: "Name, email, and password are required.",
    });
  }

  const trimmedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();

  if (trimmedName.length < 2 || trimmedName.length > 50) {
    return res.status(400).json({
      message: "Name must contain between 2 and 50 characters.",
    });
  }

  if (!validator.isEmail(normalizedEmail)) {
    return res.status(400).json({
      message: "Enter a valid email address.",
    });
  }

  if (password.length < 8 || bcrypt.truncates(password)) {
    return res.status(400).json({
      message:
        "Password must contain at least 8 characters and fit within 72 bytes.",
    });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({
      name: trimmedName,
      email: normalizedEmail,
      passwordHash,
    });

    return res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Check your account details.",
      });
    }

    return res.status(500).json({
      message: "Unable to create your account. Please try again.",
    });
  }
}
