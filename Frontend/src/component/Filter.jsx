import React, { useState } from 'react';
import { ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';

const Filter = ({
  colors = [],
  sizes = [],
  priceRange = [0, 1000],
  onFilterChange,
}) => {
  const [openSections, setOpenSections] = useState({
    color: true,
    size: true,
    price: true,
  });

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [minPrice, setMinPrice] = useState(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(priceRange[1]);

  // Toggle full filter visibility on small screens
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleColorChange = (color) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setSelectedColors(updatedColors);
    emitChange(updatedColors, selectedSizes, minPrice, maxPrice);
  };

  const handleSizeChange = (size) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(updatedSizes);
    emitChange(selectedColors, updatedSizes, minPrice, maxPrice);
  };

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    emitChange(selectedColors, selectedSizes, min, max);
  };

  const emitChange = (colors, sizes, min, max) => {
    onFilterChange({
      colors,
      sizes,
      price: [min, max],
    });
  };

  return (
    <>
      {/* Filter Toggle Button for small screens */}
      <button
        className="md:hidden border-2 border-gray-500  px-4 py-2 rounded mb-4 flex items-center gap-2"
        onClick={() => setShowFilterPanel(!showFilterPanel)}
      >
        <SlidersHorizontal size={18} />
        Filter
      </button>

      {/* Actual Filter Box */}
      <div
        className={`md:block ${showFilterPanel ? 'block' : 'hidden'} p-4 rounded-xl w-full md:w-64 `}
      >
        
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-1">
        <SlidersHorizontal size={18} />
            Filters
            </h2>

        {/* Color Section */}
        <div className="mb-4 border-b">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('color')}
          >
            <span className="font-medium">Color</span>
            {openSections.color ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
          {openSections.color && (
            <div className="mt-2 pl-2">
              {colors.map((color, idx) => (
                <label key={idx} className="flex items-center mb-1 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-sm mr-2"
                    checked={selectedColors.includes(color)}
                    onChange={() => handleColorChange(color)}
                  />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Size Section */}
        <div className="mb-4 border-b">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('size')}
          >
            <span className="font-medium">Size</span>
            {openSections.size ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
          {openSections.size && (
            <div className="mt-2 pl-2">
              {sizes.map((size, idx) => (
                <label key={idx} className="flex items-center mb-1 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-sm mr-2"
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeChange(size)}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('price')}
          >
            <span className="font-medium">Price</span>
            {openSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
          {openSections.price && (
            <div className="mt-2 flex gap-2">
              <input
                type="number"
                className="w-1/2 border rounded p-2"
                value={minPrice}
                onChange={(e) => handlePriceChange(Number(e.target.value), maxPrice)}
                placeholder="Min"
              />
              <input
                type="number"
                className="w-1/2 border rounded p-2"
                value={maxPrice}
                onChange={(e) => handlePriceChange(minPrice, Number(e.target.value))}
                placeholder="Max"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;
