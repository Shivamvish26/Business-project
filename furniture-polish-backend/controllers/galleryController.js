const Gallery = require("../models/Gallery");

// create service api
const createGallery = async (req, res) => {
  try {
    const { title, category, description, service, status } = req.body;

    const beforeImage = req.files?.beforeImage
      ? `/uploads/gallery/${req.files.beforeImage[0].filename}`
      : "";

    const afterImage = req.files?.afterImage
      ? `/uploads/gallery/${req.files.afterImage[0].filename}`
      : "";

    const gallery = new Gallery({
      title,
      category,
      description,
      beforeImage,
      afterImage,
      service,
      status,
    });

    const result = await gallery.save();

    res.status(201).json({
      message: "Gallery Created Successfully",
      gallery: result,
    });
  } catch (error) {
    console.log("Failed to Create Gallery:", error);

    res.status(500).json({
      message: "Failed to Create Gallery",
      error: error.message,
    });
  }
};

// get all service api
const getAllGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Gallery fetched successfully",
      gallery: gallery,
    });
  } catch (error) {
    console.log("Faild to get all services", error);
    res.status(500).json({
      message: "Faild to feth the gallery",
      error: message.error,
    });
  }
};

// update gallery api
const updateGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        message: "Gallery Not Found",
      });
    }

    const updateData = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      service: req.body.service,
      status: req.body.status,
    };
    if (req.files?.beforeImage) {
      updateData.beforeImage = `/uploads/gallery/${req.files.beforeImage[0].filename}`;
    }
    if (req.files?.afterImage) {
      updateData.afterImage = `/uploads/gallery/${req.files.afterImage[0].filename}`;
    }

    const updatedGallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      message: "Gallery Updated Successfully",
      gallery: updatedGallery,
    });
  } catch (error) {
    console.log("Failed to Update Gallery:", error);

    res.status(500).json({
      message: "Failed to Update Gallery",
      error: error.message,
    });
  }
};

// delet api
const deletegallery = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id);
    if (!gallery) {
      return res.status(404).json({
        message: "Gallery Not Found",
      });
    }
    res.status(200).json({
      message: "Gallery Deleted Sucessfully",
      gallery,
    });
  } catch (error) {
    console.log("Failed to delete the gallery", error);
    res.status(500).json({
      message: "Faild to delete the galley",
      error: error.message,
    });
  }
};

// single Gallery api
const getsingleGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({
        message: "Single Gallery post not found",
      });
    }
    res.status(200).json({
      message: "Single Gallery Fetched",
      gallery,
    });
  } catch (error) {
    console.log("Failed to fetch the single post");
    res.status(500).json({
      message: "Faild to fetch the Gallery",
      error: error.message,
    });
  }
};

module.exports = {
  createGallery,
  getAllGallery,
  updateGallery,
  deletegallery,
  getsingleGallery
};
