const Contact = require("../models/Contact");

// create contact
const createContact = async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    const contact = new Contact({
      name,
      phone,
      email,
      subject,
      message,
    });

    const result = await contact.save();

    res.status(201).json({
      message: "Contact Created Successfully",
      contact: result,
    });
  } catch (error) {
    console.log("Failed to Create the Contact:", error);

    res.status(500).json({
      message: "Failed to Create the Contact",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
};
