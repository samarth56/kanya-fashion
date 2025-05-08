import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Filter from '../component/Filter';
import ProductItem from '../component/ProductItem';
import Title from '../component/Title';

const AllProducts = () => {
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    colors: [],
    sizes: [],
    price: [100, 1000],
  });

  useEffect(() => {
    applyFilters();
  }, [products, filters]);

  const applyFilters = () => {
    let result = products;

    // Filter by color
    if (filters.colors.length > 0) {
      result = result.filter((product) => filters.colors.includes(product.color));
    }

    // Filter by size
    if (filters.sizes.length > 0) {
      result = result.filter((product) => filters.sizes.includes(product.size));
    }

    // Filter by price
    result = result.filter(
      (product) => product.price >= filters.price[0] && product.price <= filters.price[1]
    );

    setFilteredProducts(result);
  };

  return (
    <div className="flex  pt-10 border-t">
      {/* Filter Sidebar - sticky on desktop */}
      <div className="hidden lg:block sm:basis-1/4 max-w-[30%] px-4">
        <div className="sticky top-36"> {/* adjust 'top' based on your navbar height */}
          <Filter
            colors={['Red', 'Blue', 'Green']}
            sizes={['S', 'M', 'L']}
            priceRange={[100, 1000]}
            onFilterChange={setFilters}
          />
        </div>
      </div>

     


      {/* Product Grid - scrollable */}
      <div className="flex-1 overflow-y-auto px-4">



 {/* filter sidebar normal on phone */}
 <div className="lg:hidden  md:block sm:basis-1/4 max-w-[30%] px-4">
        <div > {/* adjust 'top' based on your navbar height */}
          <Filter
            colors={['Red', 'Blue', 'Green']}
            sizes={['S', 'M', 'L']}
            priceRange={[100, 1000]}
            onFilterChange={setFilters}
          />
        </div>
      </div>





        <div className="lg:my-10 text-center">
          <Title text1={'ALL'} text2={'PRODUCTS'} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 pb-10">
          {filteredProducts.map((item, idx) => (
            <ProductItem
              key={idx}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
