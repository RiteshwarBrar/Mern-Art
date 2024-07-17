import React from 'react';
import logo from '../assets/svgs/logo.svg';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <NavLink to="/">
                        <img className="customlogo" src={logo} alt="Logo" />
                    </NavLink>

                        <ul className="navlinks-list">
                            <li className="navitem">
                                <NavLink to="/" className="navlink">Home</NavLink>
                            </li>
                            <li className="navitem">
                                <p>|</p>
                            </li>
                            <li className="navitem">
                                <NavLink to="/paintings" className="navlink">Artwork</NavLink>
                            </li>
                            <li className="navitem">
                                <p>|</p>
                            </li>
                            <li className="navitem">
                                <NavLink to="/shop" className="navlink">Shop</NavLink>
                            </li>
                        </ul>
                    
                    
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
