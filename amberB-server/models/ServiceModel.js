const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceTitle: {
      type: String,
      required: true,
      unique: true,
    },
    subtitle: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      url: { type: String },
      publicId: { type: String },
      width: Number,
      height: Number,
      format: String,
      size: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("services", serviceSchema);
