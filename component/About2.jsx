import React from 'react';
import sec29 from "../src/assets/images/victoria-shes-UC0HZdUitWY-unsplash.jpg";
import sec12 from "../src/assets/images/Vector (6).png";
import sec30 from "../src/assets/images/Icon (1).png";
import sec31 from "../src/assets/images/icon (2).png";

const About2 = () => {
  return (
    <section className=" w-full min-h-screen flex flex-col lg:flex-row justify-between items-center max-w-4xl mx-auto px-4 sm:px-6 py-16 gap-12 z-10 bg-white">
      
      {/* Decorative Image */}
      <img 
        src={sec12} 
        alt="decoration" 
        className="hidden absolute lg:block w-[8%] left-0 top-[150%] opacity-70 z-0"
      />

      {/* Left Column */}
      <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
        <span className="bg-[#e94327] text-white px-4 py-1 text-xs uppercase font-semibold rounded-md w-fit mx-auto lg:mx-0 block">
          Crispy, Every Bite Taste
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug text-black">
          Delicious Food for <br className="hidden sm:block" /> Healthy Life
        </h2>

        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img src={sec31} alt="quality" className="w-10 h-10" />
            <div className="hidden sm:block w-1 h-16 bg-gray-300"></div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-black text-lg">Quality Food</h4>
              <p className="text-gray-600 text-sm">
                The wise man therefore always holds Indies matters this principle information.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img src={sec30} alt="supply" className="w-10 h-10" />
            <div className="hidden sm:block w-1 h-16 bg-gray-300"></div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-black text-lg">Supply Chain Maintain</h4>
              <p className="text-gray-600 text-sm">
                The wise man therefore always holds Indies matters this principle information.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button className="px-6 py-2 border border-black font-semibold text-sm hover:bg-black hover:text-white transition duration-300">
            Book A Table
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src={sec29}
          alt="Delicious food" 
          className="w-full max-w-md h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-md shadow-xl"
        />
      </div>
    </section>
  );
};

export default About2;
