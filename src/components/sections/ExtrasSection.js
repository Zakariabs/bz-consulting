import React from 'react';
import ExtraCard from '../cards/ExtraCard';

function ExtrasSection({ extras }) {
  return (
    <section id="extras" className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-3">Extra's & Pakketten</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Combineer diensten voor meer impact en efficiëntie.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {extras.map((e) => (
          <ExtraCard key={e.title} {...e} />
        ))}
      </div>
    </section>
  );
}

export default ExtrasSection;
