import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom"; // <-- Import Link
import sec13 from "../src/assets/images/keesha-s-kitchen-PqG32DYCTM8-unsplash.jpg";
import sec14 from "../src/assets/images/martin-baron-PBgbIbOsprk-unsplash.jpg";
import sec15 from "../src/assets/images/joshua-forbes-g4gJfeiVd7E-unsplash.jpg";
import sec16 from "../src/assets/images/keesha-s-kitchen-3gbiqiGJYUc-unsplash.jpg";
import sec17 from "../src/assets/images/bralro-sPzG9heRMrw-unsplash.jpg";
import sec18 from "../src/assets/images/jesse-chan-l_LzQHnuZaE-unsplash.jpg";

const categories = ["All Food", "Breakfast", "Lunch", "Dinner"];

const categoryLinks = {
  "All Food": "/all-food",
  Breakfast: "/Dinner7",
  Lunch: "/lunch",
  Dinner: "/dinner",
};

const products = [
  { id: 1, name: "Braised Short Ribs", price: "$15.00", rating: 5, image: sec13 },
  { id: 2, name: "Roasted Vegetable Platter", price: "$15.00", rating: 4, image: sec14 },
  { id: 3, name: "Classic Caesar Salad", price: "$15.00", rating: 5, image: sec15 },
  { id: 4, name: "Szechuan Beef Stir-Fry", price: "$15.00", rating: 4, image: sec16 },
  { id: 5, name: "Vegan Buddha Bowl", price: "$15.00", rating: 5, image: sec17 },
  { id: 6, name: "Chicken Alfredo Pasta", price: "$15.00", rating: 5, image: sec18 },
];

const Section4 = () => {
  const [activeCategory, setActiveCategory] = useState("All Food");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="max-w-5xl mx-auto p-4 flex-col-reverse">
      {/* Section Title */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="text-center mb-6">
          <p className="bg-orange-600 inline-block text-white px-3 py-1 text-sm font-semibold rounded">
            FOOD MENU
          </p>
          <h2 className="text-3xl font-bold mt-2">OUR DELICIOUS FOODS</h2>
        </div>

        {/* Category Tabs with Routing */}
        <div className="flex justify-between space-x-2 mt-4 mb-6">
          {categories.map((cat) => (
            <Link
              to={categoryLinks[cat]}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`border px-3 py-2 h-8 text-sm list-none cursor-pointer ${
                activeCategory === cat
                  ? "border-orange-600 text-orange-600"
                  : "border-gray-300 text-gray-600"
              } hover:border-orange-600 hover:text-orange-600 transition rounded`}
            >
              {cat.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>

      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Left Cart List */}
        <div className="p-4 space-y-4 bg-slate-100">
          <img src={sec14} alt="main food" className="w-full rounded" />
          <h3 className="text-lg font-semibold">🛒 Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">No items added yet.</p>
          ) : (
            cart.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border-b pb-2 last:border-b-0"
              >
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(idx)}
                  className="text-red-500 hover:text-red-700"
                >
                  <AiOutlineClose />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Right Grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleAddToCart(product)}
              className="cursor-pointer w-full bg-white p-2 text-center rounded hover:shadow-md transition"
            >
              <div className="w-full h-60 overflow-hidden rounded mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold">{product.name}</h4>
              <div className="text-red-500 text-sm mb-1">
                {"★".repeat(product.rating)}
              </div>
              <p className="text-orange-600 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
