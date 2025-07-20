import React from 'react';
import { Link } from 'react-router-dom'
const newsData = [ 
  {
    date: '20 Feb',
    category: 'Food Menu',
    title: 'How to ensure direct for the hassle-free visa process',
    comments: 2,
    image: "../src/assets/images/jason-leung-z4vYlSyJk9M-unsplash.jpg" // You can replace with actual image URLs
  },
  {
    date: '20 Feb',
    category: 'Food Menu',
    title: 'How to ensure direct for the hassle-free visa process',
    comments: 2,
    image: "../src/assets/images/jason-leung-z4vYlSyJk9M-unsplash.jpg"
  },
  {
    date: '20 Feb',
    category: 'Food Menu',
    title: 'How to ensure direct for the hassle-free visa process',
    comments: 2,
    image: "../src/assets/images/jason-leung-z4vYlSyJk9M-unsplash.jpg"
  },
];

const Section10 = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-20 py-16">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="text-center sm:text-left">
          <p className="bg-orange-600 text-white inline-block px-3 py-1 text-xs sm:text-sm mb-2 font-semibold tracking-wide">
            CRISPY, EVERY BITE TASTE
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Latest News Insights
          </h2>
        </div>
        <button className="mt-4 sm:mt-0 border border-black px-4 py-2 font-medium hover:bg-black hover:text-white transition">
          <Link to="/Latest">view post</Link>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
            {/* Image Section */}
            <div className="relative h-56 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-orange-600 text-white px-3 py-1 text-xs font-semibold">
                {item.date}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
              <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 inline-block mb-2 rounded">
                {item.category}
              </span>
              <h3 className="text-md font-bold leading-tight mb-4">
                {item.title.toUpperCase()}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>🧡 0{item.comments} Comments</span>
                <span className="text-xl">↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section10;
