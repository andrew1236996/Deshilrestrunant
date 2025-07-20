import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Placeholder from '../src/assets/images/aditya-romansa-m6p4lqWxfy0-unsplash.jpg';

const menuItems = [
  { id: 1, title: "Mushroom Arancini", description: "Ricotta, goat cheese, beetroot and dateline.", price: 15 },
  { id: 2, title: "Butternut Squash Soup", description: "Ricotta, goat cheese, beetroot and dateline.", price: 15 },
  { id: 3, title: "Braised Short Ribs", description: "Ricotta, goat cheese, beetroot and dateline.", price: 15 },
  { id: 4, title: "Braised Short Ribs", description: "Ricotta, goat cheese, beetroot and dateline.", price: 15 },
  { id: 5, title: "Mushroom Arancini", description: "Ricotta, goat cheese, beetroot and dateline.", price: 15 },
];

const Lunch7 = () => {
  const {
    addToCart,
  } = useContext(CartContext);

  const renderItems = (items) =>
    items.map((item) => (
      <div key={item.id + Math.random()} className="flex items-center justify-between border-b border-gray-700 py-4">
        <div className="flex items-center gap-4">
          <img src={Placeholder} alt="Dish" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-white text-sm">{item.title}</h4>
            <p className="text-gray-500 text-xs">{item.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#c03e1c] font-semibold text-sm">${item.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart({ ...item, image: Placeholder })}
            className="bg-[#c03e1c] text-white text-xs px-2 py-1 rounded hover:bg-[#a83616] transition"
          >
            Add
          </button>
        </div>
      </div>
    ));

  return (
    <section className="bg-black text-white text-center py-16 px-4 md:px-20 font-sans relative">
      {/* Header without cart button */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">STARTERS & MAIN DISHES</h2>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-600 pt-10">
        <div>
          <p className="text-sm text-center mb-4 text-gray-400">— BEST DRINKS —</p>
          <h3 className="text-xl font-semibold text-center mb-6">STARTER MENU</h3>
          {renderItems(menuItems)}
        </div>
        <div>
          <p className="text-sm text-center mb-4 text-gray-400">— BEST DRINKS —</p>
          <h3 className="text-xl font-semibold text-center mb-6">MAIN DISHES</h3>
          {renderItems(menuItems)}
        </div>
      </div>
    </section>
  );
};

export default Lunch7;