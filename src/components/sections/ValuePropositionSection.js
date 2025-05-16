import React from 'react';

function ValuePropositionSection() {
  return (
    <section className="py-12 bg-blue-600 text-white rounded-xl my-16">
      <div className="text-center p-8">
        <h2 className="text-2xl font-semibold mb-4">Waarom kiezen voor Zakaria?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
          <div>
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-lg font-medium mb-2">Pragmatische Aanpak</h3>
            <p className="text-sm text-blue-100">Resultaatgerichte begeleiding zonder complexiteit. Focus op wat écht werkt voor jouw organisatie.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">💰</div>
            <h3 className="text-lg font-medium mb-2">Betaalbare Tarieven</h3>
            <p className="text-sm text-blue-100">Bewust 20-30% onder marktprijs, zonder in te boeten aan kwaliteit of persoonlijke begeleiding.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">👥</div>
            <h3 className="text-lg font-medium mb-2">Persoonlijke Aandacht</h3>
            <p className="text-sm text-blue-100">Directe communicatie, flexibiliteit en volledige focus op jouw specifieke behoeften en doelen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuePropositionSection;
