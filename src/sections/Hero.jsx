import React from 'react';
import './Hero.css';
import appLandingNew from '../assets/app-landing-new.png';
import appDashboardNew from '../assets/app-dashboard-new.png';
import appRewardsNew from '../assets/app-rewards-new.png';

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
          <div className="hero-screenshot">
            <img src={appLandingNew} alt="App Onboarding" />
          </div>
          <div className="hero-screenshot">
            <img src={appDashboardNew} alt="App Dashboard" />
          </div>
          <div className="hero-screenshot">
            <img src={appRewardsNew} alt="App Rewards" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
