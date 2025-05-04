import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import images from assets.js
import { carouselImages } from '../assets/assets'; // Adjust path as needed

const Hero = () => {
  return (
    <div className="w-full  mx-auto mt-5">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true} // Enable looping
        autoplay={{
          delay: 2500, // Autoplay delay
          disableOnInteraction: false, // Continue autoplay even after interaction
        }}
        pagination={{ clickable: true }} // Clickable pagination
        navigation={true} // Prev/Next buttons
        speed={800} // Smooth transition speed
        loopedSlides={carouselImages.length} // Number of slides to loop (important for dynamic images)
        // className="rounded-2xl"
      >
        {carouselImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-full h-[80vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
