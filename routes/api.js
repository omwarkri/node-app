// routes/api.js
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({
    message: "👋 Welcome to the Advanced Express API!",
    time: new Date().toLocaleString(),
  });
});

router.get("/user/:name", (req, res) => {
  const { name } = req.params;
  res.json({
    greeting: `Hello, ${name}! 🌟`,
    tip: "You can use this API to build cool projects!",
  });
});

module.exports = router;
