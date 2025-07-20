import React from 'react';
import { Eye } from 'lucide-react';

export default function Gallery2() {
  const posts = [
    { id: 1, featured: true },
    { id: 2, featured: false },
    { id: 3, featured: false },
    { id: 4, featured: false },
    { id: 5, featured: false },
    { id: 6, featured: false }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block bg-orange-600 text-white px-4 py-1 text-sm font-medium rounded mb-4">
          FOOD GALLERY
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          FOOD GALLERY POSTS
        </h1>
        <div className="flex justify-center items-center space-x-2 mb-8">
          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`aspect-square rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer ${
              post.featured
                ? 'bg-orange-600'
                : 'bg-gray-300'
            }`}
          >
            {post.featured ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="bg-white rounded-lg p-3 shadow-md">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gray-300 hover:bg-gray-400 transition-colors">
                {/* Placeholder for food images */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}