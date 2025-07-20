import React from 'react';
import sec12 from "../src/assets/images/Rectangle 109.png";
import sec13 from "../src/assets/images/Heading-Text 1 (1).png";
import sec14 from "../src/assets/images/Discount-Tag 1 (1).png";
import { Link } from 'react-router-dom';

const Lunch4 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 max-w-6xl mx-auto px-4 py-8">
      
      {/* Left Section */}
      <div className="bg-[#cf2e2ece] p-6 w-full lg:w-1/4 space-y-4 text-sm text-white">
        <h3 className="text-lg font-semibold">FIND FOOD LOUNGE</h3>
        <div className="h-[2px] w-8 bg-white mb-2"></div>
        <p>189/B, New Ave 1000 New York</p>
        <p>999 888 999 00</p>
        <p>office@webmailfree.com</p>
        <div className="mt-4">
          <p>Mon – Thu: 10 AM – 02 AM</p>
          <p>Fri – Sun: 10 AM – 02 AM</p>
        </div>
      </div>

      {/* Center Section */}
      <div className="relative flex items-center justify-center bg-black w-full lg:w-1/2 py-6 overflow-hidden">
        <div className="relative w-full flex items-center justify-center">
          {/* Discount Tag */}
          <img src={sec14} alt="Discount Tag" className="w-10 sm:w-24 md:w-18 z-20" />

          {/* Heading Text */}
          <img src={sec13} alt="Heading Text" className="absolute w-32 sm:w-36 md:w-40 z-30" />

          {/* Background Image */}
          <img src={sec12} alt="Background" className="w-full max-w-xs sm:max-w-sm md:max-w-md z-10" />
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-[#111] text-white p-6 w-full lg:w-1/4 space-y-4 text-sm">
        <h3 className="text-lg font-semibold">CONTACT US</h3>
        <div className="h-[2px] w-8 bg-white mb-2"></div>
        <p>
          Sus nisi platea primis eros netus natoque nostra faucibus proesent tapid.
        </p>
        <Link to="/Book" className="bg-white text-black font-semibold px-3 py-2 mt-2">
          BOOK A TABLE
        </Link>
      </div>
      
    </div>
  );
};

export default Lunch4;
