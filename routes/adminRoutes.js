const express = require("express");
const {
  adminRegisterController,
  loginController,
} = require("../controllers/adminController");

const router = express.Router();

// CREATE USER || POST
router.post("/register", adminRegisterController);

//LOGIN || POST
router.post("/login", loginController);

module.exports = router;
