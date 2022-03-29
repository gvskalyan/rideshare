import React from "react"
import { Navbar,  NavLink } from "react-router-dom"
import "./NavBar.css"
import {isUserLoggedIn} from "./session/SessionHandler";

function NavBar()
{
    const loggedIn = isUserLoggedIn();

    const navMenu = () => {
        return <>
            <ul className="nav-menu">
                <li className="nav-item">
                    <NavLink exact to="/about" activeClassName="active" className="nav-links">
                        About Us
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
            </ul>
        </>
    }

    return<>
    <nav className="navbar">
        <div className="nav-container">
            <NavLink exact to="/about" className="nav-logo">
                RideShare
            </NavLink>
            {loggedIn ? navMenu() : ""}
        </div>
    </nav>
    </>;  
}

export default NavBar;

