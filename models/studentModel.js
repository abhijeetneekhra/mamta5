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
    parentsname: {
      type: String,
      required: [true, "parentsname is required"],
    },
    mobile: {
      type: String,
      required: [true, "mobile is required"],
    },
    classs: {
      type: String,
      required: [true, "class is required"],
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
    },
    schoolcode: {
      type: String,
      required: [true, "schoolcode is required"],
    },
    schoolname: {
      type: String,
      required: [true, "schoolname is required"],
    },
    pin: {
      type: String,
      required: [true, "pin is required"],
    },
    state: {
      type: String,
      required: [true, "state is required"],
    },
    district: {
      type: String,
      required: [true, "district is required"],
    },
    totalquestion: {
      type: String,
      required: [true, "totalquestion is required"],
    },
    correctanswer: {
      type: String,
      required: [true, "correctanswer is required"],
    },
    notattempted: {
      type: String,
      required: [true, "notattempted is required"],
    },
    neatness: {
      type: String,
      required: [true, "neatness is required"],
    },
    score: {
      type: String,
      required: [true, "score is required"],
    },
    percentage: {
      type: String,
      required: [true, "percentage is required"],
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
