import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Use image URLs directly
const images = [
  'https://res.cloudinary.com/ddsce1fpd/image/upload/v1753403357/magic-mary-nEOzmjguwO0-unsplash_ou57ql.jpg',
  'https://res.cloudinary.com/ddsce1fpd/image/upload/v1753403349/emmanuel-ben-paul-grFZoxvKSvE-unsplash_hbcxdl.jpg',
  'https://res.cloudinary.com/ddsce1fpd/image/upload/v1753403359/lucas-verbeke-EOp98PHIFXQ-unsplash_wpdvhi.jpg'
];

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative bg-slate-600 text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div 
          className="flex transition-transform duration-700 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="relative w-full h-full flex-shrink-0">
              <img 
                src={src} 
                alt={`Slide ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Opening hours */}
      <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center z-10">
        <p className="text-xs tracking-widest">OPENING HOURS: 18:00 - 02:00</p>
      </div>
      <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 transform rotate-90 origin-center z-10">
        <p className="text-xs tracking-widest">OPENING HOURS: 18:00 - 02:00</p>
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center space-y-4 px-4">
        <h2 className="text-sm sm:text-lg font-semibold md:text-4xl tracking-wider">THE GREAT</h2>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">FLAVORED FOOD</h1>
        <h3 className="text-sm sm:text-lg font-semibold tracking-wider">PART OF US</h3>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <div className="w-8 sm:w-12 h-px bg-white"></div>
          <div className="w-8 sm:w-12 h-px bg-white"></div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-10 text-sm font-semibold">
          <Link to="/Book" className="border-b border-white pb-1 hover:text-red-500">BOOK A TABLE</Link>
          <Link to="/Section4" className="hover:text-red-500">VIEW MENU</Link>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-4 sm:bottom-8 flex space-x-2 sm:space-x-4 z-10">
        {images.map((_, idx) => (
          <span 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-4 w-4 sm:h-6 sm:w-6 rounded-full cursor-pointer ${currentIndex === idx ? 'bg-white' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>

      {/* Decorative border */}
      <div className="absolute inset-2 sm:inset-4 border border-gray-700 pointer-events-none z-10"></div>
    </section>
  );
};

export default Section1;
