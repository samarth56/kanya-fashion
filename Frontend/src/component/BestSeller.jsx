import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller ] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller))
        setBestSeller(bestProduct.slice(0,5))
    }, [])

    
  
    return (
    <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLER'}/>
            </div>

            {/* rendering products */}

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, idx)=>(
                        <ProductItem key={idx} id={item._id}  name={item.name} image={item.image} price={item.price}/>
                    ))
                }
             </div>
    </div>
  )
}

export default BestSeller