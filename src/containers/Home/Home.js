import React from 'react';
import Habits from '../Habits/Habits';
import {Link} from 'react-router-dom';

export default function Home(props) {
    return (
        <div>
            <p>This is home</p>
            <Link to='/add_habit'>Click me to add a habit</Link>
            <Habits userId={props.userId}/>
        </div>
    )
};
