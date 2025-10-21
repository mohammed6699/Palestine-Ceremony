import React from "react";

const MessagesSkeleton = () => {
  // Create an array of placeholders (you can increase count)
  const placeholders = Array(6).fill(0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-8 animate-pulse">
      {placeholders.map((_, index) => (
        <div
          key={index}
          className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center mb-4">
            {/* Avatar skeleton */}
            <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>

            {/* Name and category skeleton */}
            <div className="flex-1">
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-800 rounded w-1/2"></div>
            </div>
          </div>

          {/* Message body skeleton */}
          <div className="space-y-2">
            <div className="h-3 bg-gray-700 rounded w-full"></div>
            <div className="h-3 bg-gray-700 rounded w-5/6"></div>
            <div className="h-3 bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesSkeleton;
