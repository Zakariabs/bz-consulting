import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function ExtraCard({ title_en, title_nl, description_en, description_nl, benefits }) {
  const { language } = useLanguage();
  const benefitsLabel = language === 'en' ? 'Benefits:' : 'Voordelen:';
  
  // Get the correct language version of the content
  const title = language === 'en' ? title_en : title_nl;
  const description = language === 'en' ? description_en : description_nl;
  const benefitsList = benefits[language] || benefits.en; // Fallback to English if translation is missing

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 flex flex-col h-full border border-gray-100 hover:border-indigo-100">
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mb-3">
        +
      </div>
      <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm mb-4">{description}</p>
      {benefitsList && (
        <div className="mt-auto pt-2">
          <p className="text-xs font-medium text-indigo-700 mb-2">{benefitsLabel}</p>
          <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
            {benefitsList.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExtraCard;
