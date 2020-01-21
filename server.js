const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 8080;
const userRoutes = express.Router();
const seed = require('./src/containers/Home/seeds');

app.use(cors());
app.use(bodyparser.json());
app.use("/users", userRoutes);
let Users = require("./user.model");

mongoose.connect("mongodb://127.0.0.1:27017/habits", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connection established!");
});

userRoutes.route("/add").post((req, res) => {
  let user = new Users(req.body);
  user
    .save()
    .then(user => {
      res.status(200).send("user added successfully");
    })
    .catch(err => {
      res.status(400).send("adding failed");
    });
});


app.get('/users/:id/habits',async (req,res) => {
  try {
    const users = await Users.find({_id: req.params.id});
    res.json(users[0].habits);
}
  catch(error) {
    res.status(500).json({message: error.message});
  }
});

app.post('/users/:id/habits', async (req,res) => {
  // console.log(req.body)
  Users.findById(req.params.id, (err, user)=> {
    console.log(user);
    user.habits.push({title: req.body.title})
    user.save().then(user => {
      res.json('Updated user name')
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    })
  })
  // try {
  //   const users = await Users.updateOne({_id: req.params.id}, req.body.title);
  //   res.json(users);
  // }
  // catch(error){
  //   res.status(500).json({message: error.message});
  // }
});
app.get("/seed", (req,res) => {
  seed(req,res)
  res.send("Database seeded!")
});

app.listen(port, () => {
  console.log("server is running on port 8080");
});

module.exports = app;
