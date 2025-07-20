import React from "react";
import { Link } from "react-router-dom";

// Sample image imports or URLs (replace with your own images if needed)
import blog1 from "../src/assets/images/joshua-forbes-g4gJfeiVd7E-unsplash.jpg";
import blog2 from "../src/assets/images/ilse-orsel-x9sxUDiyuEs-unsplash.jpg";
import blog3 from "../src/assets/images/nrd-D6Tu_L3chLE-unsplash.jpg";
 
const blogItems = [
  {
    id: 1,
    title: "How Restaurants Are Adapting to Changing Dietary Trends",
    category: "Business",
    author: "Smith",
    image: blog1,
    description: "",
  },
  {
    id: 2,
    title: "Craftsmanship of Artisanal Foods in Restaurants",
    category: "Business",
    author: "Smith",
    image: blog2,
    description:
      "Present tempor mollis aliquet rhoncus vestibulum ridiculus vivamus, donec vehicula interdum congue scelerisque...",
  },
  {
    id: 3,
    title: "How Visual Appeal Enhances the Dining Experience",
    category: "Business",
    author: "Smith",
    image: blog3,
    description: "",
  },
];

const Dinner10 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      {/* Section Title */}
      <p className="bg-orange-600 text-white text-sm px-3 py-1 font-semibold w-fit mx-auto rounded">
        MAKE RESERVATION
      </p>
      <h2 className="text-3xl font-bold mt-2 text-gray-900 uppercase">
        Latest News Insights
      </h2>
      <div className="text-red-500 mt-2 text-xl">••••</div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {blogItems.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="text-left p-4 space-y-3">
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>👤 by {item.author}</span>
                <span>📂 {item.category}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-sm text-black leading-snug">
                {item.title}
              </h3>

              {/* Description (if available) */}
              {item.description && (
                <p className="text-xs text-gray-600">{item.description}</p>
              )}

              {/* Learn More */}
              <Link
                to="/Blog"
                className="text-red-600 text-xs font-bold inline-block mt-2 hover:underline"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinner10;
