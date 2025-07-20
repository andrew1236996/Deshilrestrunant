import React, { useState } from 'react';
import sec12 from '../src/assets/images/engin-akyurt-v6z8FoqPbJ8-unsplash.jpg';
import sec13 from '../src/assets/images/engin-akyurt-v6z8FoqPbJ8-unsplash.jpg';
import sec14 from '../src/assets/images/engin-akyurt-v6z8FoqPbJ8-unsplash.jpg';

const categories = [
  { title: 'TEA & DRINKS', img: sec12 },
  { title: 'LUNCH MEAL', img: sec12 },
  { title: 'DINNER MEAL', img: sec13 },
  { title: 'DESSERTS MENU', img: sec14 },
];

const Lunch5 = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first item

  return (
    <section className="py-8 bg-white text-center max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <button className="bg-[#cf2e2e] text-white text-xs px-4 py-2 uppercase tracking-widest mb-4">
          Make Reservation
        </button>
        <h2 className="text-3xl font-extrabold text-black mb-2">
          DISCOVER OUR CATEGORY
        </h2>

        {/* Decorative Line and Dots */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-[1px] h-6 bg-[#cf2e2e] mb-2" />
          <div className="text-[#cf2e2e] text-lg tracking-widest">••••</div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Normal Image */}
            <img
              src={item.img}
              alt={item.title}
              className={`w-[200px] h-[200px] object-cover mb-4 shadow-md rounded-lg cursor-pointer transition-all duration-300 ${
                activeIndex === index ? 'ring-4 ring-[#cf2e2e]' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            />
           
            <div className="flex flex-col items-center">
              {/* Vertical Line */} 
              <div className="w-46 h-[2px] bg-black mt-1" />
              <div className="w-[2px] h-6 bg-black" />
              {/* Horizontal Line */} 
            </div>
            {/* Button Label */}
            <button
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-1 mb-2 border text-sm font-semibold uppercase transition-all duration-300 ${
                activeIndex === index
                  ? 'border-[#cf2e2e] text-[#cf2e2e]'
                  : 'border-black text-black hover:text-[#cf2e2e] hover:border-[#cf2e2e]'
              }`}
            >
              {item.title}
            </button>

            {/* T-Shaped Line */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lunch5;
