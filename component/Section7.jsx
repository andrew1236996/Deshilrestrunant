import React, { useState } from 'react';
import sec25 from "../src/assets/images/engin-akyurt-v6z8FoqPbJ8-unsplash.jpg";

const Section7 = () => {
  const [formData, setFormData] = useState({
    people: '1 Person',
    date: '',
    time: '09:00 am',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (!formData.date) {
      alert('Please select a reservation date.');
      return;
    }

    // Simulate submission (replace with API call if needed)
    console.log("Reservation Details:", formData);
    setSubmitted(true);

    // Reset form after submission
    setFormData({
      people: '1 Person',
      date: '',
      time: '09:00 am',
    });

    // Hide success after few seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="relative mt-20 min-h-screen flex flex-col-reverse lg:flex-row mx-auto justify-center gap-10 w-[90%] sm:w-[80%] lg:w-[60%] items-center bg-gray-50 p-6">
      
      {/* Left form section */}
      <form onSubmit={handleSubmit} className="max-w-md w-full text-center space-y-6">
        <button type="button" className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 text-sm rounded hover:bg-red-700">
          BOOK A TABLE
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-black">MAKE RESERVATION</h2>
        <div className="w-10 mx-auto border-b-2 border-red-600"></div>
        <div className="text-red-600 text-xl">••••</div>

        <div className="space-y-4 text-left">
          {/* Person Dropdown */}
          <select
            name="people"
            value={formData.people}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          >
            <option>1 Person</option>
            <option>2 Persons</option>
            <option>3 Persons</option>
            <option>4 Persons</option>
            <option>5+ Persons</option>
          </select>

          {/* Date Picker */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />

          {/* Time Dropdown */}
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          >
            <option>09:00 am</option>
            <option>10:00 am</option>
            <option>11:00 am</option>
            <option>12:00 pm</option>
            <option>01:00 pm</option>
            <option>02:00 pm</option>
            <option>03:00 pm</option>
            <option>04:00 pm</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700">
          BOOK NOW
        </button>

        {submitted && (
          <p className="text-green-600 font-semibold mt-2">
            Reservation submitted successfully!
          </p>
        )}
      </form>

      {/* Right image section */}
      <div className="w-64 h-64 sm:w-80 sm:h-80 border-4 border-white shadow-inner">
        <img
          src={sec25}
          alt="Reservation"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
};

export default Section7;
