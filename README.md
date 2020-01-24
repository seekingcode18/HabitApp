# Habitapp

[Dan ledwos](https://github.com/Ledwos) ||
[Christopher King](https://github.com/seekingcode18) ||
[Elizabeth Luong](https://github.com/elizabethluong/)

## Contents

[User-Instructions](#User-Instructions) ||
[Brief](#brief) ||
[User Stories](#user-stories) ||
[Methodologies and Processes](#methodologies-and-processes) ||
[Reflections on the Project](#reflections-on-the-project)

## User Instructions

1. Open terminal and run `mongod`
2. In a new terminal `git clone https://github.com/elizabethluong/lap-3-group-project-habitapp.git`
3. `npm install`
4. `Node server`
5. Visit a browser and type in `http://localhost:8081/seed`
6. In a new terminal run `npm start`
7. Login with this username: broberts and password: password1 or with this username: jbrown and password: password2

## Brief

Create an app where users can track their habits. Developers should host a database to store the daily information about users locally.
(edited)

## User Stories

- As a user I would want to track my habits:
  - As a user I want to choose a habit I want to track
  - As a user I want to be able to add tasks to track
  - As a user I would want to be able to select the frequency of each task
  - As a user I would want to see my completed tasks.
  - As a user I would want to see my streak

Stretch goal:

- As a user I would like to be able to login
- As a user I would like to remove my task/s
- Oauth for logins

## Methodologies and Processes

- Standups every morning at 9.15AM
- Each team member:
  - Go through what was achieved the day before.
  - What they're looking to achieve in the day ahead.
  - if there's any blockers.
- MOB programming
- Retros at 5.45pm 

### Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- CSS
- JavaScript
- React
- Git & Github
- Nodemon
- Jest
- Enzyme

## Reflections on the Project

In the planning process, we struggled with visualising how to store the data in the database. We overcame this by sketching what the object would look like and then we revised this multiple times throughout the project.

One of the biggest challenge we faced was human error due to fatigue, this could be solved by shorter rotations and more frequent breaks.

Because we chose to nest the habits in the user object we had difficulties adding a habit. We ended up finding and copying a user from the database, performing logical operatons to update the user object before saving it back to the database. The final hurdle in solving this problem was using a strict type comparison between a string and a object so we replaced this with a weak comparison equality operator.
