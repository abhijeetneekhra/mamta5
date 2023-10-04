const express = require("express");
const {
  studentCreateController,
  getAllStudents,
} = require("../controllers/studentController");

//router object
const router = express.Router();

// CREATE USER || POST
router.post("/register", studentCreateController);

// GET ALL USERS || GET
router.get("/all-students", getAllStudents);

module.exports = router;
