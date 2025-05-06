import React from 'react';

const VideoItem = ({ src }) => {
  return (
    <video
      src={src}
      className="w-full h-full rounded-lg"
      autoPlay="true"
      muted
      loop
    />
  );
};

export default VideoItem;
