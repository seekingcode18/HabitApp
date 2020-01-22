const express = require("express");
const app = express();
const User = require("../../../user.model");

module.exports = function seedEvents(req, res) {
  const users = [
    {
      name: "name 1",
      username: "username1",
      password: "password1",
      habits: [
        {
          title: "title 1",
          date: "2020-01-21",
          freq_goal: 1,
          freq_actual: 0,
          streak: 0
        },
        {
          title: "title 2",
          date: "2018-09-30",
          freq_goal: 5,
          freq_actual: 1,
          streak: 2
        },
        {
          title: "title 3",
          date: "2019-02-18",
          freq_goal: 2,
          freq_actual: 1,
          streak: 0
        }
      ]
    },
    {
      name: "name 2",
      username: "username2",
      password: "password2",
      habits: [
        {
          title: "title a",
          date: "2014-06-18",
          freq_goal: 2,
          freq_actual: 1,
          streak: 0
        },
        {
          title: "title b",
          date: "2012-02-12",
          freq_goal: 5,
          freq_actual: 2,
          streak: 0
        },
        {
          title: "title c",
          date: "2008-06-10",
          freq_goal: 3,
          freq_actual: 1,
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
