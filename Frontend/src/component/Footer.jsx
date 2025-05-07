import React from 'react';
import { assets } from '../assets/assets';
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="border-t-2  mt-5 px-4 sm:px-10 py-10 text-sm text-gray-600">
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">

        {/* Logo & Socials */}
        <div>
          <img src={assets.logo2} className="mb-5 lg:w-32 w-20" alt="Kanya Fashion Logo" />
          <div className="flex gap-4">
            <a href="https://www.instagram.com/kanyafashion03?igsh=MWs2eHVwNTBwMWRuOQ=="><FaInstagram className="text-[#EB2188] text-xl hover:scale-110 transition" /></a>
            <a href="#"><FaFacebookF className="text-[#EB2188] text-xl hover:scale-110 transition" /></a>
            <a href="#"><FaYoutube className="text-[#EB2188] text-xl hover:scale-110 transition" /></a>
            <a href="#"><FaPinterest className="text-[#EB2188] text-xl hover:scale-110 transition" /></a>
          </div>
        </div>

        {/* Support */}
        <div>
          <p className="lg:text-lg text-base font-medium mb-5 text-[#EB2188]">SUPPORT</p>
          <ul className="flex flex-col gap-1">
            <li>Track Order</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Return and Exchange Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            <li>Business Enquiry</li>
          </ul>
        </div>

        {/* Shop By Occasion */}
        <div>
          <p className="lg:text-lg text-base font-medium mb-5 text-[#EB2188]">SHOP BY OCCASION</p>
          <ul className="flex flex-col gap-1">
            <li>Summer Wear</li>
            <li>Birthday</li>
            <li>Anniversary</li>
            <li>Cocktail Party</li>
            <li>Media Coverage</li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <p className="lg:text-lg text-base font-medium mb-5 text-[#EB2188]">TOP CATEGORIES</p>
          <ul className="flex flex-col gap-1">
            <li>Bhumi's Picks</li>
            <li>Wedding</li>
            <li>Kurta Set Dupatta</li>
            <li>Kurta Set</li>
            <li>Aika</li>
            <li>Festival Edit</li>
            <li>Best Sellers</li>
            <li>Media Coverage</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <p className="lg:text-lg text-base font-medium mb-5 text-[#EB2188]">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1">
            <li>+91 7016999270</li>
            <li>contact@kanyafashion.com</li>
          </ul>
        </div>
      </div>

      <hr className="my-6" />
      <p className="text-center text-xs">
        © 2025 kanyafashion.com - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
