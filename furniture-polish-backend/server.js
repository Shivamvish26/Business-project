const express = require("express");
const app = express();
const cors = require("cors");

// db connection
const connectDB = require("./config/db");

// middleware
app.use(express.json());

// cors
app.use(cors());

const adminRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");
const testmoinalRoutes = require("./routes/testimonialRoutes");
const faqRoutes = require("./routes/faqRoutes");

// sample post
app.post("/sample", (req, resp) => {
  resp.send("Sample Post API is Working");
});

// Admin route
app.use("/api/admin", adminRoutes);

// Service route
app.use("/api/service", serviceRoutes);

// gallery routes
app.use("/api/gallery", galleryRoutes);

// booking routes
app.use("/api/booking", bookingRoutes);

// contact routes
app.use("/api/contact", contactRoutes);

// testimonial routes
app.use("/api/testimonial", faqRoutes);

// faq routes
app.use("/api/faq", faqRoutes)

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on port 3000");
});
