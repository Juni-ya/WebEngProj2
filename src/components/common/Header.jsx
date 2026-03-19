import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="shadow-sm bulsu-header modern-navbar">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center animated-brand">
        <img
          src="https://via.placeholder.com/30"
          width="30"
          height="30"
          className="d-inline-block align-top me-2 animated-logo"
          alt="BulSU Logo"
        />
        <span className="fw-bold animated-text">BulSU COE</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="animated-toggle" />
      <Navbar.Collapse id="basic-navbar-nav" className="animated-collapse">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/" exact activeClassName="active-link" className="nav-link-modern">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/departments" activeClassName="active-link" className="nav-link-modern">Departments</Nav.Link>
          <Nav.Link as={NavLink} to="/archives" activeClassName="active-link" className="nav-link-modern">Archives</Nav.Link>
          <Nav.Link as={NavLink} to="/flowchart" activeClassName="active-link" className="nav-link-modern">Flowchart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
