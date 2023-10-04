const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    statecode: {
      type: String,
      required: [true, "statecode is required"],
    },
    statename: {
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

const stateModel = mongoose.model("Statemaster", stateSchema);

module.exports = stateModel;
