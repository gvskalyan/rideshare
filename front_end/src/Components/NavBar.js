import React from "react"
import { Navbar,  NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar()
{
    return<>
    <nav className="navbar">
        <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
                RideShare
            </NavLink>

            <ul className="nav-menu">
                <li className="nav-item">
                    <NavLink exact to="/About" activeClassName="active" className="nav-links">
                        About
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
        </div>
    </nav>
    </>;  
}

export default NavBar;

