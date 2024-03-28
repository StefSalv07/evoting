const { body } = require("express-validator");

const loginValidation = [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
];

module.exports = { loginValidation };
