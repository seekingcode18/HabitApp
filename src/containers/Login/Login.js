import React, { useState } from "react";
import axios from "axios";
import "../App/App.css";

export default function Login() {
  const [user, setUser] = useState({ username: null });
  const [password, setPassword] = useState({ password: null });

  return (
    <div>
        <div className="login_box">
          <div class="title_logo">
            <img src="https://img.icons8.com/bubbles/100/000000/double-tick.png"/>
            <h2 className="app_title">Habitapp</h2>
          </div>
          <form action="http://localhost:8081/authentication" method="POST">
            <div className="form_component">
              <label for="username"></label>
              <input
                type="text"
                name="username"
                placeholder="username"
              ></input>
            </div>
            <div className="form_component">
              <label for="password"></label>
              <input
                type="password"
                name="password"
                placeholder="password"
              ></input>
            </div>
            <input
              className="submit_button"
              type="submit"
              value="submit"
            ></input>
          </form>
        </div>
    </div>
  );
}
