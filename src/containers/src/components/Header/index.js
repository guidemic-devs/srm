import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap";
import {NavLink, Link} from "react-router-dom";

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
      
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">SRM</Link>
    {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {/* <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      <Nav>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/blog" className="nav-link">Blog</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/refer" className="nav-link">Refer</NavLink>
        </li>
      </Nav>
      <Nav>
        <li className="nav-item">
        <NavLink to="/about" className="nav-link">About</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </Nav>
      <Nav>
        <li className="nav-item">
        <NavLink to="/signin" className="nav-link">Signin</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/signup" className="nav-link">Signup</NavLink>
        </li>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
   )

 }

export default Header
