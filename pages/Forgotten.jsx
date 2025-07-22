import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Forgotten = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('http://localhost:5000/api/food/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const resText = await res.text();

      let data;
      try {
        data = JSON.parse(resText);
      } catch{
        throw new Error('Unexpected server response: ' + resText);
      }

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send reset link');
      }

      setSuccessMessage(data.message);
      setEmail('');

      // Optional: Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/ResetPassword');
      }, 3000);
    } catch (err) {
      console.error('Frontend forgotPassword error:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>

        {/* Success */}
        {successMessage && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-sm">
            {successMessage}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded transition text-white ${
              loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p>
            Remembered your password?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
          <p className="mt-2">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgotten;
