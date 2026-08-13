const Gallery = require("../models/Gallery");

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

module.exports = {
  createGallery,
};
