const express = require("express");
const {
  getAllScore,
  scoreCreateController,
} = require("../controllers/scoreController");

//router object
const router = express.Router();

// CREATE USER || POST
router.post("/register", scoreCreateController);

// GET ALL USERS || GET
router.get("/all-scores", getAllScore);

module.exports = router;
