const bcrypt = require("bcryptjs");
const User = require("../models/user");

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      const err = new Error("Name, email, and password are required.");
      err.statusCode = 400;
      return next(err);
    }

    const exists = await User.exists({ email });
    if (exists) {
      const err = new Error("User already exists.");
      err.statusCode = 409;
      return next(err);
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });

    return res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      err.statusCode = 400;
      err.message = "Failed to validate user data.";
    }
    if (err.code === 11000) {
      err.statusCode = 409;
      err.message = "Email is already registered.";
    }
    return next(err);
  }
};

const getCurrentUser = (req, res, next) => {
  const userId = req.users._id;
  User.findById(userId)
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === "CastError") {
        err.statusCode = 400;
      } else {
        next(err);
      }
    });
};

module.exports = { createUser, getCurrentUser };
