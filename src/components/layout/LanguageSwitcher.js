import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].language;

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center justify-center bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full w-9 h-9 p-1 transition-colors duration-300"
      title={language === 'en' ? t.switchToNl : t.switchToEn}
      aria-label={language === 'en' ? t.switchToNl : t.switchToEn}
    >
      <span className="text-xs font-medium bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
        {language === 'en' ? t.nl : t.en}
      </span>
    </button>
  );
}

export default LanguageSwitcher;
