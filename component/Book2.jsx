import React, { useState } from 'react';

const Book2 = () => {
  const [formData, setFormData] = useState({
    guests: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phone.trim(),
      numberOfPersons: parseInt(formData.guests),
      reservationDate: formData.date,
      reservationTime: formData.time,
      specialRequest: formData.message.trim(),
      message: formData.message.trim(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/food/createReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess('🎉 Reservation successful!');
      setFormData({
        guests: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      setTimeout(() => setSuccess(''), 5000);
    } catch (err) {
      setError(err.message || 'Failed to book reservation');
      setTimeout(() => setError(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-screen-md p-6 bg-gray-900 rounded-lg shadow-lg space-y-6"
      >
        {/* Alerts */}
        {success && (
          <div className="bg-green-700 text-white px-4 py-2 rounded">{success}</div>
        )}
        {error && (
          <div className="bg-red-700 text-white px-4 py-2 rounded">{error}</div>
        )}

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Number of Guests*</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="e.g., 2"
              required
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Select Date*</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Select Time*</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Your Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email Address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234..."
              required
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>
        </div>

        {/* Special Message */}
        <div>
          <label className="block mb-1 font-semibold">Type Your Special Message*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your special message"
            required
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded h-32"
          />
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold tracking-wide w-full sm:w-auto"
          >
            BOOK A TABLE →
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book2;
