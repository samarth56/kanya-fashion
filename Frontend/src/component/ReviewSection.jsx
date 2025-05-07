import React from 'react';
import { reviews } from '../assets/assets';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Title from './Title';

const ReviewSection = () => {
  return (
    <div className="bg-[#f8fcff] lg:py-20 py-5 px-4 text-center">

        <Title  text1={'CUSTOMER'} text2={'REVIEWS'}/>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className='lg:mt-20 my-5 '
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#f8fcff] p-6 rounded-xl shadow-md my-5  text-center h-full">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 mx-auto rounded-full object-cover mb-3"
              />
              <h3 className="font-semibold text-gray-800">{review.name}</h3>
              <div className="text-yellow-400 mb-2">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p className="text-sm text-gray-600">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
