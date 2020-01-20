import React from 'react'

export default function Add_habit() {
    return (
        <div>
            <form action="/habits" method="POST">
                <label for="habit">Enter thy habit </label> <br/>
                <input type="text" placeholder="What is your task?"></input>
                <input type="submit"/>
            </form>
        </div>
    )
}
