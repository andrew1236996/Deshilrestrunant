import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import sec18 from "../src/assets/images/hamza-sakrani-ieQSQhN7KP0-unsplash.jpg";

const Lunch9 = () => {
  return (
    <>
      {/* Heading */}
      <div className="mx-auto text-center pt-10 px-4">
        <p className="bg-orange-600 font-semibold mx-auto w-fit px-3 py-1 text-sm sm:text-base text-white rounded">
          CLIENTS FEEDBACK
        </p>
        <h2 className="font-bold text-2xl sm:text-4xl mt-2 text-gray-800">
          WHAT OUR CUSTOMER SAY
        </h2>
        <div className="w-12 h-1 bg-orange-600 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Centered Review Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10 px-4">
        {/* Card 1 */}
        <div className="flex flex-col sm:flex-row p-4 gap-9 w-full max-w-md bg-amber-50 shadow ">
          {/* Left: Image & Stars */}
          <div className="flex flex-col items-center sm:items-start space-y-5">
            <img src={sec18} alt="profile" className="w-48 h-30 object-cover" />
            <div className="flex text-yellow-500 mt-2">
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </div>
          </div>

          {/* Right: Text and Name */}
          <div className="space-y-3">
            <p className="text-gray-700 text-sm">
              The scallops were perfectly cooked, tender, and flavorful, 
              paired beautifully with a creamy risotto and seasonal vegetables. 
              The presentation was artful, showcasing the chef's attention to detail.  
              I highly recommend it for anyone looking for a memorable dining experience.
            </p>
            <div>
              <h1 className="font-semibold text-gray-800">Kuman Tunman</h1>
              <p className="text-xs text-gray-500">Waiter</p>
            </div>
            <div className=" h-1 bg-orange-600 "></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col sm:flex-row p-4 gap-9 max-w-md  bg-amber-50 shadow ">
          {/* Left: Image & Stars */}
          <div className="flex flex-col items-center sm:items-start space-y-8">
            <img src={sec18} alt="profile" className="w-24 h-24 object-cover " />
            <div className="flex text-yellow-500 mt-2">
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </div>
          </div>

          {/* Right: Text and Name */}
          <div className="space-y-3">
            <p className="text-gray-700 text-sm">
              The scallops were perfectly cooked, tender, and flavorful, 
              paired beautifully with a creamy risotto and seasonal vegetables. 
              The presentation was artful, showcasing the chef's attention to detail.  
              I highly recommend it for anyone looking for a memorable dining experience.
            </p>
            <div>
              <h1 className="font-semibold text-gray-800">Kuman Tunman</h1>
              <p className="text-xs text-gray-500">Waiter</p>
            </div>
            <div className=" h-1 bg-orange-600 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lunch9;
