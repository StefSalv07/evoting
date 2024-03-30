// controllers/userController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../model/userModel");
require("dotenv").config();
// exports.createUser = (req, res) => {
//   const user = new userSchema(req.body);
//   user
//     .save()
//     .then((user) =>
//       res.status(201).json({ message: "User created", data: user })
//     )
//     .catch((error) => res.status(400).json({ error: error.message }));
// };
exports.registerUser = async (req, res) => {
  try {
    const user = new userSchema(req.body);
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userSchema.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getAllUsers = (req, res) => {
  userSchema
    .find()
    .then((users) =>
      res.status(200).json({ message: "Users retrieved", data: users })
    )
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  userSchema
    .findById(id)
    .then((user) => {
      if (!user) {
        throw new Error("User not found");
      }
      res.status(200).json({ message: "User retrieved", data: user });
    })
    .catch((error) => res.status(404).json({ error: error.message }));
};

exports.updateUserById = (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  userSchema
    .findByIdAndUpdate(id, updateData, { new: true })
    .then((user) => {
      if (!user) {
        throw new Error("User not found");
      }
      res.status(200).json({ message: "User updated", data: user });
    })
    .catch((error) => res.status(404).json({ error: error.message }));
};

exports.deleteUserById = (req, res) => {
  const id = req.params.id;
  userSchema
    .findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        throw new Error("User not found");
      }
      res.status(200).json({ message: "User deleted" });
    })
    .catch((error) => res.status(404).json({ error: error.message }));
};
