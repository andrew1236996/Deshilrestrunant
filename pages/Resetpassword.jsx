import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!password || !confirmPassword) {
      setError('Please fill out both password fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/food/resetPassword/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, confirmPassword })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Reset failed');
      }

      setSuccessMessage(data.message);
      setPassword('');
      setConfirmPassword('');

      // Optional: Redirect to login page after success
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Your Password</h2>

        {successMessage && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-sm">
            {successMessage}
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleReset}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white transition ${
              loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p>
            <Link to="/login" className="text-blue-600 hover:underline">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
