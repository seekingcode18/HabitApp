const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let tasks = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean },
  dates: { type: Date }
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
