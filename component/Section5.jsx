import React, { useRef } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { PiArrowSquareLeftLight, PiArrowSquareRight } from "react-icons/pi";

const counters = [
  { count: 15, labelTop: 'NEW', labelBottom: 'COOL PROJECTS' },
  { count: 15, labelTop: 'TOTAL', labelBottom: 'AWARDS WIN' },
  { count: 20, labelTop: 'UNIQUE', labelBottom: 'FOOD SPECIALTIES' },
  { count: 69, labelTop: 'HARD', labelBottom: 'TEAM MEMBERS' },
];

const galleryImages = [
  '/src/assets/images/martin-baron-PBgbIbOsprk-unsplash.jpg',
   '/src/assets/images/joshua-forbes-g4gJfeiVd7E-unsplash.jpg',
   '/src/assets/images/keesha-s-kitchen-3gbiqiGJYUc-unsplash.jpg',
   '/src/assets/images/bralro-sPzG9heRMrw-unsplash.jpg',
   '../src/assets/images/jesse-chan-l_LzQHnuZaE-unsplash.jpg',
];

const Section5 = () => {
  const galleryRef = useRef();

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-black h-90 text-white py-8 px-4 sm:px-6  md:px-12 lg:px-20">
      
      {/* Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {counters.map((item, index) => (
          <div key={index} className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{item.count}</h1>
            <p className="text-xs sm:text-sm mt-1 uppercase">{item.labelTop}</p>
            <p className="text-xs sm:text-sm uppercase font-light">{item.labelBottom}</p>
          </div>
          
        ))}
      </div>
      <div className='border-1 mb-4 mt-3 opacity-50'>
         
      </div>
      {/* Title + Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2 ">
        <button className="bg-[#e14d2a] text-white text-xs sm:text-sm px-3 sm:px-4 py-2 uppercase font-bold rounded-sm">
          View Our Projects
        </button>

        <div className="flex gap-2">
          <button 
            className="border border-white p-1 sm:p-2 rounded-sm"
            onClick={scrollLeft}
          >
            <PiArrowSquareLeftLight className="text-base sm:text-lg" />
          </button>
          <button 
            className="border border-white p-1 sm:p-2 rounded-sm"
            onClick={scrollRight}
          >
            <PiArrowSquareRight className="text-base sm:text-lg" />
          </button>
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
        Our Food Gallery
      </h2>

      {/* Gallery */}
      <div
        ref={galleryRef}
        className="flex gap-3 overflow-hidden"
      >
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="relative w-40 sm:w-48 md:w-56 lg:w-64 h-56 sm:h-64 md:h-72 bg-gray-300 shrink-0 rounded overflow-hidden"
          >
            <img
              src={src}
              alt={`food-${idx}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#e14d2a]/80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <FaRegEye className="text-white text-xl sm:text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
