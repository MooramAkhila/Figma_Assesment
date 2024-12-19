import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      title: 'AI-Driven Solutions',
      description: 'Leverage advanced AI to automatically improve code quality and security.',
      icon: '🤖',
      color: '#818cf8'
    },
    {
      title: 'Real-time Analysis',
      description: 'Get instant feedback on code quality and potential security issues.',
      icon: '⚡',
      color: '#fbbf24'
    },
    {
      title: 'Smart Fixes',
      description: 'Automated solutions for common coding problems and vulnerabilities.',
      icon: '🛠️',
      color: '#34d399'
    },
    {
      title: 'Code Review',
      description: 'AI-powered code review suggestions and best practices.',
      icon: '👁️',
      color: '#f472b6'
    },
    {
      title: 'Performance Boost',
      description: 'Optimize your code for better performance and efficiency.',
      icon: '🚀',
      color: '#60a5fa'
    },
    {
      title: 'Security Shield',
      description: 'Detect and fix security vulnerabilities in real-time.',
      icon: '🛡️',
      color: '#a78bfa'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-background">
        <div className="features-blob"></div>
        <div className="features-grid-pattern"></div>
      </div>
      <div className="container">
        <div className="features-header">
          <span className="features-subtitle">Why Choose CodeAnt AI</span>
          <h2>Supercharge Your Development</h2>
          <p className="features-description">
            Experience the future of coding with our AI-powered platform that helps you write better, 
            safer, and more efficient code.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{'--card-color': feature.color}}>
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-card-shine"></div>
            </div>
          ))}
        </div>
        <div className="features-cta">
          <p className="stats">
            <span className="stat">
              <strong>500K+</strong> Lines Optimized
            </span>
            <span className="stat-divider">•</span>
            <span className="stat">
              <strong>10K+</strong> Happy Developers
            </span>
            <span className="stat-divider">•</span>
            <span className="stat">
              <strong>99%</strong> Success Rate
            </span>
          </p>
          <button className="features-cta-button">
            Start Coding Smarter <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features; 