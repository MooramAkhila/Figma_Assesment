import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">🔥 AI-Powered Code Enhancement</div>
          <h1>Write Better Code with AI Assistant</h1>
          <p>
            Transform your coding experience with our AI-powered platform. 
            Get real-time suggestions, automatic code improvements, and security checks.
          </p>
          <div className="cta-group">
            <button className="cta-button">
              <span>✨ Try For Free</span>
              <span className="arrow">→</span>
            </button>
            <div className="social-proof">
              <div className="avatars">
                <span className="avatar">👩‍💻</span>
                <span className="avatar">👨‍💻</span>
                <span className="avatar">👩‍💻</span>
              </div>
              <p>Join 10,000+ developers</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-preview">
            <div className="code-header">
              <div className="file-info">
                <span className="file-icon">📄</span>
                <span className="file-name">example.js</span>
              </div>
              <div className="code-actions">
                <button className="action-btn">Copy</button>
                <button className="action-btn">Run</button>
              </div>
            </div>
            <pre>
              <code>
{`// Before: Unoptimized code
function processData(data) {
  let result = [];
  for(let i = 0; i < data.length; i++) {
    result.push(data[i] * 2);
  }
  return result;
}

// After: AI-optimized code ✨
const processData = data => 
  data.map(item => item * 2);

// 50% faster execution time!`}
              </code>
            </pre>
            <div className="code-footer">
              <span className="ai-badge">🤖 Optimized by CodeAnt AI</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-features">
        <div className="feature">
          <span className="feature-icon">⚡</span>
          <span>50% Faster Code</span>
        </div>
        <div className="feature">
          <span className="feature-icon">🛡️</span>
          <span>Security Checks</span>
        </div>
        <div className="feature">
          <span className="feature-icon">🔄</span>
          <span>Real-time Updates</span>
        </div>
      </div>
    </section>
  );
}

export default Hero; 