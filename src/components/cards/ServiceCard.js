import React from 'react';

function ServiceCard({ icon, title, duration, price, target, results }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col h-full border border-gray-100">
      <div className="flex justify-between items-start mb-2">
        <div className="text-4xl mb-1">{icon}</div>
        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
          Starterstarief 2025
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <div className="text-gray-500 text-xs mb-3">{duration}</div>
      <p className="text-gray-600 text-sm mb-4">{target}</p>
      <div className="bg-blue-50 p-3 rounded-lg mb-4">
        <p className="text-sm text-blue-800 font-medium">Na afloop kun je:</p>
        <ul className="text-xs text-blue-700 mt-1 space-y-1 pl-4 list-disc">
          {results.map((result, i) => (
            <li key={i}>{result}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mt-auto w-full">
        <div className="text-blue-700 font-bold mb-3">{price}</div>
        <button className="bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition-colors w-full">
          Meer info
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
