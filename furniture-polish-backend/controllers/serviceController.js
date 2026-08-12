const Service = require("../models/Service");

// Create Service
const createService = async (req, res) => {
  try {
    const {
      title,
      slug,
      shortDescription,
      description,
      image,
      startingPrice,
      duration,
      warranty,
      features,
      status,
    } = req.body;

    const existingService = await Service.findOne({ slug });

    if (existingService) {
      return res.status(400).json({
        message: "Service with this slug already exists",
      });
    }

    const service = new Service({
      title,
      slug,
      shortDescription,
      description,
      image,
      startingPrice,
      duration,
      warranty,
      features,
      status,
    });

    const result = await service.save();

    res.status(201).json({
      message: "Service created successfully",
      service: result,
    });
  } catch (error) {
    console.log("Create Service Error:", error);

    res.status(500).json({
      message: "Failed to create service",
      error: error.message,
    });
  }
};

module.exports = {
  createService,
};
