import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;
  const navLinks = [
    { href: '#over-mij', label: t.aboutMe },
    { href: '#diensten', label: t.services },
    { href: '#tarieven', label: t.pricing },
    { href: '#contact', label: t.contact },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-indigo-100 shadow-md sticky top-0 z-30 transition-shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white text-2xl font-extrabold shadow-md">Z</span>
          <span className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">Zakaria Basraoui</span>
        </div>
        <div className="hidden md:flex items-center">
          <div className="flex gap-8 text-gray-700 font-medium mr-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-2 py-1 hover:text-indigo-600 transition-colors duration-200 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-indigo-600 after:to-purple-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-indigo-50 transition-colors focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-indigo-100 shadow-lg animate-fade-in-down">
          <div className="flex flex-col gap-2 px-6 py-4 text-gray-700 font-medium">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 px-2 rounded hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
