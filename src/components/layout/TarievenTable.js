import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function TarievenTable({ forSchools }) {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  return (
    <div className="overflow-x-auto py-2">
      <div className="text-center mb-4 block sm:hidden text-sm text-indigo-600">
        <span>← {language === 'en' ? "Swipe horizontally to see all info" : "Veeg horizontaal om alle info te bekijken"} →</span>
      </div>
      <table className="table-auto mx-auto border-collapse w-full max-w-3xl text-sm">
        <thead>
          <tr className={forSchools ? "bg-indigo-100" : "bg-purple-100"}>
            <th className="border border-gray-200 px-3 py-2 text-left">{t.service}</th>
            <th className="border border-gray-200 px-3 py-2 text-center">{t.duration}</th>
            <th className="border border-gray-200 px-3 py-2 text-center">{t.investment}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-colors">
            <td className="border border-gray-200 px-3 py-2">
              <span className="font-medium text-indigo-800">{t.workshop}</span>
            </td>
            <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm">
              {t.workshopDuration.replace('{participants}', forSchools ? "20" : "15")}
            </td>
            <td className="border border-gray-200 px-2 py-2 text-center font-medium text-indigo-800">{forSchools ? "€395" : "€495"} <span className="block text-xs text-gray-500">{t.online}: {forSchools ? "€335" : "€420"}</span></td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-colors">
            <td className="border border-gray-200 px-3 py-2">
              <span className="font-medium text-indigo-800">{t.quickscan}</span>
            </td>
            <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm">{t.quickscanDuration}</td>
            <td className="border border-gray-200 px-2 py-2 text-center font-medium text-indigo-800">{forSchools ? "€450" : "€550"} <span className="block text-xs text-gray-500">{t.online}: {forSchools ? "€380" : "€470"}</span></td>
          </tr>
          <tr className="hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-colors">
            <td className="border border-gray-200 px-3 py-2">
              <span className="font-medium text-indigo-800">{t.implementation}</span>
            </td>
            <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm">{t.implementationDuration}</td>
            <td className="border border-gray-200 px-2 py-2 text-center font-medium text-indigo-800">{forSchools ? "€550" : "€650"} <span className="block text-xs text-gray-500">{t.online}: {forSchools ? "€470" : "€550"}</span></td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-colors">
            <td className="border border-gray-200 px-3 py-2">
              <span className="font-medium text-indigo-800">{t.inspiration}</span>
            </td>
            <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm">{t.inspirationDuration}</td>
            <td className="border border-gray-200 px-2 py-2 text-center font-medium text-indigo-800">{forSchools ? "€295" : "€350"} <span className="block text-xs text-gray-500">{t.online}: {forSchools ? "€250" : "€295"}</span></td>
          </tr>
          <tr className="hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-colors">
            <td className="border border-gray-200 px-3 py-2">
              <span className="font-medium text-indigo-800">{t.projects}</span>
            </td>
            <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm">{t.projectsDuration}</td>
            <td className="border border-gray-200 px-2 py-2 text-center font-medium text-indigo-800">{forSchools ? "€750" : "€950"} <span className="block text-xs text-gray-500">{t.online}: {forSchools ? "€640" : "€800"}</span></td>
          </tr>
        </tbody>
      </table>
      <div className="mt-3 text-xs text-gray-500 italic text-center px-2">
        {t.transparency}
      </div>
      <div className="mt-4 text-center">
        <a href="#contact" className="text-indigo-600 text-sm font-medium hover:text-indigo-800 inline-flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-colors px-4 py-2 rounded-full">
          <span>{t.cta}</span>
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      <div className="mt-2 text-xs text-center text-gray-600">
        {t.quality}
      </div>
    </div>
  );
}

export default TarievenTable;
