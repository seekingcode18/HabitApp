import React, { useState, useEffect } from "react";
import Habit from "../../components/Habit/Habit";

export default function Habits(props) {

    const [state, setState] = useState({habits: []})
    useEffect(() => {
      const id = window.location.search.slice(4);
        fetch(`http://localhost:8081/users/${id}/habits`)
          .then(res => res.json())
          .then((res)=> setState({habits: res}))
          // .then(res => console.log(res));
      });

    function habitMap(){
      return(
        state.habits.map((habit, index) => (
        <Habit title={habit.title} completed={habit.completed}/>
      )))
    }
    return (
        <div>
            <p>This will have a list of habits!</p>
            {state.habits.length > 0  ? habitMap() : <p>didn't render</p>}
        </div>
    )
}
