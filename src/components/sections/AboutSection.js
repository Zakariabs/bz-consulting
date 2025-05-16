import React from 'react';

function AboutSection() {
  return (
    <section id="over-mij" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="bg-blue-100 w-64 h-64 rounded-full mx-auto overflow-hidden border-4 border-blue-200">
              {/* Placeholder voor je foto */}
              <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-6xl font-bold">Z</div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold mb-4">Hoi, ik ben Zakaria</h2>
            <p className="text-lg mb-4">
              Als junior AI-consultant help ik scholen, KMO's en non-profits om AI praktisch en betaalbaar in te zetten.
            </p>
            <p className="mb-4">
              Mijn missie: AI begrijpelijk, betaalbaar en praktisch maken voor elke organisatie. Met een frisse blik en persoonlijke aanpak help ik je om de eerste stappen te zetten in artificiële intelligentie.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 mt-6">
              <p className="italic text-blue-800">
                "Ik geloof dat AI pas waardevol is als het praktisch en betaalbaar is voor iedereen. Daarom help ik organisaties laagdrempelig op weg."
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Persoonlijke begeleiding</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Praktijkgericht</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Betaalbaar</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Geen technisch jargon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
