const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let tasks = new Schema({
  title: { type: String, required: true },
  date: { type: Date },
  freq_goal: Number,
  freq_actual: Number,
  streak: Number
});
let User = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  habits: [tasks]
});

module.exports = mongoose.model("User", User);
