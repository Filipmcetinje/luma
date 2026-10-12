import cloudinary from "./cloudinary.js";

export default function uploadJournalPhoto(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "image",
        allowed_formats: ["jpg", "png", "webp"],
        folder: "luma/journal",
        overwrite: false,
        timeout: 60000,
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      },
    );

    stream.on("error", reject);
    stream.end(buffer);
  });
}
