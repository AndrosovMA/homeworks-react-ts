import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            <div><NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink></div>
            <div><NavLink to={PATH.JUNIOR}>Junior</NavLink></div>
            <div> <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink></div>
            <div> <NavLink to={PATH.COUNTER}>Counter</NavLink></div>
            <div> <NavLink to={PATH.EXAM}>Exam</NavLink></div>
        </div>
    )
}

export default Header
