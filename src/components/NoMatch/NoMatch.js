import React from 'react'
import {Link} from 'react-router-dom'
import './NoMatch.css'

export default function NoMatch() {
    return (
        <div>
            <h1>404</h1>
            <p>Something went wrong :(</p>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}
