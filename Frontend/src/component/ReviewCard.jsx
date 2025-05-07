import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'


const ReviewCard = ({ image, name, rating, review }) => {
 
  const {filledStars, emptyStars} = useContext(ShopContext)

  return (
    <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <div className="text-yellow-400 text-sm mb-2">
        <span>{filledStars}</span><span className="text-gray-300">{emptyStars}</span>
      </div>
      <p className="text-gray-600 text-sm">{review}</p>
    </div>
  );
};

export default ReviewCard;
