import React, { useState } from 'react';

// ChefCard component
const ChefCard = ({ name, role, image, onClick }) => (
  <div className="bg-white overflow-hidden shadow-lg">
    {/* Chef Image */}
    <img src={image} alt={name} className="w-full h-64 object-cover" />

    {/* Chef Info */}
    <div className="bg-black text-white p-4 flex items-center justify-between">
      <div>
        <p className="text-orange-500 text-sm font-medium mb-1">{role}</p>
        <h3 className="text-white font-bold text-lg">{name}</h3>
      </div>
      <button
        onClick={onClick}
        className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full"
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

// Lunch8 component
const Lunch8 = () => {
  const [selectedChef, setSelectedChef] = useState(null);

  const chefs = [
    {
      name: "MIKE HARDSON",
      role: "Head Chef",
      image: "../src/assets/images/jonathan-borba-c7aDFxMKv4o-unsplash.jpg",
      description: "Mike is a renowned Head Chef with over 20 years of experience in gourmet cuisine."
    },
    {
      name: "KENNETH OLIVER",
      role: "Sous Chef",
      image: "../src/assets/images/aditya-romansa-m6p4lqWxfy0-unsplash.jpg",
      description: "Kenneth specializes in exotic flavors and kitchen operations with precision."
    },
    {
      name: "QUENTIN SAMUEL",
      role: "Pastry Chef",
      image: "../src/assets/images/fotos-DpPYTMWYnkY-unsplash.jpg",
      description: "Quentin is a master pastry chef known for delicate desserts and sweet innovations."
    },
    {
      name: "PATRICK JAMES",
      role: "Executive Chef",
      image: "../src/assets/images/fotos-DpPYTMWYnkY-unsplash.jpg",
      description: "Patrick oversees kitchen strategy, menu design, and culinary excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 text-sm font-medium mb-6">
            TEAM MEMBERS
          </div>
          <h1 className="text-black text-4xl font-bold tracking-wide mb-4">
            OUR POPULAR CHEFS
          </h1>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-orange-500"></div>
            <div className="w-2 h-2 bg-orange-500"></div>
            <div className="w-2 h-2 bg-orange-500"></div>
            <div className="w-2 h-2 bg-orange-500"></div>
          </div>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <ChefCard key={index} {...chef} onClick={() => setSelectedChef(chef)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedChef && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white max-w-xl w-full rounded shadow-lg overflow-hidden">
            <img
              src={selectedChef.image}
              alt={selectedChef.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6 text-black">
              <h2 className="text-2xl font-bold mb-2">{selectedChef.name}</h2>
              <p className="text-orange-500 font-semibold mb-2">{selectedChef.role}</p>
              <p className="text-sm leading-relaxed">{selectedChef.description}</p>
              <button
                onClick={() => setSelectedChef(null)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lunch8;
