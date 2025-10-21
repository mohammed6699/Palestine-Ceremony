import React from "react";
import { Link } from "react-router-dom";
import timelineData from "../data/timelineData";

// Helper to select a few key events for the summary
const summaryData = timelineData.slice(0, 4);

function TimelineSummary() {
  return (
    <div className="relative py-16 sm:py-24 bg-gray-900/50">
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-black to-red-700 opacity-50"></div>

      {/* Optional flag overlay pattern */}
      <div className="absolute inset-0 bg-[url('/images/palestine-flag-overlay.png')] bg-cover bg-center opacity-10"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            A Brief History
          </h2>
          <p className="text-lg text-gray-400 mt-2">
            Key moments in the Palestinian struggle for freedom.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-green-700 hidden sm:block"></div>

          {summaryData.slice(0,4).map((item, index) => (
            <div
              key={index}
              className={`relative sm:flex mb-8 sm:mb-0 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="sm:w-1/2 p-4">
                <div
                  className={`bg-gray-800 border-2 border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 hover:border-green-600 transition-all duration-300`}
                >
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    {item.year}
                  </h3>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Circle on the line */}
              <div className="hidden sm:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-800"></div>

              {/* Spacer */}
              <div className="sm:w-1/2 p-4"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/story"
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            View Full Story
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TimelineSummary;
