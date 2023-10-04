const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema(
  {
    districtcode: {
      type: String,
      required: [true, "statecode is required"],
    },
    districtname: {
      type: String,
      required: [true, "statename is required"],
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
