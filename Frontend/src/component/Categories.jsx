import React, { useEffect, useState,useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import CategoryItem from './CategoryItem'



const Categories = () => {

    const {categoryArr} = useContext(ShopContext)
    const [catItem, setCatItem] = useState([]);
    

    useEffect(()=>{
        setCatItem(categoryArr);
    }, [])

  return (
    <div className='my-10'>
         <div className='text-center py-8 text-3xl'>
            <Title  text2={'CATEGORY'} />
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-6'>
            {
                catItem.map((item, idx)=>(
                    <CategoryItem key={idx} id={item._id} image={item.image} title={item.name}/>
                ))
            }
        </div>  
    </div>
  )
}

export default Categories