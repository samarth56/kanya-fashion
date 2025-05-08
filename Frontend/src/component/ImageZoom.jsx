import React, { useRef, useState } from 'react';

const ImageZoom = ({ src }) => {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [showZoom, setShowZoom] = useState(false);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      className="w-full h-auto border relative overflow-hidden"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: showZoom ? '200%' : 'cover',
        backgroundPosition: showZoom ? backgroundPosition : 'center',
        backgroundRepeat: 'no-repeat',
        cursor: 'zoom-in'
      }}
    >
      <img
        src={src}
        alt="Zoom"
        className="w-full h-auto opacity-0"
      />
    </div>
  );
};

export default ImageZoom;
