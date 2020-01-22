import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";

export default function Habit(props) {
  return (
    <div>
      {/* <Link to={("/update_habit/", props.habitId, props.userId)}> */}
      <p>
        <a
          href={`http://localhost:8081/users/${props.userId}/habits/${props.habitId}`}
        >
          {props.title}:{props.habitId} / {props.userId}
        </a>
      </p>
      {/* </Link> */}
      {/* <Switch>
 <Route
          path="/update_habit"
          component={() => {
            window.location.href = `http://localhost:8081/users/${props.userId}/habits/${props.habitId}`;
            return null;
          }}
        />
      </Switch> */}
    </div>
  );
}
