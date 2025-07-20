
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Forgotten = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    // Simulate API call to send reset email
    setError('');
    setMessage(`A password reset link has been sent to ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">Enter your email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="you@example.com"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center text-sm">
          <p>
            Remembered your password?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
          <p className="mt-2">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgotten;
