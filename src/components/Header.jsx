import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src="https://via.placeholder.com/40x40" alt="JuanCharge Logo" className="logo-img" />
          <span className="logo-text">JuanCharge</span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#features">Features</a></li>
            <li><a href="#maps">Maps</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="btn-primary login-btn">Login Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
