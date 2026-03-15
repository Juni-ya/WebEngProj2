import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-logo">
        <img
          src="https://via.placeholder.com/30"
          width="30"
          height="30"
          alt="Project Elec Logo"
        />
        <span>Website Logo</span>
      </div>
      <nav className="header-nav">
        <span>Home</span>
        <span>Departments</span>
        <span>Archives</span>
        <span>Flowchart</span>
      </nav>
    </header>
  );
};

export default Header;
