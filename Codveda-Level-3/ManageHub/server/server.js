import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ success: true, message: "ManageHub API is running." });
});

app.use("/api/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
});

app.use((error, _req, res, _next) => {
  if (error.code === 11000) {
    return res.status(409).json({ success: false, message: "This email address is already registered." });
  }

  if (error.name === "ValidationError") {
    const message = Object.values(error.errors).map(item => item.message)[0];
    return res.status(400).json({ success: false, message });
  }

  if (error instanceof SyntaxError && "body" in error) {
    return res.status(400).json({ success: false, message: "Invalid JSON request body." });
  }

  console.error(error);
  return res.status(500).json({ success: false, message: "Internal server error." });
});

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`ManageHub API running at http://localhost:${PORT}`));
  } catch (error) {
    console.error(`Server startup failed: ${error.message}`);
    process.exit(1);
  }
}

startServer();
