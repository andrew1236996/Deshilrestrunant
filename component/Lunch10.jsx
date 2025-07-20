import React from "react";

const contentBlocks = [
  {
    type: "image",
    date: "09",
    month: "DEC",
    image: "../src/assets/images/ilse-orsel-x9sxUDiyuEs-unsplash.jpg",
  },
  {
    type: "text",
    title: "HOW RESTAURANTS FOSTER CONNECTIONS AND CREATE MEMORIES",
    author: "Markus Daniel",
    comments: 2,
  },
  {
    type: "text",
    title: "DISCOVERING AFFORDABLE GOURMET EXPERIENCES IN YOUR CITY",
    author: "Emily Carter",
    comments: 5,
  },
  {
    type: "image",
    date: "10",
    month: "DEC",
    image: "../src/assets/images/nrd-D6Tu_L3chLE-unsplash.jpg",
  },
];

const Lunch10 = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center pt-10 px-4 mt-10">
        <p className="bg-orange-600 font-semibold mx-auto w-fit px-3 py-1 text-sm sm:text-base text-white rounded">
          MAKE RESERVATION
        </p>
        <h2 className="font-bold text-2xl sm:text-4xl mt-2 text-gray-800">
          LATEST BLOG INSIGHT
        </h2>
        <div className="w-12 h-1 bg-orange-600 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto p-4 ">
        {contentBlocks.map((item, index) => {
          if (item.type === "image") {
            return (
              <div
                key={index}
                className="bg-gray-300 h-48 sm:h-60 md:h-48 flex items-start justify-start relative overflow-hidden rounded"
              >
                {/* The image */}
                <img
                  src={item.image}
                  alt={`Image for date ${item.date} ${item.month}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                {/* Date Badge */}
                <div className="relative z-10 bg-red-600 text-white text-center px-3 py-2 m-4 rounded">
                  <p className="text-xl font-bold leading-none">{item.date}</p>
                  <p className="text-xs uppercase">{item.month}</p>
                </div>
              </div>
            );
          }

          if (item.type === "text") {
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded p-5 flex flex-col justify-between"
              >
                {/* Author and Comment Info */}
                <div className="flex flex-wrap items-center text-xs text-gray-500 gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-red-600">💬</span>
                    <span>{item.comments} Comment</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-snug mb-4">
                  {item.title}
                </h3>

                {/* Button */}
                <button className="border border-red-600 text-red-600 px-4 py-2 text-xs uppercase font-semibold hover:bg-red-600 hover:text-white transition w-fit">
                  Read More →
                </button>
              </div>
            );
          }

          return null;
        })}
      </div>
    </>
  );
};

export default Lunch10;
