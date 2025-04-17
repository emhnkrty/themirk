import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './ComingSoonSlider.css';
import { Navigation } from 'swiper/modules';

const images = [
  '/images/pet1.jpg',
  '/images/beauty1.jpg',
  '/images/decor1.jpg',
  '/images/pet2.jpg',
  '/images/beauty2.jpg',
];

const ComingSoonSlider = () => {
  return (
    <section className="coming-soon-slider">
      <h2 className="title">Coming Soon</h2>
      <p className="desc">
        Check out these exciting new product previews while supplies last!
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        className="swiper-wrapper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="shop-button">Shop Now</button>
    </section>
  );
};

export default ComingSoonSlider;
