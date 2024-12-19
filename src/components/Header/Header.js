import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🤖</span>
          <h1>CodeAnt AI</h1>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#features">✨ Features</a></li>
            <li><a href="#demo">🚀 Try Demo</a></li>
            <li><a href="#pricing">💎 Pricing</a></li>
            <li><a href="#contact">📬 Contact</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Sign In</button>
          <button className="signup-btn">Get Started</button>
        </div>
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header; 