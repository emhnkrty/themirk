import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { title: 'Cozy Blanket', image: 'https://via.placeholder.com/300x180', price: 29.99 },
  { title: 'Modern Vase', image: 'https://via.placeholder.com/300x180', price: 15.99 },
  { title: 'Dog Toy Ball', image: 'https://via.placeholder.com/300x180', price: 9.99 },
];

const Home = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px'
    }}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Home;
