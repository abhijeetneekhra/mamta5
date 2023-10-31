const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    partnername: {
      type: String,
      required: [true, "statecode is required"],
    },
    logoname: {
      type: String,
      required: [true, "logoname is required"],
    },
    logocontent: { type: Buffer, required: [true, "imgcontent is required"] },
    contentType: {
      type: String,
      required: [true, "contentType is required"],
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
