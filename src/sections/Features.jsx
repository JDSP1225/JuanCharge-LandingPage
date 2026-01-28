import React from 'react';
import './Features.css';
import icon1 from '../assets/Electricity.png';
import icon2 from '../assets/Disposal.png';
import icon3 from '../assets/Dollar Coin.png';

const Features = ({ id }) => {
  const features = [
    {
      title: "Hybrid Power System",
      description: "Uses photovoltaic panels and a mini wind turbine to generate continuous, reliable electricity for charging, day and night.",
      color: "#F8CF59",
      icon: icon1
    },
    {
      title: "AI Smart Segregation",
      description: "Employs machine learning to automatically identify, classify, and sort recyclable materials like plastic bottles and cans with high accuracy.",
      color: "#1976D2",
      icon: icon2
    },
    {
      title: "Reward Credits",
      description: "Converts the weight or type of recyclables deposited into digital points or 'energy credits', redeemable for mobile device charging.",
      color: "#4CAF50",
      icon: icon3
    }
  ];

  return (
    <section id={id} className="features">
      <div className="features-wrapper">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="feature-header">
              <div className="icon-container" style={{ backgroundColor: `${item.color}15` }}>
                <img src={item.icon} alt={item.title} className="feature-icon-img" />
              </div>
              <h3 className="feature-title" style={{ color: item.color }}>{item.title}</h3>
            </div>
            <p className="feature-text">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
