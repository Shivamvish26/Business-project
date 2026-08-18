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

// get all contact
const getAllcontact = async (req, res) => {
  try {
    const contact = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Contact Fetched Successfully",
      contact: contact,
    });
  } catch (error) {
    console.log("Get Contact Error", error);
    res.status(500).json({
      message: "Faild to get the contact",
      error: error.message,
    });
  }
};

// update status
const updateContactStatus = async (req, res) => {
  try {
    const { status, adminNote } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        status,
        adminNote,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!contact) {
      return res.status(404).json({
        message: "Contact Not Found",
      });
    }

    res.status(200).json({
      message: "Contact Status Updated Successfully",
      contact,
    });
  } catch (error) {
    console.log("Failed to Update Contact Status:", error);

    res.status(500).json({
      message: "Failed to Update Contact Status",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
  getAllcontact,
  updateContactStatus,
};
