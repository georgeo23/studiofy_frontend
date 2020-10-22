import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../reducer/AuthReducer'
import '../styles/NavBar.css'
export default function NavBar() {
    return(
        <div className="navDiv">
            <h1 className="titleH1">Studiofy</h1>
            <nav>
                <NavLink className="navLink" to='/home/'>
                    Home
                </NavLink>
                <NavLink className="navLink" to='/home/covers'>
                    Covers
                </NavLink>
                <NavLink className="navLink" to='/home/mycovers'>
                    My Covers
                </NavLink>
                <NavLink className="navLink" to='/home/record'>
                    Record
                </NavLink>
                <NavLink className="navLink" to='/home/submit'>
                    Submit
                </NavLink>
                <NavLink onClick={() => logoutUser()} className="navLink" to="/">
                    Logout
                </NavLink>
            </nav>
        </div>
    )
}