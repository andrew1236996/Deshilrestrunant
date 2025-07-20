import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer1 = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1: Brand & Address */}
        <div>
          <div className="text-xl font-bold mb-2">🍽 DELISH</div>
          <p className="text-sm text-gray-400 mb-4 leading-6">
            1234, Restaurant St, South City<br />
            New York 0124
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">LINKS</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/About" className="hover:text-orange-500">About Us</Link></li>
            <li><Link to="/Team" className="hover:text-orange-500">Meet our team</Link></li>
            <li><Link to="/CaseStories" className="hover:text-orange-500">Case stories</Link></li>
            <li><Link to="/Latest" className="hover:text-orange-500">Latest News</Link></li>
            <li><Link to="/Contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Other Link */}
        <div>
          <h4 className="font-semibold text-white mb-3">OTHER LINK</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
            <li><a href="#" className="hover:text-orange-500">Creative Agency</a></li>
            <li><a href="#" className="hover:text-orange-500">Digital Agency</a></li>
            <li><a href="#" className="hover:text-orange-500">Marketing</a></li>
            <li><a href="#" className="hover:text-orange-500">Digital Services</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-3">NEWSLETTER</h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe us & receive our offers and updates your inbox directly
          </p>
          <div className="flex items-center bg-gray-800 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent text-sm px-3 py-2 w-full text-white outline-none"
            />
            <button className="bg-orange-600 p-3 hover:bg-orange-500 transition">
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-sm flex flex-col sm:flex-row justify-between text-gray-500">
        <p>All rights reserved 2024. Delish Restaurant</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-white">Terms Of Use</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
