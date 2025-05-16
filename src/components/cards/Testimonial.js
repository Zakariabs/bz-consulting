import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function Testimonial({ quote_en, quote_nl, author, role_en, role_nl, type, pullQuote_en, pullQuote_nl }) {
  const { language } = useLanguage();
  
  // Get the correct language version of the content
  const quote = language === 'en' ? quote_en : quote_nl;
  const role = language === 'en' ? role_en : role_nl;
  const pullQuote = language === 'en' ? pullQuote_en : pullQuote_nl;
  
  // Define background and text colors based on type
  const colors = {
    school: {
      bg: "bg-indigo-50",
      accent: "bg-indigo-200 text-indigo-700",
      pullQuote: "text-indigo-700"
    },
    business: {
      bg: "bg-purple-50",
      accent: "bg-purple-200 text-purple-700",
      pullQuote: "text-purple-700"
    }
  };

  // Default to school colors if type is not specified or invalid
  const colorTheme = colors[type] || colors.school;
  
  return (
    <div className={`${colorTheme.bg} p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-white`}>
      {pullQuote && (
        <div className="text-center mb-3">
          <span className={`text-base sm:text-lg font-medium ${colorTheme.pullQuote}`}>⭐️ "{pullQuote}"</span>
        </div>
      )}
      <p className="text-gray-700 italic mb-4 text-sm sm:text-base">"{quote}"</p>
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full ${colorTheme.accent} flex items-center justify-center font-bold mr-3 shadow-sm`}>
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-sm">{author}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
