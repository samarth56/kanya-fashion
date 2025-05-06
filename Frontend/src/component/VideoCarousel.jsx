import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Title from './Title';
import VideoItem from './VideoItem';
import { ShopContext } from '../context/ShopContext';

const VideoCarousel = () => {
  const { carouselVideo } = useContext(ShopContext);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'IN'} text2={'ACTION'} />
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // fallback for very small screens
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
      >
        {carouselVideo.map((video, index) => (
          <SwiperSlide key={index}>
            <VideoItem src={video.video} name={video.name} cost={video.cost} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
