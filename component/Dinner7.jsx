import React, { useState, useEffect } from 'react';

// Keep your original menu data as fallback
const defaultMenuData = {
  BREAKFAST: [
    {
      name: "Beef Bourguignon",
      image: "../src/assets/images/keesha-s-kitchen-PqG32DYCTM8-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Spicy Tuna Tartare",
      image: "../src/assets/images/joshua-forbes-g4gJfeiVd7E-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Margherita Pizza",
      image: "../src/assets/images/emmanuel-ben-paul-grFZoxvKSvE-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Braised Short Ribs",
      image: "../src/assets/images/hamza-sakrani-ieQSQhN7KP0-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Vegan Buddha Bowl",
      image: "../src/assets/images/magic-mary-nEOzmjguwO0-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Chicken Alfredo Pasta",
      image: "../src/assets/images/bralro-sPzG9heRMrw-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Classic Caesar Salad",
      image: "../src/assets/images/jonathan-borba-c7aDFxMKv4o-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Roasted Vegetable Platter",
      image: "../src/assets/images/nrd-D6Tu_L3chLE-unsplash.jpg",
      price: "$15.00"
    }
  ],
  LUNCH: [
    {
      name: "Grilled Chicken Sandwich",
      image: "../src/assets/images/emmanuel-ben-paul-grFZoxvKSvE-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Pesto Pasta",
      image: "../src/assets/images/s-laiba-ali-6fm5j9x20W0-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Turkey Avocado Wrap",
      image: "../src/assets/images/jonathan-borba-c7aDFxMKv4o-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Miso Ramen",
      image: "../src/assets/images/jason-leung-z4vYlSyJk9M-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Tuna Nicoise",
      image: "../src/assets/images/keesha-s-kitchen-PqG32DYCTM8-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Eggplant Parmesan",
      image: "../src/assets/images/jesse-chan-l_LzQHnuZaE-unsplash.jpg",
      price: "$15.00"
    }
  ],
  DINNER: [
    {
      name: "Lamb Chops",
      image: "../src/assets/images/magic-mary-nEOzmjguwO0-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Stuffed Peppers",
      image: "../src/assets/images/zaraq-iqbal-Q0a7fbRA88k-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Salmon Teriyaki",
      image: "../src/assets/images/engin-akyurt-v6z8FoqPbJ8-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Fettuccine Carbonara",
      image: "../src/assets/images/ibuki-tsubo-kNxQv2d2pGI-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Shrimp Scampi",
      image: "../src/assets/images/zaraq-iqbal-Q0a7fbRA88k-unsplash.jpg",
      price: "$15.00"
    },
    {
      name: "Butternut Squash Risotto",
      image: "../src/assets/images/jesse-chan-l_LzQHnuZaE-unsplash.jpg",
      price: "$15.00"
    }
  ]
};

const Dinner7 = () => {
  const [activeTab, setActiveTab] = useState("BREAKFAST");
  const [menuData, setMenuData] = useState(defaultMenuData); // Start with default data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch menu items from your database API
  const fetchMenuFromDatabase = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Your backend API endpoint
      const response = await fetch('http://localhost:5000/api/food/menu', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if needed
          // 'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success || !data.items) {
        throw new Error('Invalid API response format');
      }
      
      // Transform your API data to match the frontend structure
      const apiMenuData = {
        BREAKFAST: [],
        LUNCH: [],
        DINNER: []
      };
      
      // Group items by category from your database
      data.items.forEach(item => {
        const category = item.category.toUpperCase(); // Convert to match your tabs
        
        if (apiMenuData[category]) {
          apiMenuData[category].push({
            name: item.title,
            image: item.image, // This should be your Cloudinary URL from the database
            price: `$${item.price.toFixed(2)}`,
            description: item.description,
            id: item._id,
            available: item.available
          });
        }
      });
      
      // If any category is empty, use default data as fallback
      Object.keys(apiMenuData).forEach(category => {
        if (apiMenuData[category].length === 0) {
          apiMenuData[category] = defaultMenuData[category];
        }
      });
      
      setMenuData(apiMenuData);
      
    } catch (err) {
      console.error('Database API error:', err);
      setError(`Failed to load menu from database: ${err.message}`);
      // Keep using defaultMenuData - no food items disappear!
      setMenuData(defaultMenuData);
    } finally {
      setLoading(false);
    }
  };

  // Load menu from database when component mounts
  useEffect(() => {
    fetchMenuFromDatabase();
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* API Status */}
      {loading && (
        <div className="text-center mb-4 text-blue-600">
          Loading menu from database...
        </div>
      )}
      {error && (
        <div className="text-center mb-4 text-red-600 bg-red-50 p-2 rounded">
          {error} (Using fallback menu)
        </div>
      )}

      {/* Tabs */}
      <div className="flex justify-center mb-8 border-b border-gray-200">
        {Object.keys(menuData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-semibold uppercase tracking-widest ${
              activeTab === tab ? "border-b-2 border-red-600 text-black" : "text-gray-500"
            } transition-all duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Refresh Button */}
      <div className="text-center mb-6">
        <button
          onClick={fetchMenuFromDatabase}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Refresh Menu'}
        </button>
      </div>

      {/* Grid Menu */}
      <div className="grid bg-white grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {menuData[activeTab].map((item, index) => (
          <div key={index} className="bg-amber-100 text-center p-4">
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-4"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.src = defaultMenuData[activeTab][index]?.image || '';
              }}
            />

            {/* Stars */}
            <div className="flex justify-center text-red-600 text-sm mb-2">
              {Array(5)
                .fill("★")
                .map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>

            {/* Price */}
            <p className="text-red-600 text-sm mt-1">{item.price || '$15.00'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinner7;