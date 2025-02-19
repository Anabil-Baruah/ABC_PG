const express = require("express");
const path = require("path");

const router = express.Router();

// Serve static files (HTML, CSS, JS)
router.use(express.static(path.join(__dirname, "../public")));

// Route to serve the homepage
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = router;
