import React, { useState } from "react";
import axios from "axios";

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit has run");
  }

  return (
    <div>
      <h2 className="app_title">Habitapp</h2>
      <form action="http://localhost:8081/authentication" method="POST">
        <label for="username">Username:</label>
        <input type="text" name="username"></input>
        <label for="password">Password:</label>
        <input type="password" name="password"></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}
