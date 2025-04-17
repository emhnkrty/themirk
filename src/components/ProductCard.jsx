import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
