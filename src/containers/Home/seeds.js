const express = require("express");
const app = express();
const User = require("../../../user.model");

module.exports = function seedEvents(req, res) {
  const users = [
    {
      name: "Ben Roberts",
      username: "broberts",
      password: "password1",
      habits: [
        {
          title: "glass of water",
          date: "2020-1-22",
          freq_goal: 8,
          freq_actual: 0,
          streak: 0
        },
        {
          title: "reading sessions",
          date: "2020-1-22",
          freq_goal: 2,
          freq_actual: 0,
          streak: 0
        },
        {
          title: "meditate",
          date: "2020-1-22",
          freq_goal: 2,
          freq_actual: 0,
          streak: 5
        }
      ]
    },
    {
      name: "Jenny brown",
      username: "jbrown",
      password: "password2",
      habits: [
        {
          title: "HIIT training",
          date: "2014-06-18",
          freq_goal: 1,
          freq_actual: 0,
          streak: 2
        },
        {
          title: "eating raw kale",
          date: "2012-02-12",
          freq_goal: 3,
          freq_actual: 1,
          streak: 1
        },
        {
          title: "feed dog",
          date: "2008-06-10",
          freq_goal: 3,
          freq_actual: 0,
          streak: 0
        }
      ]
    }
  ];

  for (user of users) {
    const newUser = new User(user);
    newUser.save();
  }

  res.send("Database seeded!");
};
