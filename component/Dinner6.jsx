import React from 'react';
import { Check } from 'lucide-react';

export default function Dinner6() {
  const features = [
    "Analyzing Restaurant Customer Feedback for Enhanced Dining Experiences*",
    "Leveraging Customer Reviews to Elevate Your Restaurant's Reputation*",
    "Decoding Online Reviews to Improve Your Restaurant's Service and Menu*"
  ];

  const stats = [
    { number: "15", label: "NEW", sublabel: "COOL PROJECTS" },
    { number: "15", label: "TOTAL", sublabel: "AWARDS WIN" },
    { number: "20", label: "UNIQUE", sublabel: "FOOD SPECIALITIES" },
    { number: "69", label: "HARD", sublabel: "TEAM MEMBERS" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section - White Content Area */}
      <div className="bg-black w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl bg-white mx-auto py-8 px-7 ">
          {/* Make Reservation Badge */}
          <div className="mb-6">
            <span className="bg-red-600 text-white px-4 py-2 text-xs font-medium uppercase tracking-wide">
              MAKE RESERVATION
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6">
            MOST TRUSTED RESTAURANT
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit verius sagittis sapien
            molestie, velit sodales hendrerit lorem ipsum magna lobortis ullamcorper quisque
            porttitor donec.
          </p>

          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex shadow-2xl items-start space-x-3">
                <Check className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Red Stats Area */}
      <div className="bg-red-600 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-row text-center text-white">
                <span className="text-6xl sm:text-5xl lg:text-6xl font-bold block leading-none mb-2">
                  {stat.number}
                </span>
                <div className="text-sm mt-7 px-4 font-medium uppercase tracking-wide">
                  <div>{stat.label}</div>
                  <div>{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
