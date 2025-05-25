const express = require("express");

module.exports = (limiter) => {
  const router = express.Router();

  // Public endpoint - No rate limiting
  router.get("/public", (req, res) => {
    res.json({ message: "This is a public endpoint!" });
  });

  // Limited endpoint - Apply rate limiting
  router.get("/limited", limiter, (req, res) => {
    res.json({ message: "You have access to this limited endpoint!" });
  });

  return router;
};
