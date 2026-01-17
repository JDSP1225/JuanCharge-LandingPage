import React from 'react';
import './Features.css';

const Features = ({ id }) => {
  const features = [
    {
      title: 'Hybrid Power System',
      description: 'Uses photovoltaic panels and a mini wind turbine to generate continuous, reliable electricity for charging, day and night.',
      icon: '⚡',
      color: 'var(--accent-yellow)'
    },
    {
      title: 'AI Smart Segregation',
      description: 'Employs machine learning to automatically identify, classify, and sort recyclable materials like plastic bottles and cans with high accuracy.',
      icon: '🤖',
      color: 'var(--accent-blue)'
    },
    {
      title: 'Reward Credits',
      description: "Converts the weight or type of recyclables deposited into digital points or 'energy credits', redeemable for mobile device charging.",
      icon: '💰',
      color: 'var(--primary-green)'
    }
  ];

  return (
    <section id={id} className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title" style={{ color: feature.color }}>{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
