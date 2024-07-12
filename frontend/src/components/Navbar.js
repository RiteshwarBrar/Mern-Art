import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.svg';
const NavBar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Navbar.Brand className="custom-logo" href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto custom-nav">
                    <Nav.Link href="/" className="custom-nav-link">Home</Nav.Link>
                    {/* <Nav.Link href="/About" className="custom-nav-link">About the Artist</Nav.Link> */}
                    <Nav.Link href="/paintings" className="custom-nav-link">Artwork</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
