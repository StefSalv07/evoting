const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryDescription: {
    type: String,
    required: true,
  },
  candidateId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidates",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Categories", categorySchema);
