import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <img src="https://via.placeholder.com/32x32" alt="Logo" />
            <span>JuanCharge</span>
          </div>
          <p className="footer-desc">
            Turning trash into power. We are committed to fostering cleaner communities through sustainable, incentive-based energy solutions.
          </p>
          <div className="footer-socials">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">i</a>
              <a href="#" className="social-icon">t</a>
              <a href="#" className="social-icon">y</a>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Section</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#features">System Features</a></li>
            <li><a href="#maps">Find a Kiosk</a></li>
            <li><a href="#">Partner with Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center / FAQ</a></li>
            <li><a href="#">Report a Kiosk Issue</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#">Download the App</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <ul className="footer-contact">
            <li>support@juancharge.com</li>
            <li>+1 (555) 123-4567</li>
            <li>Camia Street, 178 Camarin Rd, Caloocan</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© 2025 JuanCharge. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Terms Of Use</a> | <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
