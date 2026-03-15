import React from 'react';
import './Header.css';

const Header = ({ onNavigate }) => {
  return (
    <header className="app-header">
      <div className="header-logo" onClick={() => onNavigate('#top')} style={{ cursor: 'pointer' }}>
        <img
          src="https://bulsu.edu.ph/wp-content/uploads/2023/10/bulsu-logo-1-300x300.png"
          width="30"
          height="30"
          alt="Bulacan State University Logo"
        />
        <span>BSU Research Portal</span>
      </div>
      <nav className="header-nav">
        <button onClick={() => onNavigate('#home')}>Home</button>
        <button onClick={() => onNavigate('#departments')}>Departments</button>
        <button onClick={() => onNavigate('#archives')}>Archives</button>
        <button onClick={() => onNavigate('#flowchart')}>Flowchart</button>
      </nav>
    </header>
  );
};

export default Header;
