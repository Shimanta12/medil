import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../../images/logo.png'

const MenuBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fw-bold">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#shop">Shop</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;