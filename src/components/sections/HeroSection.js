import React from 'react';

function HeroSection() {
  return (
    <section className="bg-blue-50 py-20 text-center">
      <div className="bg-blue-600 text-white px-3 py-1 rounded-full inline-block text-sm font-medium mb-6">
        2025 - Betaalbare AI begeleiding voor scholen & KMO's
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Ontdek hoe AI jouw organisatie slimmer maakt
      </h1>
      <p className="text-xl mb-6 max-w-2xl mx-auto">
        Praktijkgerichte workshops, advies en implementatiehulp – speciaal voor scholen en KMO's in België.
      </p>
      <button className="bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition-colors">
        Plan een gratis kennismaking met Zakaria
      </button>
      <p className="text-sm text-gray-500 mt-2">Persoonlijk advies binnen 24 uur • Prijzen 20-30% onder marktgemiddelde</p>
    </section>
  );
}

export default HeroSection;
