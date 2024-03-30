const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const batchSchema = new Schema({
  batchName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Batches", batchSchema);
