const express = require("express");
const {
  schoolCreateController,
  getAllSchools,
} = require("../controllers/schoolController");

//router object
const router = express.Router();

// CREATE USER || POST
router.post("/register", schoolCreateController);

// GET ALL USERS || GET
router.get("/all-schools", getAllSchools);

module.exports = router;
