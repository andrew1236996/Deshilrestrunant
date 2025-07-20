import React from 'react';
import { Calendar, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Chief2() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="lg:w-1/2 p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Richard John</h1>
            <p className="text-red-600 font-semibold text-sm">Founder & CEO</p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-600 text-sm leading-relaxed">
              Sem consectetur mauris convallis incididunt nostra rutrum metus sagittis auctor, 
              commodo cursibus. Rhoncus fermentum magna tempor urna consequat, ante 
              auctor magna pretium ac lectus bibendum pharetra. Congue sociis nec sed 
              urna parturient pharetra bibendum bibendum.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Experience */}
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Experience</p>
                <p className="text-gray-800 font-semibold text-sm">More Than 10 Years</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Email</p>
                <p className="text-gray-800 font-semibold text-sm">info@agency.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Phone</p>
                <p className="text-gray-800 font-semibold text-sm">+(256) 586216958</p>
              </div>
            </div>

            {/* Fax */}
            <div className="flex items-start space-x-3">
              <MessageSquare className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Fax</p>
                <p className="text-gray-800 font-semibold text-sm">+256816632</p>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-200 uppercase text-sm tracking-wide">
            Contact Me
          </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 bg-gray-300 min-h-80 lg:min-h-full">
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              </div>
              <p className="text-sm">Profile Image</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}