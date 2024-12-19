import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Revolutionizing Code Quality with AI</h1>
          <p>
            Transform your code quality and security with AI-driven solutions.
            Write cleaner, safer, and more efficient code.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <div className="code-preview">
            <pre>
              <code>
{`// Example of CodeAnt AI in action
function optimizeCode(input) {
  // AI-powered code optimization
  return improvedCode;
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 