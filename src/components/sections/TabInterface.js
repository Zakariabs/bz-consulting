import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import TarievenTable from '../layout/TarievenTable';
import { schoolServices, businessServices } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function TabInterface() {
  const [activeTab, setActiveTab] = React.useState("schools");
  const { language } = useLanguage();
  const t = translations[language].services;
  
  return (
    <div>
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="inline-flex rounded-lg border border-indigo-100 bg-white/80 backdrop-blur-sm p-1 shadow-md w-full max-w-sm">
          <button
            className={`w-1/2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md ${
              activeTab === "schools"
                ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-sm"
                : "text-gray-500 hover:text-indigo-600"
            } transition-colors`}
            onClick={() => setActiveTab("schools")}
          >
            <span className="mr-1 sm:mr-2">🏫</span> {t.forSchools}
          </button>
          <button
            className={`w-1/2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md ${
              activeTab === "business"
                ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-sm"
                : "text-gray-500 hover:text-purple-600"
            } transition-colors`}
            onClick={() => setActiveTab("business")}
          >
            <span className="mr-1 sm:mr-2">🏢</span> {t.forBusinesses}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {activeTab === "schools"
          ? schoolServices.map((s) => <ServiceCard key={s.title} {...s} colorTheme="indigo" />)
          : businessServices.map((s) => <ServiceCard key={s.title} {...s} colorTheme="purple" />)
        }
      </div>
      
      <div className="mt-8 sm:mt-10 md:mt-12">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          {activeTab === "schools" 
            ? t.pricingSchools
            : t.pricingBusiness}
        </h3>
        <TarievenTable forSchools={activeTab === "schools"} />
      </div>
    </div>
  );
}

export default TabInterface;
