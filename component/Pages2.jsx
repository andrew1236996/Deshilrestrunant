import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: "Beef Bourguignon", price: 19.00 },
  { id: 2, name: "Spicy Tuna Tartare", price: 19.00 },
  { id: 3, name: "Margherita Pizza", price: 19.00 },
  { id: 4, name: "Braised Short Ribs", price: 19.00 },
  { id: 5, name: "Vegan Buddha Bowl", price: 19.00 },
  { id: 6, name: "Chicken Alfredo Pasta", price: 19.00 },
  { id: 7, name: "Classic Caesar Salad", price: 19.00 },
  { id: 8, name: "Roasted Vegetable Platter", price: 19.00 },
  { id: 9, name: "Pulled Pork Sandwich", price: 19.00 },
  { id: 10, name: "Ahi Poke Bowl", price: 19.00 },
  { id: 11, name: "Chocolate Lava Cake", price: 19.00 },
  { id: 12, name: "Lobster Bisque", price: 19.00 },
];

const Pages2 = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Cart Summary */}
      <div className="mb-6 text-right">
        <p className="text-lg font-semibold">
          🛒 Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group relative text-center border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {/* Image placeholder */}
            <div className="bg-gray-200 h-32 sm:h-40 md:h-44 mb-2"></div>

            {/* Name */}
            <h3 className="text-sm font-semibold">{item.name}</h3>

            {/* Stars */}
            <div className="text-red-500 text-xs my-1">★★★★★</div>

            {/* Price */}
            <p className="text-sm text-red-600 font-semibold">${item.price.toFixed(2)}</p>

            {/* Add to Cart Button - Hidden until hover */}
            <button
              onClick={() => addToCart(item)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Item List */}
      {cart.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Cart Items</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pages2;
