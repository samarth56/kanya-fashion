import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-400'></p> 
        <p className='text-gray-500 text-base sm:text-base md:text-2xl lg:text-3xl'>{text1} <span className='text-[#EB2188] font-medium text-base sm:text-base md:text-2xl lg:text-3xl'>{text2}</span> </p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#EB2188]'></p> 
    </div>
  )
}

export default Title