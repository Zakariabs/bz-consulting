import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function ServiceCard({ icon, title_en, title_nl, duration_en, duration_nl, target_en, target_nl, results, price, colorTheme = "indigo" }) {
  const { language } = useLanguage();
  const t = translations[language].services;

  // Get the correct language version of the content
  const title = language === 'en' ? title_en : title_nl;
  const duration = language === 'en' ? duration_en : duration_nl;
  const target = language === 'en' ? target_en : target_nl;
  const resultsList = results[language] || results.en; // Fallback to English if translation is missing

  // Define color theme styles
  const themeStyles = {
    indigo: {
      badge: "bg-indigo-100 text-indigo-800",
      results: "bg-indigo-50 text-indigo-800",
      resultsList: "text-indigo-700",
      price: "text-indigo-700",
      button: "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600",
      hoverEffect: "hover:border-indigo-200"
    },
    purple: {
      badge: "bg-purple-100 text-purple-800",
      results: "bg-purple-50 text-purple-800",
      resultsList: "text-purple-700",
      price: "text-purple-700",
      button: "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600",
      hoverEffect: "hover:border-purple-200"
    }
  };

  const theme = themeStyles[colorTheme];

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 flex flex-col h-full border border-gray-100 ${theme.hoverEffect} transform hover:-translate-y-1`}>
      <div className="flex justify-between items-start mb-2">
        <div className="text-3xl sm:text-4xl mb-1">{icon}</div>
        <div className={`${theme.badge} text-xs font-medium px-2 py-1 rounded-full text-right whitespace-nowrap`}>
          {t.startingRate}
        </div>
      </div>
      <h3 className="text-base sm:text-lg font-semibold mb-1 text-gray-800">{title}</h3>
      <div className="text-gray-500 text-xs mb-3">{duration}</div>
      <p className="text-gray-600 text-xs sm:text-sm mb-4">{target}</p>
      <div className={`${theme.results} p-3 rounded-lg mb-4`}>
        <p className="text-xs sm:text-sm font-medium">{t.resultsIntro}</p>
        <ul className={`text-xs ${theme.resultsList} mt-1 space-y-1 pl-4 list-disc`}>
          {resultsList.map((result, i) => (
            <li key={i}>{result}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mt-auto w-full">
        <div className={`${theme.price} font-bold mb-3`}>{price}</div>
        <button className={`${theme.button} text-white text-sm font-medium py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 w-full`}>
          {t.moreInfo}
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
