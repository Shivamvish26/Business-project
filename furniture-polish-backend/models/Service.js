const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    startingPrice: {
      type: Number,
      default: 0,
    },

    duration: {
      type: String,
      default: "",
    },

    warranty: {
      type: String,
      default: "",
    },

    features: [
      {
        type: String,
      },
    ],

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
