import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            <img src={logo} alt="JuanCharge Logo" className="logo-img" />
            <span className="logo-text2">JuanCharge</span>
          </div>
          <p className="footer-mission">
            Turning trash into power. We are committed to fostering cleaner communities
            through sustainable, incentive-based energy solutions.
          </p>
          <div className="footer-socials">
            <h4 className="social-title">Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-link facebook"><FaFacebookF /></a>
              <a href="#" className="social-link instagram"><FaInstagram /></a>
              <a href="#" className="social-link twitter"><FaTwitter /></a>
              <a href="#" className="social-link youtube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Section</h4>
          <ul className="link-list">
            <li><a href="#hero"><MdKeyboardArrowRight /> Home</a></li>
            <li><a href="#"><MdKeyboardArrowRight /> System Features</a></li>
            <li><a href="#maps"><MdKeyboardArrowRight /> Find a Kiosk</a></li>
            <li><a href="#"><MdKeyboardArrowRight /> Partner with Us</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Support</h4>
          <ul className="link-list">
            <li><a href="#"><MdKeyboardArrowRight /> Help Center / FAQ</a></li>
            <li><a href="#"><MdKeyboardArrowRight /> Report a Kiosk Issue</a></li>
            <li><a href="#contact"><MdKeyboardArrowRight /> Contact Us</a></li>
            <li><a href="#"><MdKeyboardArrowRight /> Download the App</a></li>
          </ul>
        </div>

        <div className="footer-connect">
          <h4 className="footer-title">Connect</h4>
          <p>support@juancharge.com</p>
          <p>+1 (555) 123-4567</p>
          <p className="address">
            Camia Street, 178 Camarin Rd,<br />
            Caloocan
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-container">
          <p>© 2025 JuanCharge. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Terms Of Use</a>
            <span className="divider">|</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;