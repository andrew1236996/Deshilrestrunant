import React from 'react';
import { Link } from 'react-router-dom';

const Dinner4 = () => {
  return (
    <div className="bg-neutral-950 text-center py-16 px-4 sm:px-6">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="bg-orange-600 text-white w-fit px-3 py-1 text-xs sm:text-sm md:text-base font-jost">
          CRISPY, EVERY BITE TASTE
        </p>
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-white leading-snug">
          LOOKING FOR POPULAR <br className="block sm:hidden" />
          FAST FOOD
        </h2>
        <div className="flex lg:hidden list-none text-white px-4 py-2 items-center space-x-2 font-sans border border-red-500 rounded-md hover:border-b transition">
          <Link to="/Book" className="hover:underline">BOOK A TABLE</Link>
          <span>──</span>
          <span>→</span>
        </div>
        <div className="hidden lg:flex list-none text-white px-4 py-2 items-center space-x-2 font-sans border border-red-500 hover:border-b transition">
          <li><Link to="/Book" className="hover:underline">BOOK A TABLE</Link></li>
          <span>──</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
};

export default Dinner4;
