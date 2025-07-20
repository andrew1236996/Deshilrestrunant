import React from 'react';
import { Link } from 'react-router-dom';

export default function Dinner3() {
  return (
    <div className="min-h-screen bg-gray-100 flex  items-center justify-center px-4 py-16">
      <div className="bg-white w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 shadow-lg">
        
        {/* Left Side - Text */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          {/* Badge */}
          <div className="mb-4">
            <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
              Make Reservation
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
            Enjoy an Exceptional<br />Journey of Taste
          </h2>

          {/* Paragraph */}
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien
            mattis nulla litora prion purus varius, pulvinar diam netus volutpat morbi
            magnis. Porta semper potenti faucibus blandit torquent ad vehicula sociis
            integer, feugiat aperit netus gravida enim neque posuere penatibus, sed
            imperdiet malesuada venenatis scelerisque consequat tempus mauris.
          </p>

          {/* Button */}
          <Link to="/Dinner5" className="bg-red-600 text-white text-xs font-semibold uppercase px-5 py-3 hover:bg-red-700 transition w-fit">
            Explore Our Category
          </Link>
        </div>

        {/* Right Side - Image Background and Box on Left */}
        <div
          className="relative h-80 md:h-auto flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('../src/assets/images/keesha-s-kitchen-3gbiqiGJYUc-unsplash.jpg')",
          }}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-white/70 border-4 border-white shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}
