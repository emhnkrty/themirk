import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './ComingSoonSlider.css';
import { Navigation } from 'swiper/modules';

const products = [
  {
    src: '/images/pet1.jpg',
    name:'Pet Feeding Mat',
    description: 'No more mess. Anti-slip, easy-clean mat.',
    price: '💰 $12.99'
  },
  {
    src: '/images/beauty1.jpg',
    name:'Self-Cleaning Hair Brush',
    description: 'Tangle-free hair in seconds. Clean with one click.',
    price: '💰 $19.99'
  },
  {
    src: '/images/home1.jpg',
    name:'Home Decor Shelves',
    description: 'Display what matters. Sleek, space-saving shelves.',
    price: '💰 $39.99'
  },
  {
    src: '/images/pet2.jpg',
    name:'Automatic Food & Water Dispenser',
    description: 'Dual feeder for convenient pet mealtime',
    price: '💰 $23.99'
  },
  {
    src: '/images/beauty2.jpg',
    name:'18-Piece Makeup Brush Set',
    description: 'Flawless makeup, every day. Soft, pro-quality brushes.',
    price: '💰 $29.99'
  },
  {
    src: '/images/home2.jpg',
    name:'Candle Warmer Lamp',
    description: 'Warm glow, no flame. Cozy home vibes.',
    price: '💰 $27.99'
  },
  {
    src: '/images/pet3.jpg',
    name:'Pet Travel Carrier Bag',
    description: 'Comfy trips for your pet. Lightweight and breathable.',
    price: '💰 $34.99'
  },
  {
    src: '/images/beauty3.jpg',
    name:'Luxury Makeup Brush Set (3 pcs)',
    description: 'Soft, durable brushes for smooth application.',
    price: '💰 $14.90'
  },
  {
    src: '/images/home3.jpg',
    name:'Electric Mini Indoor Fireplace',
    description: 'Indoor s’mores made simple. Cozy, safe, and stylish.',
    price: '💰 $49.99'
  },
  {
    src: '/images/pet4.jpg',
    name:'Pet Bath & Grooming Set',
    description: 'Multi-piece set for easy washing and brushing.',
    price: '💰 $11.50'
  },
  {
    src: '/images/beauty4.jpg',
    name:'Ceramic Hair Styling Brush',
    description: 'Heats quickly for perfect curls and volume.',
    price: '💰 $34.95'
  },
  {
    src: '/images/home4.jpg',
    name:'Turtle-Shaped Garden Light',
    description: 'Solar-powered decorative LED lamp.',
    price: '💰 $18.75'
  },
  {
    src: '/images/pet5.jpg',
    name:'Pet Grooming Brush',
    description: 'Smooth coat, happy pet. Self-cleaning design.',
    price: '💰 $17.99'
  },
  {
    src: '/images/beauty5.jpg',
    name:'Rose Gold Eyelash Curler',
    description: 'Comfortable grip, perfect curling in seconds.',
    price: '💰 $8.90'
  },
  {
    src: '/images/home5.jpg',
    name:'Blessed Candle Holder Set',
    description: 'Add warmth and style to your home with this rustic candle holder set.',
    price: '💰 $34.99'
  }
];


const ComingSoonSlider = () => {
  return (
    <div id="coming-soon">
    <section className="coming-soon-slider">
      <h2 className="title">Products</h2>
      <p className="desc">
        Check out these exciting new product previews while supplies last!
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          // Mobil (0px ve yukarısı)
          0: {
            slidesPerView: 1,
          },
          // Tablet (768px ve yukarısı)
          768: {
            slidesPerView: 2,
          },
          // Masaüstü (1024px ve yukarısı)
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        className="swiper-wrapper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="slider-card">
              <img src={product.src} alt={`Slide ${index + 1}`} className="slider-image" />
              <div className="slider-name">{product.name}</div>
              <div className="slider-description">{product.description}</div>
              <div className="slider-price">{product.price}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </section>
    </div>
  );
};

export default ComingSoonSlider;
