const express = require("express");
const checkRole = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/dashboard", checkRole("read"), (req, res) => {
  res.json({ message: "Admin dashboard access granted" });
});

module.exports = router;
