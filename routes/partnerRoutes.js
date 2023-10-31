const express = require("express");

const {
  partnerCreateController2,
  partnerCreateController,
  getAllPartner,
} = require("../controllers/partnerController");

//router object
const router = express.Router();

// CREATE USER || POST
router.post("/register", partnerCreateController);

// CREATE Partner record with icon || POST
router.post("/register2", partnerCreateController2);

// GET ALL USERS || GET
router.get("/all-partners", getAllPartner);

module.exports = router;
