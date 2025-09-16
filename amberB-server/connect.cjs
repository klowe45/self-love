const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const path = require("path");
const fs = require("fs");

const app = express();
const mainRouter = require("./routes/index");

// --- global middleware (before routes) ---
app.use(cors());

// Skip body parsing for multipart routes - let multer handle them
app.use((req, res, next) => {
  if (req.headers['content-type']?.startsWith('multipart/form-data')) {
    return next(); // Skip body parsing for multipart requests
  }
  // Apply body parsers for non-multipart routes
  express.json()(req, res, (err) => {
    if (err) return next(err);
    express.urlencoded({ extended: true })(req, res, next);
  });
});

// ensure uploads dir exists & serve static uploads
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use("/uploads", express.static(uploadsDir));

// health endpoints
app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/ready", (_req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  res.json({ state: states[mongoose.connection.readyState] });
});

// --- routes ---
app.use("/", mainRouter);

// 404 LAST (after all routes & static)
app.use((_req, res) => res.status(404).json({ message: "Not Found" }));

// error handler LAST
function errorHandler(err, _req, res, _next) {
  console.error("Server error:", err);
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Server error" });
}
app.use(errorHandler);

// --- DB connect & start ---
(async () => {
  const PORT = Number(process.env.PORT) || 4000;
  const dbName = (process.env.MONGO_DB || "app").trim();

  const atlas = (process.env.ATLAS_URI || "").trim();
  const buildMongoUriFromEnv = () => {
    const host = (process.env.MONGO_HOST || "").trim();
    const user = (process.env.MONGO_USER || "").trim();
    const pass = (process.env.MONGO_PASS || "").trim();
    if (!host || !user || !pass)
      throw new Error("Missing MONGO_HOST/USER/PASS or ATLAS_URI");
    return `mongodb+srv://${encodeURIComponent(user)}:${encodeURIComponent(
      pass
    )}@${host}/?retryWrites=true&w=majority`;
  };
  const uri = atlas || buildMongoUriFromEnv();

  const redact = (u) =>
    u.replace(
      /(mongodb\+srv:\/\/[^:]+:)([^@]+)(@)/,
      (_, a, _pw, b) => `${a}****${b}`
    );
  console.log("Connecting to MongoDB:", redact(uri), "db:", dbName);
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(uri, {
      dbName,
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
    console.log("✅ Connected to MongoDB");
    mongoose.connection.on("error", (e) => console.error("Mongo error:", e));
    mongoose.connection.on("disconnected", () =>
      console.warn("Mongo disconnected")
    );

    app.listen(PORT, "0.0.0.0", () =>
      console.log(`🚀 Server on http://localhost:${PORT}`)
    );
  } catch (e) {
    console.error("❌ Server startup failed:", e);
    process.exit(1);
  }
})();
