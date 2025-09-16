const multer = require("multer");
const path = require("path");

// where to save
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads")); // ensure this folder exists
  },
  filename: (req, file, cb) => {
    // safe base name (remove spaces)
    const baseName = path
      .basename(file.originalname, path.extname(file.originalname))
      .replace(/\s+/g, "_")
      .toLowerCase();

    // add timestamp + keep extension
    const uniqueName = `${baseName}-${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  // accept only images
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

module.exports = multer({ storage, fileFilter });
