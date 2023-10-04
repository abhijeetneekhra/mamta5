const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    scorecode: {
      type: String,
      required: [true, "scorecode is required"],
    },
    scorename: {
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

const scoreModel = mongoose.model("Scoremaster", scoreSchema);

module.exports = scoreModel;
