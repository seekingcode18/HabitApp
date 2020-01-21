import React, { useState, useEffect } from "react";
import Habit from "../../components/Habit/Habit";

export default function Habits() {

    const [state, setState] = useState({habits: []})
    useEffect(() => {
        fetch("http://localhost:8081/users/5e259fee807dc62f6c96a3b6/habits")
          .then(res => res.json())
          .then((res)=> setState({habits: res}))
        //   .then(res => console.log(res));
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
