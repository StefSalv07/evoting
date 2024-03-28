// routes/loginRoutes.js

const express = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/loginController");

const router = express.Router();

// POST /login
router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").notEmpty(),
  ],
  login
);

module.exports = router;