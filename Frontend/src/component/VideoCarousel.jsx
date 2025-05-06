import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Title from './Title';
import VideoItem from './VideoItem';
import { carouselVideo } from '../assets/assets'; // adjust path if needed

const VideoCarousel = () => {
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'IN'} text2={'ACTION'} />
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // default for smallest screens
        loop={true}
        autoplay={{
             delay: 0,
            disableOnInteraction: false,    
  }}
        speed={3000}
           breakpoints={{
    480: { slidesPerView: 2 },   // small devices
    640: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 6 },   // large screens
  }}
>

        {carouselVideo.map((video, index) => (
          <SwiperSlide key={index}>
            <VideoItem src={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
