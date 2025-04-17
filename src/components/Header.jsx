import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/logo.jpg" alt="Themirk Logo" className="logo-image" />
        <span className="logo-text">Themirk Commerce LLC</span>
      </div>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/">Pets</a>
        <a href="/">Home Decor</a>
        <a href="/">Contact</a>
      </nav>

     
    </header>
  );
};

export default Header;
