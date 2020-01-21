import React, { useState, useEffect } from "react";
import Habit from "../../components/Habit/Habit";

export default function Habits() {

    const [state, setState] = useState({habits: []})
    useEffect(() => {
        fetch("http://localhost:8081/users/5e270c3803d1fb1018cae485/habits")
          .then(res => res.json())
          .then((res)=> setState({habits: res}))
      });
    return (
        <div>
            <p>This will have a list of habits!</p>
            {state.habits.map((habit, index) => (
              <Habit title={habit.title} completed={habit.completed}/>
            ))}
        </div>
    )
}
