const mongoose = require("mongoose");

const rankSchema = new mongoose.Schema(
  {
    rankcode: {
      type: String,
      required: [true, "scorecode is required"],
    },
    rankname: {
      type: String,
      required: [true, "scorename is required"],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const rankModel = mongoose.model("Rankmaster", rankSchema);

module.exports = rankModel;
