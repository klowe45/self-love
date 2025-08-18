const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";
const JWT_EXPRIRES_IN = "7d";

exports.signUp = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      mailingAddress,
    } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: "User already exist" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hash,
      phoneNumber,
      mailingAddress,
    });
    const token = jwt.sign({ sub: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPRIRES_IN,
    });
    res.status(201).json({
      message: "User Successfully created!",
      token,
      user: {
        id: user._id,
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        mailingAddress,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign({ sub: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPRIRES_IN,
    });

    res.json({
      message: "Sign In was Successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        mailingAddress: user.mailingAddress,
      },
    });
  } catch (err) {
    next(err);
  }
};
