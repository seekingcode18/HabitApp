import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Habit from '../../components/Habit/Habit';

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
    <div className="habits_container">
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
      {state.habits.length > 0 ? (
        habitMap()
      ) : (
        <p>Error, please make sure you are logged in!</p>
      )}
      <p>
        <Link class="add_button" to={'/add_habit?id=' + id}>
          Add habit
        </Link>
      </p>
    </div>
  );
}
