import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact2() {
  return (
    <div className="bg-slate-100 py-12 px-4">
      <div className=" lg:mx-30 lg:w-[30%]  bg-white shadow-lg  p-6 font-sans">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            OFFICE INFORMATION
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Completely receptive 24/7 communities via standards<br />
            compliant metrics whereas.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* Phone & Email */}
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Phone Number & Email
              </h3>
              <p className="text-gray-600 text-sm">+ (516) 6501 2500</p>
              <p className="text-gray-600 text-sm">helpdesk@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Our Office Address
              </h3>
              <p className="text-gray-600 text-sm">258 Dancing Street, Midland Line</p>
              <p className="text-gray-600 text-sm">10-01 21504, NewYork</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Official Work Time
              </h3>
              <p className="text-gray-600 text-sm">
                7:00am - 9:00pm <span className="text-gray-500">(Mon - Fri)</span>
              </p>
              <p className="text-gray-600 text-sm">
                Sat, Sun & <span className="text-red-500 font-medium">Holiday Closed</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
