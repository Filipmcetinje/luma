import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: ["https://luma-delta-bice.vercel.app", "http://localhost:5173"],
  }),
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Luma backend is running" });
});

app.listen(PORT, () => {
  console.log(`Luma backend is running on port ${PORT}`);
});
