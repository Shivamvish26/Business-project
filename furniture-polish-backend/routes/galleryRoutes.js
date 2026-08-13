const express = require("express");
const router = express.Router();

const { createGallery } = require("../controllers/galleryController");

const upload = require("../middleware/uploadMiddleware");

router.post(
  "/create-gallery",
  upload.fields([
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  createGallery,
);

module.exports = router;
