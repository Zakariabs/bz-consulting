import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function ValuePropositionSection() {
  const { language } = useLanguage();
  const t = translations[language].valueProposition;

  return (
    <section className="py-10 sm:py-12 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-xl my-8 sm:my-12 md:my-16 shadow-xl">
      <div className="text-center p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">{t.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mt-6 sm:mt-8">
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg shadow-md border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-base sm:text-lg font-medium mb-2">{t.resultTitle}</h3>
            <p className="text-xs sm:text-sm text-purple-100">{t.resultDesc}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg shadow-md border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-base sm:text-lg font-medium mb-2">{t.expertiseTitle}</h3>
            <p className="text-xs sm:text-sm text-purple-100">{t.expertiseDesc}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg shadow-md border border-white/20 hover:transform hover:scale-105 transition-all duration-300 sm:col-span-2 md:col-span-1 sm:max-w-xs sm:mx-auto md:max-w-none">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="text-base sm:text-lg font-medium mb-2">{t.attentionTitle}</h3>
            <p className="text-xs sm:text-sm text-purple-100">{t.attentionDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuePropositionSection;
