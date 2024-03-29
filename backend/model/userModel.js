// model/userSchema.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
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
  votedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidates",
  },
});

module.exports = mongoose.model("User", userSchema);
