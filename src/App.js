import React from 'react';
import './App.css'; // Adding CSS import
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ExtrasSection from './components/sections/ExtrasSection';
import ValuePropositionSection from './components/sections/ValuePropositionSection';
import ContactSection from './components/sections/ContactSection';
import { testimonials } from './data/testimonials';
import { extras } from './data/extras';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50/30 text-gray-800">
        <div id="top"></div>
        <Navbar />
        <HeroSection />
        <AboutSection />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6">
          <ServicesSection />
          <TestimonialsSection testimonials={testimonials} />
          <ExtrasSection extras={extras} />
          <ValuePropositionSection />
          <ContactSection />
        </main>

        {/* Back to Top Button */}
        <div className="fixed bottom-4 right-4 z-20">
          <a 
            href="#top" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
