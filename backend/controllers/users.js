import User from "../models/user.js";

export async function getCurrentUser(req, res) {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(401).json({
        message: "Account no longer exists. Please log in again.",
      });
    }

    return res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch {
    return res.status(500).json({
      message: "Unable to load your account. Please try again.",
    });
  }
}
