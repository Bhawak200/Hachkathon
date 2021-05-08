import React, { useContext, Component } from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import '../Cssfiles/header.css'

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light" className="header">
        <Navbar.Brand href="#home" className="mx-5 title">
          Navbar
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link href="/" className="px-5 nav">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#" className="px-5 nav">
              <span>About</span>
            </Nav.Link>
            <Nav.Link href="#" className="px-5 nav">
              <span>Contact</span>
            </Nav.Link>
            <Link to="/login">
            <Button variant="outline-success" size="lg" className="px-4 mx-2 mb-2 mt-1 nav-button h1">
                  Login
                </Button>
               
            </Link>
            <Link to="/signup">
            <Button variant="outline-success" size="lg" className=" px-4 mx-2  mb-2  mt-1 nav-button" >
                  Sign Up
                </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}



export default Header;