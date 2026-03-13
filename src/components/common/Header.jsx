import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="shadow-sm">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src="https://via.placeholder.com/30"
          width="30"
          height="30"
          className="d-inline-block align-top me-2"
          alt="Project Elec Logo"
        />
        <span className="fw-bold">Project Elec</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/" exact activeClassName="active-link">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/departments" activeClassName="active-link">Departments</Nav.Link>
          <Nav.Link as={NavLink} to="/archives" activeClassName="active-link">Archives</Nav.Link>
          <Nav.Link as={NavLink} to="/flowchart" activeClassName="active-link">Flowchart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
