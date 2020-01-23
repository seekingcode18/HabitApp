import React, { useState } from "react";
import axios from "axios";
import '../App/App.css';

export default function Login() {
  const [user, setUser] = useState({ username: null });
  const [password, setPassword] = useState({ password: null });

  // function handleUser(event) {
  //     setUser({username: event.target.value})
  // }

  // function handlePassword(event) {
  //     setPassword({password: event.target.value})
  // }

  // function handleSubmit(event) {
  //     event.preventDefault();
  //     const form = new FormData();
  //     form.append('user', user);
  //     form.append('password', password);

  //     axios({
  //         method: 'post',
  //         url: 'http://localhost:8081/authentication',
  //         data: form,
  //         headers: {'content-type': 'multipart/form-data; boundary=${form._boundary}' }
  //     })
  //     .then(res => console.log(res))
  //     .catch(error => console.error(error))

  // }

  return (
    <div>
      <h2 className="app_title">Habitapp</h2>
      <div className="login_box_outer">
        <div className="login_box">
          <div className="login_vert_box">
            <form action="http://localhost:8081/authentication" method="POST">
              <div className="form_component">
              <label for="username">Username:</label>
              <input type="text" name="username"></input>
              </div>
              <div className="form_component">
              <label for="password">Password:</label>
              <input type="password" name="password"></input>
              </div>
              <input className="submit_button" type="submit" value="submit"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
