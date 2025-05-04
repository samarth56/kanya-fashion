import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id, image, name, price, oldPrice, discount}) => {

    const {currency, percent} = useContext(ShopContext);

  return (
    
    <Link className='text-gray-700 cursor-pointer group' to={`/product/${id}`}>   
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>

        <div className='flex   items-center'>
        <p className='font-medium mr-5 text-[1.2rem]'>{currency}{price}</p>
        <p className='font-medium text-gray-500  text-sm'> <strike> {currency}{oldPrice} </strike></p>
        <span className='mx-1'>|</span>
        <p className='font-medium text-sm text-green-500'>{discount}{percent} </p>
        </div>

        <div className='text-center mt-2 ' >
          <Link to='/cart' className='cursor-pointer bg-black text-white w-full py-2'>
            Add to Cart
          </Link>
        </div>
      
    </Link>

  )
}

export default ProductItem