import React from 'react';

const Section8 = () => {
  const sec27 = "https://res.cloudinary.com/ddsce1fpd/image/upload/v1753403349/fotos-DpPYTMWYnkY-unsplash_bzav10.jpg";
  const sec28 = "https://res.cloudinary.com/ddsce1fpd/image/upload/v1753403349/fotos-DpPYTMWYnkY-unsplash_bzav10.jpg";
  const sec29 = "https://res.cloudinary.com/ddsce1fpd/image/upload/v1753403349/fotos-DpPYTMWYnkY-unsplash_bzav10.jpg";

  return (
    <div className="relative bg-white">
      {/* Header */}
      <div className="text-center pt-10">
        <p className="bg-orange-600 text-white w-fit mx-auto px-3 py-1 text-sm sm:text-base font-jost">
          MAKE RESERVATION
        </p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          MEET THE EXPERT CHIEF
        </h2>
        <span className="text-orange-500 text-xl">──</span>
      </div>

      {/* Background black layer under cards */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-black z-0"></div>

      {/* Cards */}
      <div className="relative z-10 mt-20 flex flex-col lg:flex-row justify-center gap-6 px-4 lg:px-0 lg:w-[60%] mx-auto">
        {/* Card 1 */}
        <div className="bg-white w-full sm:w-[80%] lg:w-[30%] text-center shadow-md">
          <div className="h-64 overflow-hidden">
            <img
              src={sec27}
              alt="Wedding"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-slate-600 text-white py-3">
            <h3 className="font-bold text-lg">DERUMI FRANK</h3>
            <p className="text-sm opacity-80">EXECTUIVE CHIEF</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-full sm:w-[80%] lg:w-[30%] text-center shadow-md">
          <div className="h-64 overflow-hidden">
            <img
              src={sec28}
              alt="Buffet"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-slate-600 text-white py-3">
            <h3 className="font-bold text-lg">DEVOLUM DUMBIE</h3>
            <p className="text-sm opacity-80">ASSITANCE CHIEF</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white w-full sm:w-[80%] lg:w-[30%] text-center shadow-md">
          <div className="h-64 overflow-hidden">
            <img
              src={sec29}
              alt="Party"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-slate-600 text-white py-3">
            <h3 className="font-bold text-lg">SANDRA MARTIN </h3>
            <p className="text-sm opacity-80">HELPER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
