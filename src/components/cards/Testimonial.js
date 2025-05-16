import React from 'react';

function Testimonial({ quote, author, role, type, pullQuote }) {
  return (
    <div className={`${type === "school" ? "bg-blue-50" : "bg-green-50"} p-5 rounded-xl`}>
      {pullQuote && (
        <div className="text-center mb-3">
          <span className="text-lg font-medium text-blue-700">⭐️ "{pullQuote}"</span>
        </div>
      )}
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full ${type === "school" ? "bg-blue-200 text-blue-700" : "bg-green-200 text-green-700"} flex items-center justify-center font-bold mr-3`}>
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-sm">{author}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
