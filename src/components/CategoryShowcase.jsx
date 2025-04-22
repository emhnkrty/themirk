import React from 'react';
import './CategoryShowcase.css';

const CategoryShowcase = () => {
  return (
    <section className="category-section">
      <div className="category-left">
        <h2 className="main-title">We sell <span>quality</span> products</h2>
        <p className="description">
          We bring style and care to your everyday life.
          Themirk Commerce LLC is a U.S.-based brand offering carefully selected beauty products, elegant home decor, and practical pet accessories. Our goal is to deliver quality, comfort, and a touch of inspiration to every customer.
        </p>

      </div>

      <div className="category-right">
        <div className="category-box">
          <h3>🧴Beauty</h3>
          <p className="sub">Makeup & Skincare
          </p>
          <p className="box-text">From flawless foundations to nourishing creams – explore our beauty picks that elevate your self-care game.
          </p>
        </div>

        <div className="category-box">
          <h3>🐾 Pet
          </h3>
          <p className="sub">Accessories & Essentials
          </p>
          <p className="box-text">Soft beds, playful toys, and must-have gear for your furry companions. Because they deserve the best.
          </p>
        </div>

        <div className="category-box">
          <h3>🏡 Home Decor
          </h3>
          <p className="sub">Modern & Minimalist Touches
          </p>
          <p className="box-text">Add warmth and personality to your space with our curated collection of stylish, easy-to-love decor.</p>
        </div>


      </div>
    </section>
  );
};

export default CategoryShowcase;
