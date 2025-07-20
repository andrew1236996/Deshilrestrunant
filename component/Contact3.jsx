import React, { useState } from 'react';
import { User, Mail, ChevronDown, Send } from 'lucide-react';

export default function Contact3() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gray-50 p-8 rounded-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">LEAVE A MESSAGE</h2>
        <p className="text-gray-600 text-sm max-w-lg mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in libero gravida, 
          iaculis mi. Curabitur non urna vel auctor sit amet vel fermentum est ullamcorper.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div className="relative">
          <select
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 appearance-none cursor-pointer"
            required
          >
            <option value="">Select Subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="sales">Sales</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Type Your Message"
            rows="5"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 resize-vertical"
            required
          />
        </div>

        {/* Submit Button */}
        <button
         onChange={handleSubmit}
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>SUBMIT MESSAGE</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}