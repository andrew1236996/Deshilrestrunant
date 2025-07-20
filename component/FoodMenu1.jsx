import React from 'react';

export default function FoodMenu1() {
  const menuItems = [
    {
      name: "Wild Mushroom Arancini",
      description: "Ricotta, goat cheese, beetroot and dateline",
      price: "$15.00"
    },
    {
      name: "Honey Glazed Salmon",
      description: "Ricotta, goat cheese, beetroot and dateline",
      price: "$15.00"
    },
    {
      name: "Truffle Mushroom Risotto",
      description: "Ricotta, goat cheese, beetroot and dateline",
      price: "$15.00"
    },
    {
      name: "Mediterranean Quinoa Salad",
      description: "Ricotta, goat cheese, beetroot and dateline",
      price: "$15.00"
    },
    {
      name: "Braised Short Ribs",
      description: "Ricotta, goat cheese, beetroot and dateline",
      price: "$15.00"
    },
    {
      name: "Roasted Vegetable Platter",
      description: "Ricotta, goat cheese, beetroot and dateline",
      price: "$15.00"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Chef Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L9.7 14.7l.71.71 4.37-4.38z"/>
              </svg>
            </div>
          </div>
          
          {/* Make Reservation Badge */}
          <div className="mb-4">
            <span className="bg-red-600 text-white px-4 py-2 text-xs font-medium uppercase tracking-wide">
              MAKE RESERVATION
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            DISCOVER OUR CATEGORY
          </h1>
          
          {/* Decorative Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                {/* Item Image Placeholder */}
                <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
                
                {/* Item Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-black">
                      {item.name}
                    </h3>
                    <span className="text-red-600 font-semibold text-lg ml-4">
                      {item.price}
                    </span>
                  </div>
                  
                  {/* Dotted line */}
                  <div className="border-b border-dotted border-gray-300 mb-2"></div>
                  
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}