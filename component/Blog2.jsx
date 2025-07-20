import React from 'react';
import { Calendar, User, Eye, Heart, MessageCircle, ArrowRight, Quote } from 'lucide-react';

const Blog2 = () => {
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
          {/* Main Article */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Featured Image */}
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Featured Image Placeholder</span>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded text-xs font-bold">
                    LIFESTYLE
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  THE WORLD OF FOOD AND WINE MATCHING
                </h1>

                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>18 JUL 2023</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>Author Name</span>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Food and wine matching is an art form of a dining experience, potentially enriching it extraordinarily. 
                    The interplay between food and wine creates a symphony of taste that can elevate both elements to 
                    new heights. Understanding the fundamentals of pairing can transform an ordinary meal into an 
                    extraordinary culinary journey.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The basic principle of food and wine pairing revolves around complementing and contrasting flavors. 
                    Sweet wines pair beautifully with spicy dishes, while acidic wines cut through rich, fatty foods. 
                    The weight of the wine should match the intensity of the dish - delicate wines with subtle flavors, 
                    bold wines with robust dishes.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Regional pairings often work exceptionally well, as foods and wines from the same area have evolved 
                    together over centuries. Think of Chianti with Tuscan cuisine, or Champagne with French pastries. 
                    These traditional combinations have stood the test of time for good reason.
                  </p>

                  {/* Quote Section */}
                  <div className="bg-gray-50 border-l-4 border-red-500 p-4 my-6">
                    <div className="flex items-start space-x-3">
                      <div className="bg-red-500 text-white rounded-full p-2 flex-shrink-0">
                        <Quote size={16} />
                      </div>
                      <div>
                        <blockquote className="text-lg font-medium text-gray-900 mb-2">
                          "We offer competitive pricing and deliver exceptional value for your 
                          investment our goal is to help you achieve food highest"
                        </blockquote>
                        <cite className="text-sm text-gray-600 font-medium">
                          - Master Sommelier
                        </cite>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Experimentation is key to discovering your personal preferences. Start with classic pairings and 
                    gradually explore more adventurous combinations. Keep notes of what works and what doesn't, 
                    as this will help you develop your palate and understanding of how different elements interact.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Remember that there are no absolute rules in food and wine pairing - if you enjoy a particular 
                    combination, then it's right for you. The most important aspect is to have fun and enjoy the 
                    journey of discovery.
                  </p>
                </div>

                {/* Related Images */}
                <div className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((index) => (
                      <div key={index} className="aspect-square bg-gray-200 rounded-lg hover:opacity-80 cursor-pointer transition-opacity">
                        <div className="h-full flex items-center justify-center text-gray-400">
                          Image {index}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye size={16} />
                      <span>1,234 views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart size={16} />
                      <span>89 likes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={16} />
                      <span>23 comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
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

export default Blog2;