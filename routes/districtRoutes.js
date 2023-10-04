const express = require("express");
const {
  districtCreateController,
  getAllDistrict,
} = require("../controllers/districtController");

//router object
const router = express.Router();

// CREATE USER || POST
router.post("/register", districtCreateController);

// GET ALL USERS || GET
router.get("/all-districts", getAllDistrict);

module.exports = router;
