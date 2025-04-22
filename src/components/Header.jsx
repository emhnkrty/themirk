import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSlider = () => {
    const section = document.getElementById('coming-soon');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/logo.jpg" alt="Themirk Logo" className="logo-image" />
        <span className="logo-text">Themirk Commerce LLC</span>
      </div>

      <nav className="nav">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSlider(); }}>Pets</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSlider(); }}>Beauty</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSlider(); }}>Home Decor</a>
      </nav>
    </header>
  );
};

export default Header;
