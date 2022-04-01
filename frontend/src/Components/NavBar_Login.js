import React from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

function NavBarLogin() {
    return <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/about" className="nav-logo">
                    RideShare
                </NavLink>
                <ul className="nav-menu">
                </ul>
            </div>
        </nav>
    </>;
}

export default NavBarLogin;

