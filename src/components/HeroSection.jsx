import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-subtitle">FIND YOUR UNIQUE STYLE</p>
        <h1 className="hero-title">
          Themirk offers
          carefully curated
          beauty, home decor
          and pet products to
          help you express
          your personal style.
        </h1>
      
      </div>
      <div className="hero-image">
        <img src="/images/hero-section.jpg" alt="Yellow flowers" />
      </div>
    </section>
  );
};

export default HeroSection;
