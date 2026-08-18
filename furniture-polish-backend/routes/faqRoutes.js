const express = require("express");
const router = express.Router();

const {
  createFaq,
  getAllfaq,
  deleteFaq,
} = require("../controllers/faqController");

router.post("/create-faq", createFaq);

router.get("/get-faq", getAllfaq);

router.delete("/:id", deleteFaq);

module.exports = router;
