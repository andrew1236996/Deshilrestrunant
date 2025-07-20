import React from 'react';
import { Link } from 'react-router-dom';

const Lunch1 = () => {
  return (
    <section className="absolute w-full bg-gradient-to-r from-black via-neutral-900 to-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden z-0">
      
      {/* Decorative Right Circle */}
      <div className="absolute w-[150px] h-[150px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] brightness-75 bg-[#a1280f] rounded-full right-[-150px] bottom-[-150px] z-0"></div>

      {/* Hero Text Content */}
      <div className="relative lg:mr-100 mt-20 sm:mt-40 z-10 text-center sm:text-left max-w-lg flex flex-col items-center sm:items-start gap-4">
        <h2 className="text-3xl sm:text-5xl font-bold">
          LUNCH <span className="font-light">&</span>
        </h2>
        <h3 className="text-2xl sm:text-6xl font-light">HAPPY HOUR</h3>
        <p className="text-xs sm:text-base py-2 tracking-wide uppercase">
          Check our latest seasonal promotions
        </p>
        <Link to="/Book" className="border border-[#e94327] px-5 py-2 text-sm sm:text-base hover:bg-[#e94327] transition duration-300">
          BOOK A TABLE →
        </Link>
      </div>

      {/* Decorative Left Circle */}
      <div className="absolute bottom-0 left-0 w-[60px] sm:w-[120px] opacity-10 z-0">
        <div className="h-[60px] w-[60px] sm:h-[100px] sm:w-[100px] bg-gray-600 rounded-full"></div>
      </div>
    </section>
  );
};

export default Lunch1;
