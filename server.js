const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 8080;

app.use(cors());
app.use(bodyparser.json());

mongoose.connect("mongodb://127.0.0.1:27017/habitsdfsdf", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connection established!");
});

app.listen(port, () => {
  console.log("server is running on port 8080");
});
