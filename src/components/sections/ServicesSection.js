import React from 'react';
import TabInterface from './TabInterface';

function ServicesSection() {
  return (
    <section id="diensten" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-3">Mijn Diensten</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Praktische AI-ondersteuning zonder ingewikkeld jargon. Ontdek wat AI concreet voor jouw organisatie kan betekenen.</p>
      </div>
      <TabInterface />
    </section>
  );
}

export default ServicesSection;
