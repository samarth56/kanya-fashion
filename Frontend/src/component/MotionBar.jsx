import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const offers = [
  '🔥 Flat 30% OFF on Kurtis!',
  '🚚 Free Shipping above ₹999!',
  '🎁 Use Code: FEST30 for extra 10% OFF!',
  '💥 New Arrivals just dropped!',
  '⏰ Limited Time Offer!',
];

const MotionBar = () => {
  return (
    <div className="bg-[#EB2188] text-white py-2">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={400} // fast slide transition
        autoplay={{
          delay: 2500, // stay in center for 2.5 seconds
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className="text-center  text-md">
              {offer}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MotionBar;
