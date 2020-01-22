import React, {useState} from 'react';

export default function Login() {
    const [user, setUser] = useState({username: null})
    const [password, setPassword] = useState({password: null})

    function handleUser(event) {
        setUser({username: event.target.value})
    }

    function handlePassword(event) {
        setPassword({password: event.target.value})
    }


    return (
        <div>
            <form action="/login" method="GET">
                <label for="username">Username:</label>
                <input type="text" name="username" onChange={handleUser}></input>
                <label for="password">Password:</label>
                <input type="password" name="password" onChange={handlePassword}></input>
                <input type="submit"></input>
            </form>
            {/* <p>{password}</p> */}
        </div>
    )
}
