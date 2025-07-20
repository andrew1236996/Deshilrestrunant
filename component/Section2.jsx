import React from 'react'
import sec2 from "../src/assets/images/keesha-s-kitchen-PqG32DYCTM8-unsplash.jpg"
import sec6 from "../src/assets/images/3731 1.png"
import sec7 from "../src/assets/images/Vector.png"

const Section2 = () => {
  return (
    <> 
     <div className="flex flex-col  lg:flex-row mx-auto w-full lg:w-[64%] mb-10 mt-10 lg:mt-20 gap-6 p-4">
  {/* Image Section */}

  <img 
    src={sec6} 
    alt="sec2" 
    className=" hidden lg:flex absolute left-0 mt-25  -translate-y-1/2 transform -rotate-90 origin-center opacity-80 mr-10" 
  />
     {/* hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center z-10 */}
  <img 
    src={sec2} 
    alt="sec2" 
    className="w-full lg:w-1/2 lg:h-80 object-cover rounded-md" 
  />
   <img 
    src={sec7} 
    alt="sec2" 
    className="hidden sm:block absolute right-0 mt-5  -translate-y-1/2 transform rotate-90 origin-center opacity-60 w-40" 
  />

  {/* Text Content Section */}
  <div className="flex flex-col justify-center mt-6 lg:mt-0">
    <h3 className="bg-orange-600 font-semibold text-white w-max px-3 py-1 text-sm sm:text-base">
      Make reservation
    </h3>
    
    <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl pt-3">
      WELCOME TO OUR LUXURY RESTAURANT
    </h1>
    
    <p className="pt-3 text-sm sm:text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reprehenderit, 
      maiores eligendi facere sequi repudiandae quidem libero. maiores eligendi facere sequi repudiandae quidem libero.
    </p>

    <div className="flex flex-row gap-3 mt-4 items-center">
      <span className="h-5 w-5 sm:h-6 sm:w-6 bg-red-400 rounded-full"></span>
      
      <div>
        <h4 className="text-sm sm:text-base font-medium">Hotline 24/7</h4>
        <p className="text-sm sm:text-base">+2349133344556</p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Section2
// font-semibold text-3xl w-[50%] py-6
// bg-orange-600 font-bold  w-[19%]
// w-[70%