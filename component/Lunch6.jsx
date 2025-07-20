import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Lunch6 = () => {
  return (
    <section className="bg-[#111] flex items-center py-10 px-4 relative">
      <div className="bg-white w-full lg:mx-30 max-w-md px-4 p-8 sm:p-10 text-center shadow-lg">
        {/* Reservation Button */}
        <button className="bg-[#cf2e2e] text-white text-xs px-4 py-2 uppercase tracking-widest mb-4">
          Make Reservation
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-black mb-2">OPENING TIME</h2>

        {/* Line and Dots */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-[1px] h-6 bg-[#cf2e2e] mb-2" />
          <div className="text-[#cf2e2e] text-lg tracking-widest">••••</div>
        </div>

        {/* Schedule Table */}
        <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-black border-t border-b border-gray-200 py-4">
          <div>
            <p className="mb-2">MONDAY TO FRIDAY</p>
            <p>10:00</p>
            <p>20:00</p>
          </div>
          <div>
            <p className="mb-2">FRIDAY TO SUNDAY</p>
            <p>12:00</p>
            <p>22:00</p>
          </div>
        </div>

        {/* Contact Number (clickable) */}
        <div className="mt-6">
          <a
            href="tel:+2561489362"
            className="flex items-center mx-auto justify-center gap-2 px-6 py-2 border border-[#cf2e2e] text-[#cf2e2e] font-semibold text-sm hover:bg-[#cf2e2e] hover:text-white transition"
          >
            <FaPhoneAlt className="text-[#cf2e2e]" />
            +256 1489 362
          </a>
        </div>
      </div>
    </section>
  );
};

export default Lunch6;
