import multer from "multer";

const allowedTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);

const receivePhoto = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024,
    files: 1,
    fields: 0,
    parts: 1,
  },
  fileFilter(req, file, callback) {
    if (!allowedTypes.has(file.mimetype)) {
      return callback(
        new Error("Choose a JPEG, PNG, or WebP photo."),
      );
    }

    callback(null, true);
  },
}).single("photo");

export function receiveJournalPhoto(req, res, next) {
  receivePhoto(req, res, (error) => {
    if (error) {
      if (error.code === "LIMIT_FILE_SIZE") {
        return res.status(413).json({
          message: "Choose a photo smaller than 1 MB.",
        });
      }

      return res.status(400).json({
        message:
          error instanceof multer.MulterError
            ? "Send one photo using the photo field."
            : "Choose a JPEG, PNG, or WebP photo.",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Choose a photo to upload.",
      });
    }

    return next();
  });
}