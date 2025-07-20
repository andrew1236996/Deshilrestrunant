import React, { useState } from 'react';
import logo from "../src/assets/images/logo.png";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-amber-100">
      <div className="flex justify-between items-center px-4 py-4 lg:px-10">
        
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger menu (mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> // X icon
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> // hamburger icon
              )}
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul className={`flex-col lg:flex lg:flex-row lg:space-x-6  space-y-2 lg:space-y-0 ${isOpen ? 'flex' : 'hidden'} absolute lg:static bg-black w-full lg:w-auto left-0 top-16 p-4 lg:p-0 z-10`}>
          <Link to="/" className="block py-1">HOME</Link>
          <Link to='/Lunch' className="block py-1">LUNCH</Link>
          <Link to='/Dinner' className="block py-1">DINNER</Link>
          <Link to="/Shop" className="block py-1">SHOP</Link> 
         <Link to="/Blog" className="block py-1">BLOG</Link>
         <Link to="/Contact" className="block py-1">CONTACT</Link>
         
        </ul>

        {/* Book a table button */}
        <div className="hidden lg:flex border list-none text-white px-4 py-2 items-center space-x-2 font-sans hover:bo rder-b border-red-500 transition">
          <Link to="/Book">BOOK A TABLE</Link>
          <span>──</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
 