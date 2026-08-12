const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/furniture_polish")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((error) => console.log("MongoDB Connection Failed", error));
