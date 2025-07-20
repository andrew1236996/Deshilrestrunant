import React from 'react';
import { Link } from 'react-router-dom';

export default function Dinner2() {
  const services = [
    {
      title: "FRESH PRODUCTS",
      description: "For each dish, the growth of every element & the selection",
      image: "../src/assets/images/hamza-sakrani-ieQSQhN7KP0-unsplash.jpg"
    },
    {
      title: "SKILLED CHEFS",
      description: "For each dish, the growth of every element & the selection",
      image: "../src/assets/images/aditya-romansa-m6p4lqWxfy0-unsplash.jpg"
    },
    {
      title: "DRINKS & WINE",
      description: "For each dish, the growth of every element & the selection",
      image: "../src/assets/images/fotos-j-qfvf6nKuw-unsplash.jpg"
    },
    {
      title: "FRESH FOODS",
      description: "For each dish, the growth of every element & the selection",
      image: "../src/assets/images/jonathan-borba-c7aDFxMKv4o-unsplash.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Blue accent bar */}
      <div className="w-full h-1 bg-blue-500 absolute top-0 left-0"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className=" bg-white p-6 rounded shadow-sm text-center">
              
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-60 h-40 mx-auto mb-4 object-cover"
              />

              {/* Title */}
              <h3 className="text-base  font-bold text-gray-900 mb-2 tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to="/Book"
                className="text-red-600 text-xs font-semibold hover:text-red-700 transition-colors uppercase tracking-wide"
              >
                BOOK A TABLE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
