const express = require("express");
const mongoose = require("mongodb");
require("dotenv").config({ path: "./config.env" });
const cors = require("cors");

const mainRouter = require("./routes/index");
const authRoutes = require("./middleware/auth");

const app = express();

//middleware//
app.use(express.json());
app.use(cors());

//health check//
app.get("/heath", (_req, res) => res.json({ ok: true }));

//error handler//
function errorHandler(err, _req, res, _next) {
  console.error(err);
  const status = err.statusCode || 500;
  res.status(status).json({ message: err.message || "Server error" });
}

async function start() {
  const PORT = process.env.PORT || 3000;
  const mongoUri = process.env.ATLAS_URI; // e.g., from config.env
  const dbName = process.env.MONGO_DB || "app"; // optional, defaults to "app"

  if (!mongoUri) {
    console.error("❌ ATLAS_URI is missing. Put it in config.env");
    process.exit(1);
  }

  try {
    // Connect to MongoDB with Mongoose
    await mongoose.connect(mongoUri, { dbName });
    console.log("✅ Connected to MongoDB via Mongoose");

    // Routes
    app.use("/middleware/auth", authRoutes); // POST /signup, POST /signin
    app.use("/", mainRouter); // keep your existing routes (optional)

    // Error handler must come after routes
    app.use(errorHandler);

    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

    // Graceful shutdown
    process.on("SIGINT", async () => {
      console.log("\n🧹 Shutting down...");
      await mongoose.disconnect();
      server.close(() => process.exit(0));
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

start();
