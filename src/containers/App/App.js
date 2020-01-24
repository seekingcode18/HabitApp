import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "../Home/Home";
import fetch from "../../api/fetch";
import Add_habit from "../../components/Add_habit/Add_habit";
import Habits from "../Habits/Habits";
import Login from "../Login/Login";
import NoMatch from '../../components/NoMatch/NoMatch';
import { Route, Switch, Link } from "react-router-dom";

function App() {
  const [state, setState] = useState({ userId: null });
  fetch
    .findUserByUsername("username2") //only call this on form submit and use dynamic data
    .then(result => {
      setState({ userId: result });
      console.log(result);
    });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/add_habit" component={Add_habit} />
        <Route path="/id" component={Habits} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
