import React, {useState} from 'react'
import Habit from '../../components/Habit/Habit'

export default function Habits() {
    const [habits, useHabits] = useState([
        {
            title: "This is a title",
            completed: true,
        },
        {
            title: "second title",
            completed: false
        },
        {
            title: "numero tres",
            completed: true
        }
    ])
    return (
        <div>
            <p>This will have a list of habits!</p>
            {habits.map((habit, index) => (
              <Habit title={habit.title} completed={habit.completed}/>  
            ))}
        </div>
    )
}
