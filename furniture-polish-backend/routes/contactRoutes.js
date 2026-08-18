const express = require("express");
const router = express.Router();

const {
  createContact,
  getAllcontact,
  updateContactStatus
} = require("../controllers/contactControllers");

// create contact api
router.post("/create-booking", createContact);

// get contact api
router.get("/get-contact", getAllcontact);

// update status api
router.put("/:id/status",updateContactStatus)

module.exports = router;
