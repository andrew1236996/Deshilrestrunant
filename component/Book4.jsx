import React from 'react';

const Book4 = () => {
  return (
    <div className="bg-slate-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left Content */}
        <div className="text-center sm:text-left">
          <p className="text-amber-50 text-sm sm:text-base">
            Book A Table For You and Your Family Members
          </p>
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-amber-50 mt-2">
            Need A Table At The Coffee House?
          </h1>
        </div>

        {/* Button */}
        <div className="mt-4 sm:mt-0">
          <button className="px-6 py-2 border border-black text-amber-50 font-semibold text-sm hover:bg-black hover:text-white transition duration-300">
            Book A Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book4;
