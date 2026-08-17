const Booking = require("../models/Booking");

// create booking api
const createBooking = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      email,
      address,
      service,
      description,
      preferredDate,
      preferredTime,
    } = req.body;

    const booking = new Booking({
      customerName,
      phone,
      email,
      address,
      service,
      description,
      preferredDate,
      preferredTime,
    });

    const result = await booking.save();

    res.status(201).json({
      message: "Booking Created Successfully",
      booking: result,
    });
  } catch (error) {
    console.log("Failed to Create the Booking:", error);

    res.status(500).json({
      message: "Failed to Create the Booking",
      error: error.message,
    });
  }
};

// get booking api
const getAllBooking = async (req, res) => {
  try {
    const booking = await Booking.find().sort({ createdAt: -1 });
    // console.log(booking);
    res.status(200).json({
      message: "Booking Fetch Successfully",
      booking: booking,
    });
  } catch (error) {
    console.log("Faild to fetch the Booking", error);
    res.status(500).json({
      message: "Faild to fetch the Booking",
      error: message.error,
    });
  }
};

// update Booking API
const updateBooking = async (req, res) => {
  try {
    const updateData = {
      customerName: req.body.customerName,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      description: req.body.description,
      preferredDate: req.body.preferredDate,
      preferredTime: req.body.preferredTime,
      status: req.body.status,
      adminNote: req.body.adminNote,
    };

    const booking = await Booking.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking Not Found",
      });
    }

    res.status(200).json({
      message: "Services Update Successfully",
      booking,
    });
  } catch (error) {
    console.log("Failed to update the Booking", error);
    res.status(500).json({
      message: "Failed to update the booking",
      error: error.message,
    });
  }
};

// Delete Booking api
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({
        message: "Booking Not Found",
      });
    }
    res.status(200).json({
      message: "Booking Deleted Successfully",
      booking,
    });
  } catch (error) {
    console.log("Failed to delete the Booking", error);
    res.status(500).json({
      message: "Faild to Delete the Booking",
      error: error.message,
    });
  }
};

// single booking
const getSingleBoking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({
        message: "Single Booking Not Found",
      });
    }
    res.status(200).json({
      message: "Single Booking Fetched",
      booking,
    });
  } catch (error) {
    console.log("Faild to fetch the Single Booking");
    res.status(500).json({
      message: "Failed to Fetch the Single Booking",
      error: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getAllBooking,
  updateBooking,
  deleteBooking,
  getSingleBoking,
};
