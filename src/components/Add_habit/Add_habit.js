import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Add_habit(props) {
  const id = window.location.search.slice(4);
  const [newHabit, setNewHabit] = useState({ newHabit: null });
  const [frequency, setFrequency] = useState({ frequency: null });

  function handleTitle(event) {
    setNewHabit({ newHabit: event.target.value });
  }

  function handleFrequency(event) {
    setFrequency({ frequency: event.target.value });
  }

  return (
    <div>
      <Link to={`/id${props.location.search}`}>
        <h2 className="app_title">Habitapp</h2>
      </Link>
      <div className="logout_button">
        <Link to="/">Click me to log out!</Link>
      </div>
      <form
        action={`http://localhost:8081/users/${id}/habits/${newHabit.newHabit}/${frequency.frequency}`}
        method="POST"
      >
        <label for="habit">Enter thy habit </label> <br />
        <input
          type="text"
          placeholder="What is your task?"
          onChange={handleTitle}
        ></input>
        <label for="frequency">
          how many times a day do you want to do this?
        </label>{" "}
        <br />
        <input type="number" onChange={handleFrequency}></input>
        <input type="submit" />
      </form>
    </div>
  );
}
