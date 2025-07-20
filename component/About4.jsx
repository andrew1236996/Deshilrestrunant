import React from 'react';
import sec8 from "../src/assets/images/ibuki-tsubo-kNxQv2d2pGI-unsplash.jpg";
import sec9 from "../src/assets/images/s-laiba-ali-6fm5j9x20W0-unsplash.jpg";
import sec10 from "../src/assets/images/zaraq-iqbal-Q0a7fbRA88k-unsplash.jpg";


const About4 = () => {
  return (
    <div className="bg-white w-full">
      <div className="mx-auto text-center pt-10">
        <p className="bg-orange-600 font-semibold mx-auto w-fit px-3 py-1 text-sm sm:text-base">
          OUR SERVICES
        </p>
        <h2 className="font-semibold text-3xl sm:text-4xl">
          DISCOVER OUR CATEGORY
        </h2>
        <span>──</span>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row mx-auto lg:w-[70%] py-6 lg:space-x-6 space-y-6 lg:space-y-0">
        {/* Wedding Service */}
        <div className=" bg-yellow-50 w-full text-center sm:w-[90%] lg:w-[80%] mx-auto">
          <img src={sec10} alt="wedding service" className="w-[95%] h-45 mx-auto mt-3 object-cover "/>
          <h1 className="px-5 font-bold text-lg   lg:text-1xl py-3">Quality Chees</h1>
          <p className="px-3 font-thin py-2">
           Consectetur adipiscing elit quisque eget maximus velit, 
           non eleifend libero curabitur dapibus mauris sed leo cursus
          </p>
        </div>

        {/* Buffet Service */}
        <div className=" bg-yellow-50 w-full text-center sm:w-[90%] lg:w-[80%] mx-auto">
          <img src={sec9} alt="buffet service" className="w-[95%] mx-auto mt-3 object-cover" />
          <h1 className="px-5 font-bold text-lg lg:text-1xl py-3">Crunchi French Fry</h1>
          <p className="px-3 font-thin py-2">
           Consectetur adipiscing elit quisque eget maximus velit, 
           non eleifend libero curabitur dapibus mauris sed leo cursus
          </p>
        </div>

        {/* Party Service */}
        <div className=" bg-yellow-50 w-full text-center sm:w-[90%] lg:w-[80%] mx-auto">
          <img src={sec8} alt="party service" className="w-[95%] mx-auto mt-3 object-cover" />
          <h1 className="px-5 font-bold text-lg lg:text-1xl py-3">100% Halal Meat</h1>
          <p className="px-3 font-extralight py-2">
            Consectetur adipiscing elit quisque eget maximus velit, 
            non eleifend libero curabitur dapibus mauris sed leo cursus
          </p>
        </div>

         
      </div>
    </div>
  );
};

export default About4;
