// server.js
const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const cors = require("cors");
const path = require("path");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Static frontend files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", apiRoutes);

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "❌ Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(chalk.greenBright(`✅ Server running at http://localhost:${PORT}`));
});
