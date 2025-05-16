import React from 'react';
import TabInterface from './TabInterface';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="diensten" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-3">{t.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{t.description}</p>
      </div>
      <TabInterface />
    </section>
  );
}

export default ServicesSection;
