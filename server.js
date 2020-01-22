const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 8081;
const userRoutes = express.Router();
const seed = require("./src/containers/Home/seeds");

app.use(cors());
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
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

// adds a new user
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

// gets habits for one user
app.get("/users/:id/habits", async (req, res) => {
  try {
    const users = await Users.find({ _id: req.params.id });
    res.json(users[0].habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// inserts one habit into a user
app.post("/users/:id/habits/:newHabit", async (req, res) => {
  Users.findById(req.params.id, (err, user) => {
    user.habits.push({ title: req.params.newHabit });
    user
      .save()
      .then(user => {
        res.redirect(`http://localhost:3000/id?id=${user._id}`);
      })
      .catch(err => {
        res.status(400).json({ message: err.message });
      });
  });
});

//complete a habit

app.get("/users/:id/habits/:habitId", async (req, res) => {
  Users.findById(req.params.id, (err, user) => {
    console.log(user.habits.find(habit => habit._id == req.params.habitId))
    // user.habits.findById(req.params.habitId, (err, habit) => {
    //   console.log(habit);
    //   habit.freq_actual++;
    //   if (habit.freq_actual === habit.freq_goal) {
    //     var dateObj = new Date();
    //     var month = dateObj.getUTCMonth() + 1; //months from 1-12
    //     var day = dateObj.getUTCDate() - 1;
    //     var year = dateObj.getUTCFullYear();
    //     yesterday = year + "/" + month + "/" + day;
    //     if (yesterday == habit.date) {
    //       habit.streak++;
    //     } else {
    //       habit.streak *= 0;
    //     }
    //   }
    //   habit.save().then(res => console.log(res));
    // });
    // console.log(user);
    res.redirect(`http://localhost:3000/id?id=${user._id}`);

    // user
    //   .save()
    //   .then(user => {
    //     // res.json("has been updated");
    //     res.redirect(`http://localhost:3000/id?id=${user._id}`);
    //   })
    //   .catch(err => {
    //     res.status(400).json({ message: err.message });
    //   });
  });
});

// check username and password using req.body <-- data passed on using axios
app.post("/authentication", async (req, res) => {
  console.log(req.body.username);
  try {
    const user = await Users.findOne({
      username: req.body.username,
      password: req.body.password
    });
    // res.json(user._id)
    res.redirect(`http://localhost:3000/id?id=${user._id}`);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

app.get("/seed", (req, res) => {
  seed(req, res);
  res.send("Database seeded!");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

module.exports = app;
