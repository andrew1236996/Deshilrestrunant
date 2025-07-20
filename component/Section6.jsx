import React from 'react';
import sec19 from "../src/assets/images/virginia-bates-MATSELCYR4Q-unsplash.jpg";
import sec20 from "../src/assets/images/hamza-sakrani-ieQSQhN7KP0-unsplash.jpg";
import sec22 from "../src/assets/images/Vector 14.png";
import sec23 from "../src/assets/images/Vector 15.png";
import sec24 from "../src/assets/images/Vector (2).png";
import sec25 from "../src/assets/images/Vector (1).png";

const Section6 = () => {
  return (
    <>
      <div className="relative min-h-screen top-50">
        <img 
          src={sec24} 
          alt="vector right" 
          className="hidden sm:block absolute right-0 mt-10 mr-10 transform -translate-y-1/2 opacity-60 w-10"
        />
        <img 
          src={sec25} 
          alt="vector left" 
          className="hidden sm:block absolute left-0 mt-10 ml-10 transform -translate-y-1/2 opacity-60 w-10"
        />

        <div className="mx-auto text-center pt-10">
          <p className="bg-orange-600 text-amber-50 mx-auto w-fit px-3 py-1 text-sm sm:text-base font-jost">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="font-semibold text-3xl sm:text-4xl">
            OUR CUSTOMER FEEDBACK
          </h2>
          <span>──</span>
        </div>

        <div className="flex flex-col lg:flex-row sm:w-[90%] lg:w-[80%] mt-10 mx-auto gap-5">
          {/* Card 1 */}
          <div className="border-2 px-4 py-5 bg-slate-200 space-y-4">
            <p>
              The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. 
              The Culinary Corner excels in delivering delicious food and exceptional service.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={sec19} alt="profile" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3>Amanda Martins</h3>
                  <p>Food Reviewer</p>
                </div>
              </div>
              <div className="flex gap-3">
                <img src={sec23} alt="icon" className="w-6 h-6" />
                <img src={sec22} alt="icon" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-2 px-4 py-5 bg-slate-200 space-y-4">
            <p>
              The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. 
              The Culinary Corner excels in delivering delicious food and exceptional service.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={sec20} alt="profile" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3>Amanda Martins</h3>
                  <p>Food Reviewer</p>
                </div>
              </div>
              <div className="flex gap-3">
                <img src={sec23} alt="icon" className="w-6 h-6" />
                <img src={sec22} alt="icon" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
