import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/svgs/logo.svg';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        // <Navbar expand="lg" className="custom-navbar">
        //     <Navbar.Brand className="custom-logo" href="/">
        //         <img src={logo} alt="Logo" />
        //     </Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="ml-auto custom-nav">
        //             <NavLink to="/" className="custom-nav-link">Home</NavLink>
        //             {/* <Nav.Link href="/About" className="custom-nav-link">About the Artist</Nav.Link> */}
        //             <NavLink to="/paintings" className="custom-nav-link">Artwork</NavLink>
        //             <NavLink to="/inventory" className="custom-nav-link">Inventory</NavLink>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logo} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/paintings" className="nav-link">Artwork</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/inventory" className="nav-link">Inventory</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
