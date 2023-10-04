const express = require("express");
const {
  rankCreateController,
  getAllRank,
} = require("../controllers/rankController");

//router object
const router = express.Router();

// CREATE USER || POST
router.post("/register", rankCreateController);

// GET ALL USERS || GET
router.get("/all-ranks", getAllRank);

module.exports = router;
