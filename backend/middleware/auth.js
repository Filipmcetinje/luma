import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export function requireAuth(req, res, next) {
  const authorization = req.get("Authorization");
  const match = authorization?.match(/^Bearer ([^\s]+)$/i);

  if (!match) {
    return res.status(401).json({
      message: "Please log in to continue.",
    });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      message: "Authentication is temporarily unavailable.",
    });
  }

  try {
    const payload = jwt.verify(match[1], process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });

    if (
      typeof payload !== "object" ||
      typeof payload.sub !== "string" ||
      !mongoose.isObjectIdOrHexString(payload.sub)
    ) {
      return res.status(401).json({
        message: "Please log in again.",
      });
    }

    req.userId = payload.sub;
    return next();
  } catch {
    return res.status(401).json({
      message: "Your session is invalid or expired. Please log in again.",
    });
  }
}
