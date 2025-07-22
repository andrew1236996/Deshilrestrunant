import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const categories = ["All Food", "Breakfast", "Lunch", "Dinner"];

// Sample food data with searchable content
const fallbackProducts = [
  { 
    id: 1, 
    name: "Braised Short Ribs", 
    price: "$15.00", 
    rating: 5, 
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=300&fit=crop", 
    category: "Dinner",
    description: "Tender beef ribs slow-cooked in rich sauce"
  },
  { 
    id: 2, 
    name: "Roasted Vegetable Platter", 
    price: "$12.00", 
    rating: 4, 
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop", 
    category: "Lunch",
    description: "Fresh seasonal vegetables roasted to perfection"
  },
  { 
    id: 3, 
    name: "Classic Caesar Salad", 
    price: "$10.00", 
    rating: 5, 
    image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?w=300&h=300&fit=crop", 
    category: "Lunch",
    description: "Crisp romaine lettuce with parmesan and croutons"
  },
  { 
    id: 4, 
    name: "Szechuan Beef Stir-Fry", 
    price: "$16.00", 
    rating: 4, 
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=300&fit=crop", 
    category: "Dinner",
    description: "Spicy beef with vegetables in authentic Szechuan sauce"
  },
  { 
    id: 5, 
    name: "Vegan Buddha Bowl", 
    price: "$14.00", 
    rating: 5, 
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop", 
    category: "Lunch",
    description: "Nutritious bowl with quinoa, chickpeas, and fresh vegetables"
  },
  { 
    id: 6, 
    name: "Chicken Alfredo Pasta", 
    price: "$13.00", 
    rating: 5, 
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=300&fit=crop", 
    category: "Dinner",
    description: "Creamy pasta with grilled chicken and parmesan"
  },
  { 
    id: 7, 
    name: "Pancakes with Berries", 
    price: "$9.00", 
    rating: 5, 
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=300&fit=crop", 
    category: "Breakfast",
    description: "Fluffy pancakes topped with fresh mixed berries"
  },
  { 
    id: 8, 
    name: "Eggs Benedict", 
    price: "$11.00", 
    rating: 4, 
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=300&fit=crop", 
    category: "Breakfast",
    description: "Poached eggs on English muffin with hollandaise sauce"
  },
  { 
    id: 9, 
    name: "Avocado Toast", 
    price: "$8.00", 
    rating: 4, 
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=300&fit=crop", 
    category: "Breakfast",
    description: "Smashed avocado on artisanal sourdough bread"
  },
  { 
    id: 10, 
    name: "Grilled Salmon", 
    price: "$18.00", 
    rating: 5, 
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=300&fit=crop", 
    category: "Dinner",
    description: "Fresh Atlantic salmon with lemon and herbs"
  }
];

// Enhanced filtering function
const filterProducts = (products, category, searchTerm) => {
  let filtered = products;

  // Filter by category
  if (category !== "All Food") {
    filtered = filtered.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by search term
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase().trim();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  }

  return filtered;
};

const Section4 = () => {
  const [activeCategory, setActiveCategory] = useState("All Food");
  const [cart, setCart] = useState([]);
  const [allProducts] = useState(fallbackProducts);
  const [filteredProducts, setFilteredProducts] = useState(fallbackProducts);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms delay for better responsiveness

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Filter products when search term or category changes
  useEffect(() => {
    setLoading(true);
    
    // Simulate API delay for demonstration
    const timer = setTimeout(() => {
      const filtered = filterProducts(allProducts, activeCategory, debouncedSearchTerm);
      setFilteredProducts(filtered);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [allProducts, activeCategory, debouncedSearchTerm]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const getTotalCartValue = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Section Title */}
      <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <p className="bg-orange-600 inline-block text-white px-3 py-1 text-sm font-semibold rounded">
            FOOD MENU
          </p>
          <h2 className="text-3xl font-bold mt-2">OUR DELICIOUS FOODS</h2>
        </div>

        <div className="flex flex-col space-y-4 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, description, or category..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="px-4 py-2 pl-4 pr-10 border border-gray-300 rounded-lg w-80 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <AiOutlineClose size={16} />
                </button>
              )}
              {loading && (
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-600"></div>
                </div>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center lg:justify-end space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all rounded ${
                  activeCategory === cat
                    ? "bg-orange-600 text-white"
                    : "border border-gray-300 text-gray-600 hover:border-orange-600 hover:text-orange-600"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results Info */}
      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          {debouncedSearchTerm ? (
            <span>
              Found {filteredProducts.length} results for "{debouncedSearchTerm}"
              {activeCategory !== "All Food" && ` in ${activeCategory}`}
            </span>
          ) : (
            <span>
              Showing {filteredProducts.length} {activeCategory === "All Food" ? "items" : activeCategory.toLowerCase() + " items"}
            </span>
          )}
        </div>
        {cart.length > 0 && (
          <div className="text-sm text-green-600 font-semibold">
            Cart Total: ${getTotalCartValue()}
          </div>
        )}
      </div>

      {/* Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Cart List */}
        <div className="lg:col-span-1 bg-slate-50 p-4 rounded-lg h-fit">
          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop" 
            alt="Featured food" 
            className="w-full h-32 object-cover rounded mb-4" 
          />
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            🛒 Your Cart ({cart.length})
          </h3>
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">No items added yet.</p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {cart.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start border-b border-gray-200 pb-3 last:border-b-0"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-xs">{item.price}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(idx)}
                    className="text-red-500 hover:text-red-700 ml-2 p-1"
                  >
                    <AiOutlineClose size={14} />
                  </button>
                </div>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <div className="font-bold text-orange-600">
                  Total: ${getTotalCartValue()}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Grid */}
        <div className="lg:col-span-3">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Searching menu items...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                {debouncedSearchTerm 
                  ? `No items found matching "${debouncedSearchTerm}"` 
                  : `No ${activeCategory.toLowerCase()} items available`}
              </p>
              {(debouncedSearchTerm || activeCategory !== "All Food") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All Food");
                  }}
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  View all items
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleAddToCart(product)}
                  className="cursor-pointer bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md hover:border-orange-300 transition-all duration-200"
                >
                  <div className="w-full h-48 overflow-hidden rounded mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="text-xs text-orange-600 font-medium mb-1">
                    {product.category.toUpperCase()}
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-800">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-orange-400 text-sm">
                      {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
                    </div>
                    <p className="text-orange-600 font-bold text-lg">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section4;