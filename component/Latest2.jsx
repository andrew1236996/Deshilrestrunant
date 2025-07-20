import React from 'react';
import { Calendar, User, Eye, Heart, MessageCircle, ArrowRight } from 'lucide-react';

const Latest2 = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'LIFESTYLE',
      title: 'ICONIC ESTABLISHMENTS ARE REINVENTING',
      excerpt: 'Sharing stories about iconic restaurants, cafes, bars, and hotels around the world, documenting the reinvention.',
      date: '18 JUL 2023',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
      category: 'LIFESTYLE',
      title: 'EXPLORING THE WORLD OF FOOD AND WINE',
      excerpt: 'Exploring the fascinating world of food and wine culture, from traditional recipes to modern culinary innovations.',
      date: '15 JUL 2023',
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      category: 'LIFESTYLE',
      title: 'WHAT IT TAKES TO ACHIEVE EXCELLENCE',
      excerpt: 'Understanding the dedication and passion required to achieve excellence in the culinary arts.',
      date: '12 JUL 2023',
      image: '/api/placeholder/600/300'
    }
  ];

  const recentPosts = [
    {
      title: 'The evolution of restaurant design and architecture',
      date: '20 JUL 2023'
    },
    {
      title: 'Sustainable fine dining in modern restaurants',
      date: '19 JUL 2023'
    },
    {
      title: 'Famous chef biographies and culinary journeys',
      date: '18 JUL 2023'
    }
  ];

  const categories = [
    'Food and Cuisine',
    'Travel Stories',
    'Lifestyle',
    'Food and Wine',
    'Events and Entertainment'
  ];

  const popularTags = [
    'RESTAURANT', 'FOOD', 'WINE', 'TRAVEL', 'LIFESTYLE', 'CULTURE'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                FOODBLOG
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <input
                type="text"
                placeholder="SEARCH"
                className="border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post,) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image Placeholder</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>Author</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye size={16} />
                        <span>234</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart size={16} />
                        <span>12</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={16} />
                        <span>5</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center space-x-1">
                      <span>READ MORE</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                RECENT POSTS
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 hover:text-red-500 cursor-pointer line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                CATEGORIES
              </h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-sm text-gray-700 hover:text-red-500 cursor-pointer">
                      {category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {Math.floor(Math.random() * 20) + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                GALLERY
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, index) => (
                  <div key={index} className="aspect-square bg-gray-200 rounded hover:opacity-80 cursor-pointer transition-opacity">
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                POPULAR TAGS
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-red-500 hover:text-white cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest2;