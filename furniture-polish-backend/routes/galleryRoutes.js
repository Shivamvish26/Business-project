const express = require("express");
const router = express.Router();

const {
  createGallery,
  getAllGallery,
  updateGallery,
  deletegallery,
  getsingleGallery,
} = require("../controllers/galleryController");

const upload = require("../middleware/uploadMiddleware");

// create post api
router.post(
  "/create-gallery",
  upload.fields([
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  createGallery,
);

// get gallery api
router.get("/get-gallery", getAllGallery);

// update gallery api
router.put(
  "/:id",
  upload.fields([
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  updateGallery,
);
router.delete(
  "/:id",
  upload.fields([
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  deletegallery,
);
router.get(
  "/:id",
  upload.fields([
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  getsingleGallery,
);

module.exports = router;
