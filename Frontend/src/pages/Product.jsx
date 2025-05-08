import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [activeDropdown, setActiveDropdown] = useState('');

  useEffect(() => {
    const fetchProductData = () => {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image[0]);
      }
    };
    fetchProductData();
  }, [productId, products]);

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? '' : label));
  };

  if (!productData) return <div className="opacity-0">Loading...</div>;

  return (
    <div className="border-t-2 pt-16 transition-opacity ease-in duration-500 opacity-100 px-6 md:px-40">
      <div className="flex gap-12 flex-col md:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 md:flex-row">
          <div className="flex md:flex-col flex-wrap justify-start md:w-[18%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="w-[24%] md:w-full md:mb-3 mr-2 mb-2 cursor-pointer border hover:border-black"
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-full md:w-[80%]">
            <img className="w-full h-auto border" src={image} alt="Main Product" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          {/* Price Row */}
          <div className="mt-4 flex items-center gap-4 text-lg font-medium">
            <span className="text-black">{currency}{productData.price}</span>
            <span className="text-gray-400 line-through">{currency}{(productData.price * 1.2).toFixed(0)}</span>
            <span className="text-red-500">20% OFF</span>
          </div>

          {/* Sizes */}
          <div className="mt-5">
            <p className="mb-2 font-medium">Select Size:</p>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className="px-4 py-1 border rounded hover:bg-black hover:text-white transition-all"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:opacity-90 transition-all">
            Add to Cart
          </button>

          {/* Expandable Sections */}
          <div className="mt-8 border-t">
            {[
              { label: 'DESCRIPTION', content: productData.description },
              { label: 'STYLE NOTES', content: 'Minimalist and versatile daily wear.' },
              { label: 'SIZE & FIT', content: 'Model is 6’ wearing size M.' },
              { label: 'MATERIAL', content: '100% Organic Cotton' },
              { label: 'SPECIFICATIONS', content: 'Made in India. Machine washable.' },
              { label: 'SELLER INFORMATION', content: 'Sold by XYZ Clothing Pvt Ltd.' },
            ].map(({ label, content }) => (
              <div key={label} className="border-b">
                <button
                  onClick={() => toggleDropdown(label)}
                  className="w-full text-left py-3 font-semibold flex justify-between items-center"
                >
                  {label}
                  <span className="text-xl">{activeDropdown === label ? '−' : '+'}</span>
                </button>
                {activeDropdown === label && (
                  <p className="pb-4 text-sm text-gray-600">{content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
