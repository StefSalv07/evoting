const User = require("../model/LoginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

// Function to handle user login
exports.login = async (req, res) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "3h",
    });

    // Send token in response
    res.json({ token });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
