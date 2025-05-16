import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-purple-50 py-12 sm:py-16 md:py-20 px-4 text-center relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-20 w-40 h-40 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute right-40 bottom-20 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute left-80 top-20 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1.5 rounded-full inline-block text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
          {t.badge}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
          {t.title}
        </h1>
        <p className="text-base sm:text-lg text-indigo-900 font-medium mb-2">
          {t.subtitle}
        </p>
        <p className="text-base sm:text-xl mb-6 max-w-2xl mx-auto text-gray-700">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-2 max-w-md mx-auto">
          <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-base sm:text-lg font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            {t.cta}
          </a>
          <a href="#testimonials" className="bg-white border border-indigo-300 text-indigo-700 text-base sm:text-lg font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-indigo-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            {t.ctaSecondary}
          </a>
        </div>
        <div className="mt-4 sm:mt-6 space-y-1 px-3">
          <p className="text-xs sm:text-sm text-gray-500">{t.trust1}</p>
          <p className="text-xs sm:text-sm text-indigo-800">{t.trust2}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
