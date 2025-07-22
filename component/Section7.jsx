import React, { useState } from 'react';
import sec25 from "../src/assets/images/engin-akyurt-v6z8FoqPbJ8-unsplash.jpg";

const Section7 = () => {
  const [formData, setFormData] = useState({
    numberOfPersons: 1,
    reservationDate: '',
    reservationTime: '09:00 am',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'numberOfPersons' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess('');
    setError('');

    if (!formData.reservationDate) {
      setError('Please select a reservation date.');
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/food/createReservation", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Reservation failed');
      }

      setSuccess('Reservation submitted successfully!');
      setFormData({
        numberOfPersons: 1,
        reservationDate: '',
        reservationTime: '09:00 am',
      });

      setTimeout(() => setSuccess(''), 4000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setTimeout(() => setError(''), 4000);
    }
  };

  return (
    <div className="relative mt-20 min-h-screen flex flex-col-reverse lg:flex-row mx-auto justify-center gap-10 w-[90%] sm:w-[80%] lg:w-[60%] items-center bg-gray-50 p-6">
      
      <form onSubmit={handleSubmit} className="max-w-md w-full text-center space-y-6">
        <button type="button" className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 text-sm rounded hover:bg-red-700">
          BOOK A TABLE
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-black">MAKE RESERVATION</h2>
        <div className="w-10 mx-auto border-b-2 border-red-600"></div>
        <div className="text-red-600 text-xl">••••</div>

        <div className="space-y-4 text-left">
          {/* Number of Persons Dropdown */}
          <select
            name="numberOfPersons"
            value={formData.numberOfPersons}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3"
          >
            <option value={1}>1 Person</option>
            <option value={2}>2 Persons</option>
            <option value={3}>3 Persons</option>
            <option value={4}>4 Persons</option>
            <option value={5}>5+ Persons</option>
          </select>

          {/* Date Picker */}
          <input
            type="date"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3"
          />

          {/* Time Dropdown */}
          <select
            name="reservationTime"
            value={formData.reservationTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3"
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

        {success && (
          <p className="text-green-600 font-semibold mt-2">{success}</p>
        )}
        {error && (
          <p className="text-red-600 font-semibold mt-2">{error}</p>
        )}
      </form>

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
