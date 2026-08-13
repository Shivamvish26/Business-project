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

// get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Services fetched successfully",
      services: services,
    });
  } catch (error) {
    console.log("Get Services Error:", error);
    res.status(500).json({
      message: "Failed to fetch services",
      error: error.message,
    });
  }
};

// Update services api
const updateService = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      shortDescription: req.body.shortDescription,
      description: req.body.description,
      image: req.body.image,
      startingPrice: req.body.startingPrice,
      duration: req.body.duration,
      warranty: req.body.warranty,
      features: req.body.features,
      status: req.body.status,
    };
    const service = await Service.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }
    res.status(200).json({
      message: "Service Updated Successfully",
      service,
    });
  } catch (error) {
    console.log("Failed to Update the Service:", error);
    res.status(500).json({
      message: "Failed to Update the Service",
      error: error.message,
    });
  }
};

// Delete service
const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({
        message: "Service Not Found",
      });
    }
    res.status(200).json({
      message: "Service Deleted Successfully",
      service,
    });
  } catch (error) {
    console.log("Failed  to Delete the Service", error);
    res.status(500).json({
      message: "Failed  to delete Services",
      error: error.message,
    });
  }
};

// single service
const getsinglePostById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }
    res.status(200).json({
      message: "Service fetch Successfully",
      service,
    });
  } catch (error) {
    console.log("Failed to fetch the single post", error);
    res.status(500).json({
      message: "Failed to fetch the single post",
      error: error.message,
    });
  }
};

module.exports = {
  createService,
  getAllServices,
  updateService,
  deleteService,
  getsinglePostById,
};
