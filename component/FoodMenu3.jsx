import React from "react";
import { Link } from "react-router-dom";

const contentBlocks = [
  {
    type: "image",
    date: "09",
    month: "DEC",
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
  },
];

const FoodMenu3 = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2  max-w-5xl mx-auto p-4">
        {contentBlocks.map((item, index) => {
          if (item.type === "image") {
            return (
              <div
                key={index}
                className="bg-gray-200 h-48 sm:h-60 md:h-48 flex items-start justify-start"
              >
                <div className="bg-red-600 text-white text-center px-3 py-2 m-4">
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
                <Link to="/Shop" className="border border-red-600 text-red-600 px-4 py-2 text-xs uppercase font-semibold hover:bg-red-600 hover:text-white transition w-fit">
                  Read More →
                </Link>
              </div>
            );
          }

          return null;
        })}
      </div>
    </>
  );
};

export default FoodMenu3;
