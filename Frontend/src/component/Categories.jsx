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
    <div className='my-2 lg:my-14'>
         <div className='text-center py-5 lg:py-10 text-3xl'>
            <Title  text2={'CATEGORY'} />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 gap-y-6'>
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