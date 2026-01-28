import React from 'react';
import './Hero.css';
import mockUp_1 from '../assets/mockup-1.png';
import mockUp_2 from '../assets/mockup-2.png';
import mockUp_3 from '../assets/mockup-3.png';

const Hero = ({ id }) => {
  return (
    <section id={id} className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Reliable Power & Smarter <br />
            <span className="text-gradient">Waste Segregation</span> <br />
            Barangay 178's Smart Kiosk.
          </h1>
          <p className="hero-description">
            A Solar-Wind power and AI vision to deliver device charging and automated, incentive-based waste segregation for our community pilot.
          </p>
          <div className="hero-cta">
            <a href="#" className="google-play-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
            </a>
          </div>
        </div>

        <div className="hero-visuals">
          <div className="hero-screenshot">
            <img src={mockUp_1} alt="App Starting" />
          </div>
          <div className="hero-screenshot">
            <img src={mockUp_2} alt="Getting Started" />
          </div>
          <div className="hero-screenshot">
            <img src={mockUp_3} alt="Registration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
