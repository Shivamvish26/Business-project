const express = require("express");
const router = express.Router();

const { createService } = require("../controllers/serviceController");

// Create Service
router.post("/create-services", createService);

module.exports = router;