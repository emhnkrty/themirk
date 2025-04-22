import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './ComingSoonSlider.css';
import { Navigation } from 'swiper/modules';

const products = [
  {
    src: '/images/pet1.jpg',
    description: 'Comfortable and fun products your pet will adore.',
    price: 'Average price: $10 – $25'
  },
  {
    src: '/images/beauty1.jpg',
    description: 'High-quality beauty products for your daily care routine.',
    price: 'Average price: $15 – $40'
  },
  {
    src: '/images/home1.jpg',
    description: 'Stylish decor pieces to elevate your living space.',
    price: 'Average price: $25 – $80'
  },
  {
    src: '/images/pet2.jpg',
    description: 'Comfortable and fun products your pet will adore.',
    price: 'Average price: $10 – $25'
  },
  {
    src: '/images/beauty2.jpg',
    description: 'High-quality beauty products for your daily care routine.',
    price: 'Average price: $15 – $40'
  },
  {
    src: '/images/home2.jpg',
    description: 'Stylish decor pieces to elevate your living space.',
    price: 'Average price: $25 – $80'
  },
  {
    src: '/images/pet3.jpg',
    description: 'Comfortable and fun products your pet will adore.',
    price: 'Average price: $10 – $25'
  },
  {
    src: '/images/beauty3.jpg',
    description: 'High-quality beauty products for your daily care routine.',
    price: 'Average price: $15 – $40'
  },
  {
    src: '/images/home3.jpg',
    description: 'Stylish decor pieces to elevate your living space.',
    price: 'Average price: $25 – $80'
  },
  {
    src: '/images/pet4.jpg',
    description: 'Comfortable and fun products your pet will adore.',
    price: 'Average price: $10 – $25'
  },
  {
    src: '/images/beauty4.jpg',
    description: 'High-quality beauty products for your daily care routine.',
    price: 'Average price: $15 – $40'
  },
  {
    src: '/images/home4.jpg',
    description: 'Stylish decor pieces to elevate your living space.',
    price: 'Average price: $25 – $80'
  },
  {
    src: '/images/pet5.jpg',
    description: 'Comfortable and fun products your pet will adore.',
    price: 'Average price: $10 – $25'
  },
  {
    src: '/images/beauty5.jpg',
    description: 'High-quality beauty products for your daily care routine.',
    price: 'Average price: $15 – $40'
  },
  {
    src: '/images/home5.jpg',
    description: 'Stylish decor pieces to elevate your living space.',
    price: 'Average price: $25 – $80'
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
