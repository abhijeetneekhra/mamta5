const express = require("express");
const {
  stateCreateController,
  getAllState,
} = require("../controllers/stateController");

//router object
const router = express.Router();

// CREATE USER || POST
router.post("/register", stateCreateController);

// GET ALL USERS || GET
router.get("/all-states", getAllState);

module.exports = router;
