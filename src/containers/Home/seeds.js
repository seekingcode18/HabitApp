const express = require('express');
const app = express();
const User = require('../../../user.model')

module.exports = function seedEvents(req,res) {
    const users = [
        {
            name: 'name 1',
            username: "username1",
            password: "password1",
            habits: [
                {
                    title: "title 1",
                    completed: true
                },
                {
                    title: "title 2",
                    completed: false
                },
                {
                    title: "title 3",
                    completed: true
                }
            ]
        },
        {
            name: 'name 2',
            username: "username2",
            password: "password2",
            habits: [
                {
                    title: "title a",
                    completed: false
                },
                {
                    title: "title b",
                    completed: true
                },
                {
                    title: "title c",
                    completed: false
                }
            ]
        }
    ]
    
    for(user of users) {
        const newUser = new User(user);
        newUser.save();
    }
    
    res.send('Database seeded!')
};

