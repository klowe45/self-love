const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = require("");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const app = express();
const mainRouter = require("./routes/index");

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/ready", (_req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  res.json({ state: states[mongoose.connection.readyState] });
});

function errorHandler(err, _req, res, _next) {
  console.error("Server error:", err);
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Server error" });
}

function buildMongoUriFromEnv() {
  const host = (process.env.MONGO_HOST || "").trim();
  const user = (process.env.MONGO_USER || "").trim();
  const pass = (process.env.MONGO_PASS || "").trim();
  if (!host || !user || !pass)
    throw new Error("Missing MONGO_HOST/USER/PASS or ATLAS_URI");
  return `mongodb+srv://${encodeURIComponent(user)}:${encodeURIComponent(
    pass
  )}@${host}/?retryWrites=true&w=majority`;
}
function redact(uri) {
  return uri.replace(
    /(mongodb\+srv:\/\/[^:]+:)([^@]+)(@)/,
    (_, a, _pw, b) => `${a}****${b}`
  );
}

(async () => {
  const PORT = Number(process.env.PORT) || 4000;
  const dbName = (process.env.MONGO_DB || "app").trim();
  const atlas = (process.env.ATLAS_URI || "").trim();
  const uri = atlas || buildMongoUriFromEnv();

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

    app.use("/", mainRouter);

    app.use((_req, res) => res.status(404).json({ message: "Not Found" }));
    app.use(errorHandler);

    app.listen(PORT, "0.0.0.0", () =>
      console.log(`🚀 Server on http://localhost:${PORT}`)
    );
  } catch (e) {
    console.error("❌ Server startup failed:", e);
    process.exit(1);
  }
})();
