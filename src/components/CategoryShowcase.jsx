import React from 'react';
import './CategoryShowcase.css';

const CategoryShowcase = () => {
  return (
    <section className="category-section">
      <div className="category-left">
        <h2 className="main-title">We sell <span>quality</span> products</h2>
        <p className="description">
          Themirk Commerce LLC is a U.S. based company selling beauty products, home decor
          and pet accessories. We strive to provide customers with high quality products
          and outstanding service.
        </p>
        <button className="shop-button">Shop Now →</button>
      </div>

      <div className="category-right">
        <div className="category-box">
          <h3>Beauty</h3>
          <p className="sub">Makeup</p>
          <p className="box-text">We offer a wide selection of makeup including foundations, lipsticks, eyeshadows and more from top brands.</p>
        </div>

        <div className="category-box">
          <h3>Skincare</h3>
          <p className="sub">Lotions</p>
          <p className="box-text">Our skincare selection features facial cleansers, creams, serums and body lotions using high quality ingredients.</p>
        </div>

        <div className="category-box">
          <h3>Fragrance</h3>
          <p className="sub">Perfumes</p>
          <p className="box-text">We carry a variety of perfumes, colognes and body sprays from well known fragrance houses.</p>
        </div>

        <div className="category-box">
          <h3>Haircare</h3>
          <p className="sub">Shampoos</p>
          <p className="box-text">Themirk offers salon quality shampoos, conditioners, hair treatments and styling products.</p>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
