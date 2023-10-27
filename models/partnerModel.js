const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    partnername: {
      type: String,
      required: [true, "statecode is required"],
    },
    logo: {
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

const partnerModel = mongoose.model("Partnermaster", partnerSchema);

module.exports = partnerModel;
