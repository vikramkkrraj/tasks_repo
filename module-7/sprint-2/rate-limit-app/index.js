const express = require("express");
const rateLimit = require("express-rate-limit");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = 3000;

// Rate limiter: 5 requests per minute per IP
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
  message: { error: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Use JSON parser
app.use(express.json());

// Mount routes
app.use("/api", apiRoutes(limiter));

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
