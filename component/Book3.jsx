import React from 'react';

const Book3 = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col md:flex-row items-center justify-center gap-10 p-6">
      {/* Left Side: Image Layout */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        {/* Main large image */}
        <div className="bg-gray-300 w-[300px] h-[350px]" />

        {/* Small overlapping image */}
        <div className="absolute -bottom-6 -right-6 bg-gray-400 w-[150px] h-[150px] border-4 border-white shadow-md" />
      </div>

      {/* Right Side: Info Boxes */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Opening Hours */}
        <div className="border border-gray-200 p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-1">OPENING HOURS</h3>
          <p>Lunch: 12pm – 3pm</p>
          <p>Dinner: 7pm – 2am (Last Order At 11:30pm)</p>
        </div>

        {/* Restaurant Info */}
        <div className="border border-gray-200 p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-1">VISIT HOUR RESTAURANT</h3>
          <p>Eight avenue 487, NY.</p>
          <p>T. +12 344 0567899</p>
          <p>M. fidalgo@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Book3;
