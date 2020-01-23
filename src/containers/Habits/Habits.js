import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Habit from "../../components/Habit/Habit";

export default function Habits(props) {
  const [state, setState] = useState({ habits: [] });
  const id = window.location.search.slice(4);
  useEffect(() => {
    fetch(`http://localhost:8081/users/${id}/habits`)
      .then(res => res.json())
      .then(res => setState({ habits: res }));
    // .then(res => console.log(res));
  });

  function habitMap() {
    return state.habits.map((habit, index) => (
      <Habit
        title={habit.title}
        habitId={habit._id}
        freq_actual={habit.freq_actual}
        freq_goal={habit.freq_goal}
        streak={habit.streak}
        userId={id}
      />
    ));
  }
  return (
    <div>
      <p>
        Add a habit by <Link to={"/add_habit?id=" + id}>clicking here</Link>
      </p>
      <p>This will have a list of habits!</p>
      {state.habits.length > 0 ? habitMap() : <p>didn't render</p>}
    </div>
  );
}
