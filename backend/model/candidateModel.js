const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const candidateSchema = new Schema({
  candidateName: {
    type: String,
    required: true,
    trim: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  votedBy: {},
});
module.exports = mongoose.model("Candidates", candidateSchema);
