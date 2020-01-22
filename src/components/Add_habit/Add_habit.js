import React, {useState} from 'react'

export default function Add_habit() {
    const id = window.location.search.slice(4);
    const [newHabit, setNewHabit] = useState({newHabit: null})

    function handleInput(event) {
        setNewHabit({newHabit: event.target.value})
        // console.log('newHabit' newHabit)
    }

    return (
        <div>
            <form action={`http://localhost:8081/users/${id}/habits/${newHabit.newHabit}`} method="POST">
                <label for="habit">Enter thy habit </label> <br/>
                <input type="text" placeholder="What is your task?" onChange={handleInput}></input>
                <input type="submit"/>
            </form>
        </div>
    )
}
