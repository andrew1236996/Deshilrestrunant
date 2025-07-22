import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, AlertCircle, CheckCircle } from 'lucide-react';

function Dropdown({ label, selected, setSelected, showDropdown, setShowDropdown, options, error, success }) {
  return (
    <div className="relative">
      <label className="block text-sm mb-2">{label}</label>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`w-full bg-gray-900 border px-4 py-3 text-left flex justify-between items-center hover:border-gray-600 transition-colors ${
          error 
            ? 'border-red-500' 
            : success 
              ? 'border-green-500' 
              : 'border-gray-700'
        }`}
      >
        <span className={selected.includes('Choose') || selected.includes('Person') ? 'text-gray-400' : 'text-white'}>
          {selected}
        </span>
        <ChevronDown className="w-5 h-5" />
      </button>
      
      {error && (
        <div className="flex items-center mt-1 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4 mr-1" />
          <span>{error}</span>
        </div>
      )}
      
      {success && (
        <div className="flex items-center mt-1 text-green-500 text-sm">
          <CheckCircle className="w-4 h-4 mr-1" />
          <span>{success}</span>
        </div>
      )}
      
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
  
  // Error and Success states
  const [guestError, setGuestError] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [guestSuccess, setGuestSuccess] = useState('');
  const [dateSuccess, setDateSuccess] = useState('');
  const [timeSuccess, setTimeSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState('');
  const [reservationError, setReservationError] = useState('');

  const guestOptions = ['1 Person', '2 Persons', '3 Persons', '4 Persons', '5+ Persons'];
  const dateOptions = ['Today', 'Tomorrow', 'Next Week', 'Choose Date...'];
  const timeOptions = ['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'];

  // Validation function
  const validateForm = () => {
    let isValid = true;
    
    // Clear previous errors and success messages
    setGuestError('');
    setDateError('');
    setTimeError('');
    setGuestSuccess('');
    setDateSuccess('');
    setTimeSuccess('');
    setReservationError('');

    // Validate guests
    if (selectedGuests.includes('Person...')) {
      setGuestError('Please select number of guests');
      isValid = false;
    } else {
      setGuestSuccess('✓');
    }

    // Validate date
    if (selectedDate.includes('Choose...')) {
      setDateError('Please select a date');
      isValid = false;
    } else {
      setDateSuccess('✓');
    }

    // Validate time
    if (selectedTime.includes('Choose...')) {
      setTimeError('Please select a time');
      isValid = false;
    } else {
      setTimeSuccess('✓');
    }

    return isValid;
  };

  // Helper function to convert date selection to proper date format
  const formatReservationDate = (dateSelection) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    switch (dateSelection) {
      case 'Today':
        return today.toISOString().split('T')[0]; // YYYY-MM-DD format
      case 'Tomorrow':
        return tomorrow.toISOString().split('T')[0];
      case 'Next Week':
        return nextWeek.toISOString().split('T')[0];
      default:
        return today.toISOString().split('T')[0]; // Default to today
    }
  };

  // Fetch function to handle reservation booking
  const handleBookReservation = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setReservationError('');
    setReservationSuccess('');

    try {
      // Extract number of persons from selection
      let numberOfPersons;
      if (selectedGuests.includes('5+')) {
        numberOfPersons = 5; // Set to 5 for 5+ persons
      } else {
        numberOfPersons = parseInt(selectedGuests.replace(' Persons', '').replace(' Person', ''));
      }

      // Prepare data matching your API structure
      const reservationData = {
        name: null, // Optional field - not collected in current form
        email: null, // Optional field - not collected in current form
        phoneNumber: null, // Optional field - not collected in current form
        numberOfPersons: numberOfPersons, // Required - converted to integer
        tableNumber: null, // Optional field - not collected in current form
        reservationDate: formatReservationDate(selectedDate), // Required - proper date format
        reservationTime: selectedTime, // Required - time string
        specialRequest: null, // Optional field - not collected in current form
        message: null // Optional field - not collected in current form
      };

      console.log('Sending reservation data:', reservationData); // Debug log

      const response = await fetch('http://localhost:5000/api/food/createReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(reservationData)
      });

      console.log('Response status:', response.status); // Debug log

      // Check if response is ok
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('Error response:', errorData); // Debug log
        
        // Handle specific error codes from your API
        if (errorData?.code === 'MISSING_REQUIRED_FIELDS') {
          throw new Error('Please fill in all required fields');
        } else if (errorData?.code === 'INVALID_PERSON_COUNT') {
          throw new Error('Invalid number of persons selected');
        } else if (errorData?.code === 'INVALID_DATE_FORMAT') {
          throw new Error('Invalid date format');
        } else if (errorData?.code === 'INVALID_DATE_PAST') {
          throw new Error('Please select a future date for your reservation');
        } else {
          throw new Error(errorData?.error || `HTTP error! status: ${response.status}`);
        }
      }

      const result = await response.json();
      console.log('Success response:', result); // Debug log

      // Display success message with reservation details
      setReservationSuccess(
        `${result.message} - Reservation ID: ${result.reservation.id} for ${selectedGuests} on ${selectedDate} at ${selectedTime}!`
      );
      
      // Reset form after successful booking
      setTimeout(() => {
        setSelectedGuests('Person...');
        setSelectedDate('Choose...');
        setSelectedTime('Choose...');
        setGuestSuccess('');
        setDateSuccess('');
        setTimeSuccess('');
        setReservationSuccess('');
      }, 7000); // Extended to 7 seconds to show reservation ID

    } catch (error) {
      console.error('Reservation error:', error); // Debug log
      setReservationError(error.message || 'Failed to book reservation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
              <span className="text-white font-bold text-lg">✕</span>
            </div>
            <span className="text-xl font-bold">DELISH</span>
          </div>

          <div className="hidden md:flex space-x-5 items-center">
            <a href="/" className="hover:text-red-500 flex items-center transition-colors">
              HOME <ChevronDown className="w-4 h-4 ml-1" />
            </a>
            <a href="/lunch" className="hover:text-red-500 flex items-center transition-colors">
              LUNCH <ChevronDown className="w-4 h-4 ml-1" />
            </a>
            <a href="/gallery" className="hover:text-red-500 flex items-center transition-colors">
              GALLERY <ChevronDown className="w-4 h-4 ml-1" />
            </a>
            <a href="/shop" className="hover:text-red-500 flex items-center transition-colors">
              SHOP <ChevronDown className="w-4 h-4 ml-1" />
            </a>
            <a href="/contact" className="hover:text-red-500 transition-colors">
              CONTACT
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)} className="text-white">
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-4">
            <a href="/" className="block hover:text-red-500">HOME</a>
            <a href="/gallery" className="block hover:text-red-500">GALLERY</a>
            <a href="/shop" className="block hover:text-red-500">SHOP</a>
            <a href="/blog" className="block hover:text-red-500">BLOG</a>
            <a href="/contact" className="block hover:text-red-500">CONTACT</a>
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

            <a href="/menu" className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 mb-16 inline-block">
              VIEW FOOD MENU
            </a>

            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-6">Book a Table</h3>
              
              {/* Global Success/Error Messages */}
              {reservationSuccess && (
                <div className="mb-6 p-4 bg-green-900 border border-green-500 rounded flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-200">{reservationSuccess}</span>
                </div>
              )}
              
              {reservationError && (
                <div className="mb-6 p-4 bg-red-900 border border-red-500 rounded flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-200">{reservationError}</span>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Dropdown
                  label="NUMBER OF GUEST *"
                  selected={selectedGuests}
                  setSelected={setSelectedGuests}
                  showDropdown={showGuestDropdown}
                  setShowDropdown={setShowGuestDropdown}
                  options={guestOptions}
                  error={guestError}
                  success={guestSuccess}
                />
                <Dropdown
                  label="SELECT DATE *"
                  selected={selectedDate}
                  setSelected={setSelectedDate}
                  showDropdown={showDateDropdown}
                  setShowDropdown={setShowDateDropdown}
                  options={dateOptions}
                  error={dateError}
                  success={dateSuccess}
                />
                <Dropdown
                  label="SELECT TIME *"
                  selected={selectedTime}
                  setSelected={setSelectedTime}
                  showDropdown={showTimeDropdown}
                  setShowDropdown={setShowTimeDropdown}
                  options={timeOptions}
                  error={timeError}
                  success={timeSuccess}
                />
              </div>
              
              <button 
                onClick={handleBookReservation}
                disabled={isLoading}
                className={`px-8 py-3 font-medium transition-colors ${
                  isLoading 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isLoading ? 'BOOKING...' : 'BOOK RESERVATION'}
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-3xl lg:w-[45%] lg:h-100 md:h-auto bg-gray-300 relative overflow-hidden">
          <div className="absolute top-4 right-4 flex space-x-2">
            <a
              href="/order"
              className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
            >
              ORDER ONLINE
            </a>
            <a
              href="/book"
              className="bg-red-600 px-4 py-2 hover:bg-red-700 transition-colors"
            >
              BOOK A TABLE
            </a>
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-20"></div>
        </div>
      </div>
    </div>
  );
}