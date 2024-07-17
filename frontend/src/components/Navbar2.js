import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/svgs/logo.svg';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Navbar.Brand className="custom-logo" href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto custom-nav">
                    <NavLink to="/" className="custom-nav-link">Home</NavLink>
                    {/* <Nav.Link href="/About" className="custom-nav-link">About the Artist</Nav.Link> */}
                    <NavLink to="/paintings" className="custom-nav-link">Artwork</NavLink>
                    <NavLink to="/inventory" className="custom-nav-link">Inventory</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
