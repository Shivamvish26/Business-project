const FAQ = require("../models/FAQ");

// create faq
const createFaq = async (req, res) => {
  try {
    const { question, answer, category, order } = req.body;

    const faq = new FAQ({
      question,
      answer,
      category,
      order,
    });

    const result = await faq.save();
    console.log(result);
    res.status(200).json({
      message: "FAQ Created Successfully",
      faq: result,
    });
  } catch (error) {
    console.log("Failed to create the FAQ", error);
    res.status(500).json({
      message: "Faild to create the FAQ",
      error: error.message,
    });
  }
};

// get all faq api
const getAllfaq = async (req, res) => {
  try {
    const faq = await FAQ.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "FAQ Data Fetch Successfully",
      faq: faq,
    });
  } catch (error) {
    console.log("Faild to fetch the FAQ", error);
    res.status(500).json({
      message: "Faild to Fetch the FAQ",
      error: error.message,
    });
  }
};

// Delete FAQ
const deleteFaq = async (req, res) => {
  try {
    const faq = await FAQ.findByIdAndDelete(req.params.id);
    if (!faq) {
      return res.status(404).json({
        message: "FAQ not found",
      });
    }
    res.status(200).json({
      message: "FAQ successfully Dleted",
      faq: faq,
    });
  } catch (error) {
    console.log("Failed to delete the faq", error);
    res.status(500).json({
      message: "Faild to delete the faq",
      error: error.message,
    });
  }
};

module.exports = {
  createFaq,
  getAllfaq,
  deleteFaq,
};
