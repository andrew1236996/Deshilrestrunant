import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Dropdown({ label, selected, setSelected, showDropdown, setShowDropdown, options }) {
  return (
    <div className="relative">
      <label className="block text-sm mb-2">{label}</label>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="w-full bg-gray-900 border border-gray-700 px-4 py-3 text-left flex justify-between items-center hover:border-gray-600 transition-colors"
      >
        <span className={selected.includes('Choose') || selected.includes('Person') ? 'text-gray-400' : 'text-white'}>
          {selected}
        </span>
        <ChevronDown className="w-5 h-5" />
      </button>
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 border border-gray-700 z-20">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setShowDropdown(false);
              }}
              className="w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors border-b border-gray-700 last:border-b-0"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Dinner1() {
  const [selectedGuests, setSelectedGuests] = useState('Person...');
  const [selectedDate, setSelectedDate] = useState('Choose...');
  const [selectedTime, setSelectedTime] = useState('Choose...');
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const guestOptions = ['1 Person', '2 Persons', '3 Persons', '4 Persons', '5+ Persons'];
  const dateOptions = ['Today', 'Tomorrow', 'Next Week', 'Choose Date...'];
  const timeOptions = ['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'];

  return (
    <div className="bg-black text-white">
      <header className="bg-red-600 text-white text-sm py-2 px-4">
        <div className="mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span>Mon-Wed: 11a-9p</span>
            <span>•</span>
            <span>Thur-Sat: 11a-10p</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>reservations@delish.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>123 456 7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>296 Robbie Avenue Mall Berlin 21</span>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-black px-4 relative z-50">
        <div className="max-w-4xl flex space-x-10 items-center py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <span className="text-black font-bold text-lg">✕</span>
            </div>
            <span className="text-xl font-bold">DELISH</span>
          </div>

          <div className="hidden md:flex space-x-5 items-center">
            <Link to="/" className="hover:text-red-500 flex items-center transition-colors">
              HOME <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Link to="/Lunch" className="hover:text-red-500 flex items-center transition-colors">
              LUNCH <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Link to="/Gall" className="hover:text-red-500 flex items-center transition-colors">
              SHOP <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Link to="/Shop" className="hover:text-red-500 flex items-center transition-colors">
              Shop <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Link to="/Contact" className="hover:text-red-500 transition-colors">
              CONTACT
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)} className="text-white">
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-4">
            <Link to="/" className="block hover:text-red-500">HOME</Link>
            <Link to="/gallery" className="block hover:text-red-500">GALLERY</Link>
            <Link to="/shop" className="block hover:text-red-500">SHOP</Link>
            <Link to="/blog" className="block hover:text-red-500">BLOG</Link>
            <Link to="/contact" className="block hover:text-red-500">CONTACT</Link>
          </div>
        )}
      </nav>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="flex-1 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 border border-gray-800 rounded-full opacity-30"></div>
            <div className="absolute top-40 left-40 w-64 h-64 border border-gray-700 rounded-full opacity-20"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 border border-gray-800 rounded-full opacity-25"></div>
          </div>

          <div className="relative z-10 px-6 md:px-20 py-20 md:py-32">
            <p className="text-red-500 text-sm font-medium mb-4 tracking-wide">
              WE SERVE FOOD, HARMONY, & LAUGHTER SINCE 1998
            </p>

            <h1 className="text-4xl md:text-5xl leading-tight mb-8">
              DELICIOUS FOODS WITH<br />WONDERFUL EATING
            </h1>

            <Link to="/Dinner5" className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 mb-16">
              VIEW FOOD MENU
            </Link>

            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-6">Book a Table</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Dropdown
                  label="NUMBER OF GUEST *"
                  selected={selectedGuests}
                  setSelected={setSelectedGuests}
                  showDropdown={showGuestDropdown}
                  setShowDropdown={setShowGuestDropdown}
                  options={guestOptions}
                />
                <Dropdown
                  label="SELECT DATE *"
                  selected={selectedDate}
                  setSelected={setSelectedDate}
                  showDropdown={showDateDropdown}
                  setShowDropdown={setShowDateDropdown}
                  options={dateOptions}
                />
                <Dropdown
                  label="SELECT TIME *"
                  selected={selectedTime}
                  setSelected={setSelectedTime}
                  showDropdown={showTimeDropdown}
                  setShowDropdown={setShowTimeDropdown}
                  options={timeOptions}
                />
              </div>
              <button className="bg-red-600 px-8 py-3 hover:bg-red-700 transition-colors font-medium">
                BOOK RESERVATION
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-3xl lg:w-[45%] lg:h-100 md:h-auto bg-gray-300 relative overflow-hidden">
          <div className="absolute top-4 right-4 flex space-x-2">
            <Link
              to="/Dinner5"
              className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
            >
              ORDER ONLINE
            </Link>
            <Link
              to="/Book"
              className="bg-red-600 px-4 py-2 hover:bg-red-700 transition-colors"
            >
              BOOK A TABLE
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-20"></div>
        </div>
      </div>
    </div>
  );
}



            //  <Link
            //   to="/Book"
            //   className="bg-red-600 px-4 py-2 hover:bg-red-700 transition-colors"
            // >
            //   BOOK A TABLE