const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    schoolcode: {
      type: String,
      required: [true, "schoolcode is required"],
    },
    schoolname: {
      type: String,
      required: [true, "schoolname is required"],
    },
    state: {
      type: String,
      required: [true, "state is required"],
    },
    district: {
      type: String,
      required: [true, "district is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    pincode: {
      type: String,
      required: [true, "pincode is required"],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const schoolModel = mongoose.model("Schoolmaster", schoolSchema);

module.exports = schoolModel;
