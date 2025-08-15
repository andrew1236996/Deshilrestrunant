import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaSearch,
  FaUserCircle,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from 'react-icons/fa';

import { useCart } from '../context/CartContext';
import Placeholder from '../src/assets/images/engin-akyurt-v6z8FoqPbJ8-unsplash.jpg';

const Lunch2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => setShowCart(!showCart);

  const {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    total,
    count: cartCount,
  } = useContext({ useCart });

  const navLinks = [
    { name: 'HOME', to: '/' },
    { name: 'DINNER', to: '/dinner' },
    { name: 'MENU', to: '/FoodMenu' },
    { name: 'SHOP', to: '/Shopage' },
    { name: 'BLOG', to: '/Blog' },
    { name: 'CONTACT', to: '/Contact' },
  ];

  return (
    <div className="w-full font-sans text-white relative">
      <div className="w-full lg:w-[70%] mx-auto">
        {/* Top Bar */}
        <div className="bg-[#111] px-4 md:px-10 py-2 text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Silk St, Barbican, London EC2Y 8DS, UK</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Find a Store</span>
            <span className="hover:underline cursor-pointer">Order Tracking</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-[#C34023] px-4 md:px-10 py-4 flex justify-between items-center relative">
          <div className="flex items-center gap-4">
            <FaBars className="text-2xl cursor-pointer lg:hidden" onClick={toggleMenu} />
            <span className="font-bold hidden sm:block">EN · IT</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-wide">DELISH</h1>

          <Link
            to="/Book"
            className="hidden sm:block bg-white text-[#C34023] font-semibold py-2 px-4 rounded hover:opacity-90"
          >
            BOOK A TABLE
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="bg-[#111] px-4 md:px-10 py-3 hidden lg:flex justify-between items-center">
          <div className="flex gap-6 text-sm">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="cursor-pointer hover:text-[#C34023] transition"
              >
                {item.name} {item.name !== 'CONTACT' && '▾'}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5 text-lg">
            <Link to="/search">
              <FaSearch className="cursor-pointer" />
            </Link>
            <Link to="/login">
              <FaUserCircle className="cursor-pointer" />
            </Link>
            <Link to="/wishlist">
              <FaHeart className="cursor-pointer" />
            </Link>
            <div className="relative">
              <FaShoppingCart className="cursor-pointer" onClick={toggleCart} />
              <div className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-[#111] px-4 py-4 flex flex-col gap-3 lg:hidden">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="cursor-pointer hover:text-[#C34023]"
              >
                {item.name} {item.name !== 'CONTACT' && '▾'}
              </Link>
            ))}
            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center gap-4 text-lg">
                <Link to="/search">
                  <FaSearch className="cursor-pointer" />
                </Link>
                <Link to="/login">
                  <FaUserCircle className="cursor-pointer" />
                </Link>
                <Link to="/wishlist">
                  <FaHeart className="cursor-pointer" />
                </Link>
                <div className="relative">
                  <FaShoppingCart className="cursor-pointer" onClick={toggleCart} />
                  <div className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </div>
                </div>
              </div>
              <Link
                to="/Book"
                className="bg-white text-[#C34023] font-semibold py-2 px-4 rounded hover:opacity-90 text-sm"
              >
                BOOK A TABLE
              </Link>
            </div>
          </div>
        )}

        {/* Cart Drawer */}
        {showCart && (
          <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-gray-900 z-50 p-6 overflow-y-auto shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Your Cart</h3>
              <button onClick={toggleCart} className="text-white text-sm hover:text-red-500">
                Close ✖
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-400">Cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-2 bg-gray-800 p-3 rounded">
                    <img
                      src={item.image || Placeholder}
                      alt={item.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1 ml-2">
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                      <p className="text-xs font-semibold text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="text-white bg-gray-600 text-xs px-2 py-1 rounded hover:bg-gray-500"
                      >
                        −
                      </button>
                      <button
                        onClick={() => addToCart(item)}
                        className="text-white bg-gray-600 text-xs px-2 py-1 rounded hover:bg-gray-500"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-400 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="border-t border-gray-600 pt-4 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lunch2;
