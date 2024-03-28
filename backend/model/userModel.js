// model/userSchema.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidates",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
