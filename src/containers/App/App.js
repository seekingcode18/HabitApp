import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "../Home/Home";
import fetch from "../../api/fetch";
import Add_habit from "../../components/Add_habit/Add_habit";
import Habits from "../Habits/Habits";
import Login from "../Login/Login";
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
      <Link to="/">
        <h4>Persisting Title</h4>
      </Link>
      <Link to="/login">
        <p>Click me to log in!</p>
      </Link>
      <Link to="/">
        <p>Click me to log out!</p>
      </Link>

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        {/* <Route path='/login' component={Login} /> */}
        <Route path="/add_habit" component={Add_habit} />
        <Route path="/id" component={Habits} />
      </Switch>
    </div>
  );
}

export default App;
