import React, { useState } from 'react';

const FoodMenu2 = () => {
  const [formData, setFormData] = useState({
    person: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can send this data to your server/API
  };

  return (
    <div className="bg-black text-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-center">
      <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-2">BOOK A TABLE</h2>
        <p className="text-sm text-gray-400">Book an open table for your happy time spent</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 w-full md:max-w-3xl"
      >
        {/* Person */}
        <select
          name="person"
          value={formData.person}
          onChange={handleChange}
          className="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full md:w-auto"
          required
        >
          <option value="">Person</option>
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3">3 Persons</option>
          <option value="4">4+ Persons</option>
        </select>

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full md:w-auto"
          required
        />

        {/* Time */}
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full md:w-auto"
          required
        >
          <option value="">Time</option>
          <option value="10:00 am">10:00 am</option>
          <option value="11:00 am">11:00 am</option>
          <option value="12:00 pm">12:00 pm</option>
          <option value="01:00 pm">01:00 pm</option>
        </select>

        {/* Submit */}
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FoodMenu2;
