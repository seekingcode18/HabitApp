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
    <div className="addHabit">
      <div className="habits_title">
        <div className="habits_title_text">
          <img src="https://img.icons8.com/bubbles/100/000000/double-tick.png" />
          <h2 className="app_title">Habitapp</h2>
        </div>
        <div>
          <Link to="/" class="logout_button">
            &times;
          </Link>
        </div>
      </div>
      <form
        action={`http://localhost:8081/users/${id}/habits/${newHabit.newHabit}/${frequency.frequency}`}
        method="POST"
      >
        <input
          type="text"
          placeholder="What is your task?"
          onChange={handleTitle}
          className="habitTitle "
          list="habits"
        >
        </input>
        <datalist id="habits">
          <option>HIIT</option>
          <option>Yoga</option>
          <option>Meditate</option>
          <option>Reading</option>
          <option>Drinking Water</option>
          <option>Eating Vegetables</option>
          <option>Eating Fruit</option>
          <option>Writing</option>
          <option>Cooking</option>
          <option>Push-ups</option>
          <option>Sleep Earlier</option>
        </datalist>
        <br /><br/>
        <input type="number" min="1" onChange={handleFrequency} placeholder="Select Frequency"></input><br/>
        <input className="submit_button" type="submit" style={{marginLeft: "45px"}}/>
      </form>
    </div>
  );
}
