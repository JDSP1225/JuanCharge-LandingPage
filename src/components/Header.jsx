import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="JuanCharge Logo" className="logo-img" />
          <span className="logo-text">JuanCharge</span>
        </div>
        <nav className="nav">
          <div className="nav-list">
            <a href="#hero">Home</a>
            <a href="#features">Features</a>
            <a href="#maps">Maps</a>
            <a href="#contact">Contact</a>
          </div>
          <button 
            className="btn-primary login-btn"
            onClick={() => window.location.href = 'https://juan-charge-client-1ang.vercel.app/login'}
          >
            Login Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
