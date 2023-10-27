const express = require("express");
const {
  partnerCreateController,
  getAllPartner,
} = require("../controllers/partnerController");

//router object
const router = express.Router();

// CREATE USER || POST
router.post("/register", partnerCreateController);

// GET ALL USERS || GET
router.get("/all-partners", getAllPartner);

module.exports = router;
