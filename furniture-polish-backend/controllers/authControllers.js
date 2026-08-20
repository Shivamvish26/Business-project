const Admin = require("../models/Admin");

// Register Admin
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }
    // Create new admin
    const admin = new Admin({
      name,
      email,
      password,
    });
    const result = await admin.save();
    // Don't send password in response
    result.password = undefined;
    res.status(201).json({
      message: "Admin registered successfully",
      admin: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// Login Admin------------------------------------------------------------------------
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    // Find admin
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    // Check password
    if (admin.password !== password) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    // Don't send password
    admin.password = undefined;
    res.status(200).json({
      message: "Admin login successful",
      admin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
};
