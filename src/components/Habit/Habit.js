import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";

export default function Habit(props) {
  return (
    <div className="task_container">
        <a
          href={`http://localhost:8081/users/${props.userId}/habits/${props.habitId}`}
        >
          <p class="task_title">
            {props.title}
          </p>
        <p>
          Frequency: {props.freq_actual} / {props.freq_goal}
        </p>
        <p>Streak: {props.streak}</p>
        </a>
    </div>
  );
}
