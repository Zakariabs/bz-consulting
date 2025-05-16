import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import TarievenTable from '../layout/TarievenTable';
import { schoolServices, businessServices } from '../../data/services';

function TabInterface() {
  const [activeTab, setActiveTab] = React.useState("schools");
  
  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "schools"
                ? "bg-blue-600 text-white"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("schools")}
          >
            <span className="mr-2">🏫</span> Voor Scholen
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "business"
                ? "bg-green-600 text-white"
                : "text-gray-500 hover:text-green-600"
            }`}
            onClick={() => setActiveTab("business")}
          >
            <span className="mr-2">🏢</span> Voor Bedrijven
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeTab === "schools"
          ? schoolServices.map((s) => <ServiceCard key={s.title} {...s} />)
          : businessServices.map((s) => <ServiceCard key={s.title} {...s} />)
        }
      </div>
      
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6 text-center">
          {activeTab === "schools" 
            ? "Tarieven voor Scholen en Onderwijsinstellingen" 
            : "Tarieven voor Bedrijven en KMO's"}
        </h3>
        <TarievenTable forSchools={activeTab === "schools"} />
      </div>
    </div>
  );
}

export default TabInterface;
