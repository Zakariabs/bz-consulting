import React from 'react';

function ExtraCard({ title, description, benefits }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full border border-gray-100">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {benefits && (
        <ul className="text-xs text-gray-600 mt-2 space-y-1 pl-4 list-disc">
          {benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExtraCard;
