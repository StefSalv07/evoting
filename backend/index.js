const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.listen("3000", (err, success) => {
  if (err) console.log(err);
  else console.log("Server is running on port  3000");
});
// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/evoting")
  .then((success) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
