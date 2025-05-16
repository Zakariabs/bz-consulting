import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language].about;
  
  return (
    <section id="over-mij" className="py-12 md:py-16 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-50"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full mx-auto overflow-hidden border-4 border-white relative">
                <img 
                  src="/zb_portret.jpg" 
                  alt="Zakaria Basraoui" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
              {t.greeting}
            </h2>
            <p className="text-base md:text-lg mb-3 md:mb-4 text-gray-800">
              {t.intro}
            </p>
            <p className="mb-4 text-sm md:text-base text-gray-700">
              {t.mission}
            </p>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 md:p-4 rounded-lg border-l-4 border-gradient-to-r from-indigo-500 to-purple-500 mt-4 md:mt-6">
              <p className="italic text-indigo-800 text-sm md:text-base">
                "{t.quote}"
              </p>
            </div>
            <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
              <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-1 rounded-full text-xs md:text-sm">{t.tag1}</span>
              <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-1 rounded-full text-xs md:text-sm">{t.tag2}</span>
              <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-1 rounded-full text-xs md:text-sm">{t.tag3}</span>
              <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-1 rounded-full text-xs md:text-sm">{t.tag4}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
