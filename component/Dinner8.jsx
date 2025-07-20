import React from 'react';
import { Briefcase, Users, TrendingUp } from 'lucide-react'; // Lucide icons

export default function Dinner8() {
  const features = [
    {
      icon: <Briefcase className="w-5 h-5 text-white" />,
      title: "Efficiency & Management",
      description: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "Effective Team Work",
      description: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      title: "Amazing Growth Flow",
      description: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white flex flex-col lg:flex-row items-center justify-center px-6 py-16 gap-12">
      {/* Left Column - Text Content */}
      <div className="w-full lg:w-1/2 max-w-xl">
        {/* Reservation Tag */}
        <div className="mb-4">
          <span className="bg-red-600 text-white text-xs px-4 py-2 uppercase font-semibold tracking-wide">
            Make Reservation
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
          Why Delish Your Priority
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus sagittis aenean malesuada, 
          velit sodales hendrerit lacus iaculis porta lobortis sollicitudin quisque dictum porttitor donec...
        </p>

        {/* Feature List */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">{feature.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="../src/assets/images/engin-akyurt-v6z8FoqPbJ8-unsplash.jpg"
          alt="Restaurant Dining"
          className="w-full h-64 lg:h-80 object-cover rounded"
        />
      </div>
    </div>
  );
}
