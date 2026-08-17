const express = require("express");
const router = express.Router();

const { createContact } = require("../controllers/contactControllers");

// create api
router.post("/create-booking", createContact);

module.exports = router;
