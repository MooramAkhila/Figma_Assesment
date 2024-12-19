import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      title: 'AI-Driven Solutions',
      description: 'Leverage advanced AI to automatically improve code quality and security.',
      icon: '🤖'
    },
    {
      title: 'Real-time Analysis',
      description: 'Get instant feedback on code quality and potential security issues.',
      icon: '⚡'
    },
    {
      title: 'Smart Fixes',
      description: 'Automated solutions for common coding problems and vulnerabilities.',
      icon: '🛠️'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Why Choose CodeAnt AI</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 