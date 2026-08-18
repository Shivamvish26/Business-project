const Testimonial = require("../models/Testimonial");

// create testimonial
const createTestimonial = async (req, res) => {
  try {
    const { name, designation, message, rating } = req.body;

    const testimonial = new Testimonial({
      name,
      designation,
      message,
      rating,
    });

    const result = await testimonial.save();

    res.status(200).json({
      message: "Testimonial Created Successfully",
      testimonial: result,
    });
  } catch (error) {
    console.log("Failed to Create the Testimonial", error);

    res.status(500).json({
      message: "Testimonial Not Created",
      error: error.message,
    });
  }
};

// get testimonial
const getTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Testimonial Data Fetched",
      testimonial: testimonial,
    });
  } catch (error) {
    console.log("Failed to fetch the Testimonial", error);
    res.status(500).json({
      message: "Faild to fetch the testimonial",
      error: error.message,
    });
  }
};

// delete testmoinal    
const deleteTestmonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res.status(404).json({
        message: "Testmoinal Not Found",
      });
    }
    res.status(200).json({
      message: "Testmoinal Deleted Successfully",
      testimonial: testimonial,
    });
  } catch (error) {
    (console.log("Faild to delete the testmonial", error),
      res.status(500).json({
        message: "Faild to Delete the Testmonial",
        error: error.message,
      }));
  }
};

module.exports = {
  createTestimonial,
  getTestimonial,
  deleteTestmonial,
};
