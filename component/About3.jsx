import React from 'react';

const Book3 = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-16">
      
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Large Image */}
        <img
          src="https://via.placeholder.com/256x320" // Replace with your image
          alt="Large display"
          className="w-64 h-80 object-cover"
        />
        
        {/* Small overlapping image */}
        <img
          src="https://via.placeholder.com/160" // Replace with your image
          alt="Overlapping display"
          className="absolute bottom-4 left-48 w-40 h-40 object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Info Cards Section */}
      <div className="space-y-6 max-w-md w-full">
        {/* Opening Hours */}
        <div className="border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-2">OPENING HOURS</h3>
          <p>Lunch: 12pm – 3pm</p>
          <p>Dinner: 7pm – 2am (Last Order At 11:30pm)</p>
        </div>

        {/* Visit Restaurant Info */}
        <div className="border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-2">VISIT HOUR RESTAURANT</h3>
          <p>Eight avenue 487, NY.</p>
          <p>T. +12 344 0567899</p>
          <p>M. fidalgo@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Book3;
