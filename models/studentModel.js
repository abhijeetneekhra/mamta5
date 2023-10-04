const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentcode: {
      type: String,
      required: [true, "studentcode is required"],
    },
    studentname: {
      type: String,
      required: [true, "studentname is required"],
    },
    schoolname: {
      type: String,
      required: [true, "schoolname is required"],
    },
    fathersname: {
      type: String,
      required: [true, "fathersname is required"],
    },
    mobileno: {
      type: String,
      required: [true, "mobileno is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const studentModel = mongoose.model("Studentmaster", studentSchema);

module.exports = studentModel;
