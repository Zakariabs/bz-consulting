import React from 'react';
import ExtraCard from '../cards/ExtraCard';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function ExtrasSection({ extras }) {
  const { language } = useLanguage();
  const t = translations[language].extras;
  
  return (
    <section id="extras" className="py-10 sm:py-12 md:py-16">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">{t.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">{t.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto px-4 sm:px-6">
        {extras.map((e) => (
          <ExtraCard key={e.title} {...e} />
        ))}
      </div>
      <div className="mt-6 sm:mt-8 text-center">
        <a href="#contact" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors text-sm font-medium bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 px-4 py-2 rounded-full">
          <span>{language === 'en' ? 'Inquire about combination options' : 'Informeer naar combinatiemogelijkheden'}</span>
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default ExtrasSection;
