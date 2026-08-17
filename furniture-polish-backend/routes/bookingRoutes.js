const express = require("express");
const router = express.Router();

const {
  createBooking,
  getAllBooking,
  updateBooking,
  deleteBooking,
  getSingleBoking,
} = require("../controllers/bookingController");

// create api
router.post("/create-booking", createBooking);

// get booking api
router.get("/get-booking", getAllBooking);

// update booking
router.put("/:id", updateBooking);

// delete booking
router.delete("/:id", deleteBooking);

// Single Booking
router.get("/:id", getSingleBoking);

module.exports = router;
