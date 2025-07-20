import React, { useState } from 'react';

const Shop2 = () => {
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState('description');

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-900">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Placeholder */}
        <div className="w-full md:w-1/2 bg-gray-100 h-96 flex items-center justify-center relative">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">SALE</span>
          <span className="text-gray-400 text-xl">Image</span>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Grilled Lemon Herb Chicken</h2>

          {/* Rating & Reviews */}
          <div className="flex items-center text-sm space-x-2">
            <div className="text-yellow-500">★★★★★</div>
            <p className="text-gray-600">(1 customer review)</p>
          </div>

          {/* Price */}
          <div className="text-xl font-semibold text-black">$260.00 - $360.00</div>

          {/* Short Description */}
          <p className="text-sm text-gray-500">
            Eget taciti odio cum habitant egestas convallis turpis phasellus, ante parturient donec duis primis nam
            faucibus augue malesuada venenatis.
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <button onClick={() => handleQuantityChange(-1)} className="px-3 py-1 text-lg">-</button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-l border-r border-gray-300"
              />
              <button onClick={() => handleQuantityChange(1)} className="px-3 py-1 text-lg">+</button>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 font-semibold rounded-md">
              ADD TO CART
            </button>
          </div>

          {/* Meta Info */}
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>SKU:</strong> 17</p>
            <p><strong>Categories:</strong> Light Bulb, Table</p>
            <p><strong>Tags:</strong> Illuminate, Textured</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12">
        <div className="flex border-b border-gray-300 space-x-6 text-sm">
          {['description', 'additional', 'review'].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`py-2 uppercase tracking-wide font-medium ${
                tab === item ? 'border-b-2 border-red-500 text-black' : 'text-gray-500'
              }`}
            >
              {item === 'description'
                ? 'Description'
                : item === 'additional'
                ? 'Additional Information'
                : 'Review (01)'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 text-sm text-gray-700 leading-relaxed">
          {tab === 'description' && (
            <>
              <p>
                Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. Compellingly whiteboard client-centric schemas. 
                Distinctively develop future-proof outsourcing without multimedia based portals.
              </p>
              <p className="mt-4">
                Progressively coordinate generation architectures for collaborative solutions. Professionally restore backward-compatible quality vectors before customer-directed metrics. 
              </p>
              <p className="mt-4">
                Seamlessly target fully tested infrastructures whereas just in time process improvements.
              </p>
            </>
          )}
          {tab === 'additional' && <p>Additional information goes here (e.g., dimensions, weight, ingredients).</p>}
          {tab === 'review' && <p>Customer Review: ⭐⭐⭐⭐⭐ — “Delicious and perfectly cooked!”</p>}
        </div>
      </div>
    </div>
  );
};

export default Shop2;
