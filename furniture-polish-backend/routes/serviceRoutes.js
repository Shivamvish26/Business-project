const express = require("express");
const router = express.Router();

const {
  createService,
  getAllServices,
  updateService,
  deleteService,
  getsinglePostById
} = require("../controllers/serviceController");

// Create Service
router.post("/create-services", createService);

// get all services
router.get("/get-services", getAllServices);

// update services
router.put("/:id", updateService);

// delete services
router.delete("/:id", deleteService)

// get single post
router.get("/:id", getsinglePostById)

module.exports = router;
