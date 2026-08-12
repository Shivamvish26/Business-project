const express = require("express");

const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
} = require("../controllers/authControllers");

// Register Admin
router.post("/register", registerAdmin);

// Login Admin
router.post("/login", loginAdmin);

module.exports = router;