import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
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
          <div className="phone-mockup">
            <img src="https://via.placeholder.com/250x500/4CAF50/FFFFFF?text=App+Landing" alt="Phone Mockup 1" />
          </div>
          <div className="phone-mockup">
            <img src="https://via.placeholder.com/250x500/2196F3/FFFFFF?text=Dashboard" alt="Phone Mockup 2" />
          </div>
          <div className="phone-mockup">
            <img src="https://via.placeholder.com/250x500/FFC107/FFFFFF?text=Rewards" alt="Phone Mockup 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
