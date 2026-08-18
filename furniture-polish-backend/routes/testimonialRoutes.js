const express = require("express");
const router = express.Router();

const {
  createTestimonial,
  getTestimonial,
  deleteTestmonial,
} = require("../controllers/testimonialController");

router.post("/create-testimonial", createTestimonial);

router.get("/get-testimonial", getTestimonial);

router.delete("/:id", deleteTestmonial);

module.exports = router;
