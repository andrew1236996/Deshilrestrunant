import React, { useState } from 'react';

// Menu with image URLs
const menuData = {
  BREAKFAST: [
    {
      name: "Beef Bourguignon",
      image: "../src/assets/images/keesha-s-kitchen-PqG32DYCTM8-unsplash.jpg"
    },
    {
      name: "Spicy Tuna Tartare",
      image: "../src/assets/images/joshua-forbes-g4gJfeiVd7E-unsplash.jpg"
    },
    {
      name: "Margherita Pizza",
      image: "../src/assets/images/emmanuel-ben-paul-grFZoxvKSvE-unsplash.jpg"
    },
    {
      name: "Braised Short Ribs",
      image: "../src/assets/images/hamza-sakrani-ieQSQhN7KP0-unsplash.jpg"
    },
    {
      name: "Vegan Buddha Bowl",
      image: "../src/assets/images/magic-mary-nEOzmjguwO0-unsplash.jpg"
    },
    {
      name: "Chicken Alfredo Pasta",
      image: "../src/assets/images/bralro-sPzG9heRMrw-unsplash.jpg"
    },
    {
      name: "Classic Caesar Salad",
      image: "../src/assets/images/jonathan-borba-c7aDFxMKv4o-unsplash.jpg"
    },
    {
      name: "Roasted Vegetable Platter",
      image: "../src/assets/images/nrd-D6Tu_L3chLE-unsplash.jpg"
    }
  ],
  LUNCH: [
    {
      name: "Grilled Chicken Sandwich",
      image: "../src/assets/images/emmanuel-ben-paul-grFZoxvKSvE-unsplash.jpg"
    },
    {
      name: "Pesto Pasta",
      image: "../src/assets/images/s-laiba-ali-6fm5j9x20W0-unsplash.jpg"
    },
    {
      name: "Turkey Avocado Wrap",
      image: "../src/assets/images/jonathan-borba-c7aDFxMKv4o-unsplash.jpg"
    },
    {
      name: "Miso Ramen",
      image: "../src/assets/images/jason-leung-z4vYlSyJk9M-unsplash.jpg"
    },
    {
      name: "Tuna Nicoise",
      image: "../src/assets/images/keesha-s-kitchen-PqG32DYCTM8-unsplash.jpg"
    },
    {
      name: "Eggplant Parmesan",
      image: "../src/assets/images/jesse-chan-l_LzQHnuZaE-unsplash.jpg"
    }
  ],
  DINNER: [
    {
      name: "Lamb Chops",
      image: "../src/assets/images/magic-mary-nEOzmjguwO0-unsplash.jpg"
    },
    {
      name: "Stuffed Peppers",
      image: "../src/assets/images/zaraq-iqbal-Q0a7fbRA88k-unsplash.jpg"
    },
    {
      name: "Salmon Teriyaki",
      image: "../src/assets/images/engin-akyurt-v6z8FoqPbJ8-unsplash.jpg"
    },
    {
      name: "Fettuccine Carbonara",
      image: "../src/assets/images/ibuki-tsubo-kNxQv2d2pGI-unsplash.jpg"
    },
    {
      name: "Shrimp Scampi",
      image: "../src/assets/images/zaraq-iqbal-Q0a7fbRA88k-unsplash.jpg"
    },
    {
      name: "Butternut Squash Risotto",
      image: "../src/assets/images/jesse-chan-l_LzQHnuZaE-unsplash.jpg"
    }
  ]
};

const Dinner7 = () => {
  const [activeTab, setActiveTab] = useState("BREAKFAST");

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Tabs */}
      <div className="flex justify-center mb-8 border-b border-gray-200">
        {Object.keys(menuData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-semibold uppercase tracking-widest ${
              activeTab === tab ? "border-b-2 border-red-600 text-black" : "text-gray-500"
            } transition-all duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid Menu */}
      <div className="grid bg-white grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {menuData[activeTab].map((item, index) => (
          <div key={index} className="   bg-amber-100 text-center p-4">
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-4"
            />

            {/* Stars */}
            <div className="flex justify-center text-red-600 text-sm mb-2">
              {Array(5)
                .fill("★")
                .map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>

            {/* Price */}
            <p className="text-red-600 text-sm mt-1">$15.00</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinner7;
