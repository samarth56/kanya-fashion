import React from 'react';
import { assets } from '../assets/assets';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center   py-12 border-t-2  text-center">
      <img
        src={assets.logo3}
        alt="About Us"
        className="w-24 h-24 rounded-full object-cover mb-4 shadow-md lg:w-36 lg:h-36"
      />
      <h1 className="text-md outfit-light lg:text-2xl font-bold mb-4 text-[#EB2188]">
        #WE ARE KANYA FASHION
      </h1>
      <p className="text-[0.8rem] lg:text-base text-gray-600 max-w-4xl">
      Kanya Fashion offers stylish and affordable ethnic wear for women. We specialize in designer kurtis, elegant anarkalis, and festive sarees designed for the modern Indian woman. Whether you're looking for something casual, office-friendly, or for a special occasion, Kanya Fashion has the perfect outfit for you. 
      Discover the best in affordable ethnic fashion and shop the latest trends at Kanya Fashion today!
      </p>
    </div>
  );
};

export default AboutUs;
