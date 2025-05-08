import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ id, image, title, link }) => {
  return (
    <Link to={link} className='text-gray-700 cursor-pointer group '>
      <div className='overflow-hidden rounded-lg'>
        <img
          className='w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out'
          src={image}
          alt={title}
        />
      </div>
      <h3 className=' text-sm lg:text-lg font-semibold text-center group-hover:text-black'>
        {title}
      </h3>
    </Link>
  );
};

export default CategoryItem;
