const express = require("express");
const router = express.Router();

const {
  createBooking,
  getAllBooking,
  updateBooking,
} = require("../controllers/bookingController");

// create api
router.post("/create-booking", createBooking);

// get booking api
router.get("/get-booking", getAllBooking);

// update booking
router.put("/:id", updateBooking);

module.exports = router;
