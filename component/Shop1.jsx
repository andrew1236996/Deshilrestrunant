import React from 'react';
import bgImage from '../src/assets/images/engin-akyurt-v6z8FoqPbJ8-unsplash.jpg'; // ✅ Update path to your actual image

const Shop1 = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay (optional for dark effect) */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative top-40 mx-auto text-center space-y-4 px-4 z-10 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">
          Shop1
        </h1>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-x-3 text-sm font-semibold">
          <a href="#" className="border-b border-white pb-1 hover:text-red-500">
            HOME
          </a>
          <a href="#" className="hover:text-red-500">/CONTACT US</a>
        </div>
      </div>
    </div>
  );
};

export default Shop1;
