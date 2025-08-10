const mongoose = require("mongoose");

const userSchemas = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    phoneNumber: { String, required: true },
    mailingAddress: { String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchemas);
