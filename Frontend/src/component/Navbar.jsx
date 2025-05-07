import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import MotionBar from './MotionBar';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='z-40 bg-white w-full fixed top-0 border-b-2'>

    <MotionBar/>

      {/* Navbar Main */}
      <div className='flex items-center justify-between py-3 font-medium px-2 sm:px-8 md:px-[7vw] lg:px-[9vw] '>
        <Link to='/' className='flex items-center gap-2'>
          <img src={assets.logo3} alt="Logo" className='w-12 lg:w-16 '/>
          <div className='flex flex-col text-center leading-tight'>
            <span className='outfit-bold text-[#EB2188] text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl'>
              KANYA FASHION
            </span>
            <span className='prata-regular text-[#EB2188] text-[10px] sm:text-xs md:text-sm lg:text-sm'>
              Drape The Grace
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <ul className='hidden md:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>HOME</p>
          </NavLink>

          <NavLink to='/collection' className="flex flex-col items-center gap-1 group relative">
            <p>NEW ARRIVALS</p>
            <div className='group-hover:block hidden absolute left-1/2 transform -translate-x-1/2 top-full pt-4 z-10'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>Salvar</p>
                <p className='cursor-pointer hover:text-black'>Saree</p>
                <p className='cursor-pointer hover:text-black'>Anarkali</p>
              </div>
            </div>
          </NavLink>

          <NavLink to='/about' className="flex flex-col items-center gap-1">
            <p>SHOP BY OCCASION</p>
          </NavLink>

          <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>TRANDING COLLECTION</p>
          </NavLink>

          <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>SHOP BY CATEGORY</p>
          </NavLink>
        </ul>

        {/* Top-right icons for large screens */}
        <div className='hidden md:flex items-center gap-6'>
          <img src={assets.search_icon} alt="Search" className='cursor-pointer w-5 h-5' />
          <div className='group relative'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile" />
            <div className='group-hover:block hidden absolute right-0 top-full pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>

          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="Cart" className='w-5 min-w-5' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>2</p>
          </Link>
        </div>

        {/* Hamburger menu for small screens */}
        <div className='md:hidden'>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className='cursor-pointer w-5 h-5'
            alt="Menu"
          />
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 z-[999] bg-white transition-all h-screen overflow-hidden ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600 h-full'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-2 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>NEW ARRIVALS</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>SHOP BY OCCASION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>TRANDING COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>SHOP BY CATEGORY</NavLink>

          {/* Bottom icons in sidebar */}
          <div className='flex justify-around items-center py-4 border-t mt-auto'>
            <img src={assets.search_icon} alt="Search" className='cursor-pointer w-5 h-5' />
            <img src={assets.profile_icon} alt="Profile" className='w-5 cursor-pointer' />
            <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} alt="Cart" className='w-5 min-w-5' />
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>2</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
