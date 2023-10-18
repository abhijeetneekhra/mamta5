const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema(
  {
    districtcode: {
      type: String,
      required: [true, "distictcode is required"],
    },
    districtname: {
      type: String,
      required: [true, "districtname is required"],
    },
    state: {
      type: String,
      required: [true, "state is required"],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const districtModel = mongoose.model("Districtmaster", districtSchema);

module.exports = districtModel;
