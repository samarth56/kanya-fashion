import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { carouselImages } from '../assets/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full mx-auto lg:mt-32 mt-28">
      <Link to="/collection">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full  relative"
        >
          {carouselImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                key={activeIndex === idx ? `active-${idx}` : `inactive-${idx}`}
                src={img}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover scale-110 animate-zoomOut"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Link>
    </div>
  );
};

export default Hero;
