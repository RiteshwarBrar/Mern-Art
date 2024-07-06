import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar className="Nav" bg="light" expand="lg">
            <Navbar.Brand className="logo" href="/">My Website</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About the Artist</Nav.Link>
                    <Nav.Link href="/paintings">Artwork</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
