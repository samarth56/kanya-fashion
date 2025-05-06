import React from 'react';
import {Link} from 'react-router-dom'

const VideoItem = ({ src, name, cost }) => {
  return (
    <Link to='/collection' className="w-full group cursor-pointer" >
      <div className="overflow-hidden rounded-lg">
        <video
          src={src}
          className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          autoPlay
          muted
          loop
        />
      </div>

      <div className="mt-1 ">
        <p className="font-medium">{name}</p>
        <p className="text-sm font-semibold text-gray-600">{cost}</p>
      </div>
    </Link>
  );
};

export default VideoItem;
