const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const homeRoutes = require("./routes/homeRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect MongoDB
// connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Enable JSON parsing

// Use Routes
app.use("/", homeRoutes);

// Handle undefined routes (404)
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
