import React from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"
import {userLogOut} from "./session/SessionHandler";

function NavBarCommon() {

    const loggingOut = (event) => {
        event.preventDefault();
        userLogOut();
        alert("Log out successfully");
        window.location = 'Login'
    }

    return <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/about" className="nav-logo">
                    RideShare
                </NavLink>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink exact to="/UserWelcome" activeClassName="active" className="nav-links">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/Find" activeClassName="active" className="nav-links">
                            Find a Ride
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/Post" activeClassName="active" className="nav-links">
                            Post a Ride
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/Profile" activeClassName="active" className="nav-links">
                            Profile
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/login" activeClassName="active" className="nav-links" onClick={loggingOut}>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>;
}

export default NavBarCommon;

