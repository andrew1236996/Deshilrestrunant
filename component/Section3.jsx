import React from 'react';
import sec8 from "../src/assets/images/ibuki-tsubo-kNxQv2d2pGI-unsplash.jpg";
import sec9 from "../src/assets/images/s-laiba-ali-6fm5j9x20W0-unsplash.jpg";
import sec10 from "../src/assets/images/zaraq-iqbal-Q0a7fbRA88k-unsplash.jpg";
import sec11 from "../src/assets/images/image 61.png"
import sec12 from "../src/assets/images/image 62.png";

const Section3 = () => {
  return (
    <div className="bg-amber-100 w-full">
      <div className="mx-auto text-center pt-10">
        <p className="bg-orange-600 font-semibold mx-auto w-fit px-3 py-1 text-sm sm:text-base">
          Our Services
        </p>
        <h2 className="font-semibold text-3xl sm:text-4xl">
          OUR RESTAURANT SERVICES
        </h2>
        <span>──</span>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row mx-auto lg:w-[70%] py-6 lg:space-x-6 space-y-6 lg:space-y-0">
        {/* Wedding Service */}

         <img 
            src={sec12} 
            alt="sec2" 
            className=" hidden lg:flex absolute w-[10%]  left-0 mt-60  -translate-y-1/2 transform -rotate-90 origin-center opacity-80 mr-10" 
          />
        <div className=" bg-yellow-50 w-full sm:w-[90%] lg:w-[80%] mx-auto">
          <img src={sec10} alt="wedding service" className="w-[95%] h-45 mx-auto mt-3 object-cover "/>
          <h1 className="px-5 font-bold text-lg lg:text-1xl py-3">WEDDING SERVICE</h1>
          <p className="px-3 font-thin py-2">
            The chocolate fondant which did not disappoint. It was rich and indulgent,
            with a gooey center that was pure bliss.
          </p>
          <div className="flex justify-between border-2 items-center ml-3 lg:mt-2  border-red-500 text-red-700 px-4 py-2 w-fit font-sans font-semibold transition mb-4">
            <li className="list-none">
              <a href="#">READ MORE</a>
            </li> 
            <span>──</span>
            <span>→</span>
          </div>
        </div>

        {/* Buffet Service */}
        <div className=" bg-yellow-50 w-full sm:w-[90%] lg:w-[80%] mx-auto">
          <img src={sec9} alt="buffet service" className="w-[95%] mx-auto mt-3 object-cover" />
          <h1 className="px-5 font-bold text-lg lg:text-1xl py-3">BUFFET SERVICE</h1>
          <p className="px-3 font-thin py-2">
            Assertively myocardinate robust e-tailers for extensible human capital.
            Appropriately benchmark network.
          </p>
          <div className="flex justify-between items-center ml-3 lg:mt-2 border-2  border-red-500 text-red-700 px-4 py-2 w-fit font-sans font-semibold transition mb-4">
            <li className="list-none">
              <a href="#">READ MORE</a>
            </li>
            <span>──</span>
            <span>→</span>
          </div>
        </div>

        {/* Party Service */}
        <div className=" bg-yellow-50 w-full sm:w-[90%] lg:w-[80%] mx-auto">
          <img src={sec8} alt="party service" className="w-[95%] mx-auto mt-3 object-cover" />
          <h1 className="px-5 font-bold text-lg lg:text-1xl py-3">PARTY SERVICE</h1>
          <p className="px-3 font-extralight py-2">
            Assertively myocardinate robust e-tailers for extensible human capital.
            Appropriately benchmark networks.
          </p>
          <div className="flex justify-between items-center ml-3 lg:mt-2 border-2 border-red-500 text-red-700 px-4 py-2 w-fit font-sans font-semibold transition mb-4">
            <li className="list-none">
              <a href="#">READ MORE</a>
            </li>
            <span>──</span>
            <span>→</span>
          </div>
        </div>

          <img 
            src={sec11} 
            alt="sec2" 
            className=" sm:block absolute right-0 mt-5  -translate-y-1/2 transform rotate-90 origin-center opacity-60 w-40" 
          />
      </div>
    </div>
  );
};

export default Section3;
