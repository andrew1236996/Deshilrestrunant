import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear field error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    setSuccessMessage('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/food/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const resText = await res.text();

      let data;
      try {
        data = JSON.parse(resText);
      } catch {
        throw new Error('Server did not return valid JSON:\n' + resText);
      }

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      setSuccessMessage('Login successful! Redirecting...');
      setFormData({ email: '', password: '' });

      // Optional: Store token or user info in localStorage
      localStorage.setItem('authToken', data.token);

      setTimeout(() => {
        navigate('/Lunch');
      }, 2000);
    } catch (error) {
      setApiError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {successMessage && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
            {successMessage}
          </div>
        )}

        {apiError && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-2">
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Forgot Password Link */}
          <div className="mb-4 text-right">
            <Link to="/forgotten" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <div className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
