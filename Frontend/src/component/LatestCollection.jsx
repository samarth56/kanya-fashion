import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const LatestCollection = () => {

    const {products} = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,8))
    },[])

  return (
    <div className='my-10 '>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'NEW'} text2={'ARRIVALS'} />
        </div>

    {/* rendering products  */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
            latestProducts.map((item, idx)=>(
                <ProductItem key={idx} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
    </div>

     <div className='w-full flex justify-center'>
     <Link to='/cart'  className='text-center mt-8 cursor-pointer bg-black text-white border-2  py-3 px-5'>
            VIEW ALL PRODUCTS
      </Link>
     </div>

    </div>
  )
}

export default LatestCollection