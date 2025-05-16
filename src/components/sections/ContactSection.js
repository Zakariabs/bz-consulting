import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const currentYear = new Date().getFullYear();
  
  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 bottom-0 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute right-20 top-10 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-indigo-100 p-4 md:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
            <div className="md:w-1/2">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-indigo-800">{t.directContact}</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center mr-3 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <a href="mailto:info@zakariabasraou.be" className="text-indigo-600 hover:text-indigo-800 text-sm md:text-base transition-colors">info@zakariabasraou.be</a>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center mr-3 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <a href="tel:+32495123456" className="text-indigo-600 hover:text-indigo-800 text-sm md:text-base transition-colors">+32 495 12 34 56</a>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.linkedin.com/in/zakariabasraou" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
                <a href="https://twitter.com/zakariabasraou" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.1a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-70 blur-sm group-hover:opacity-100 transition duration-300"></div>
                <a href="https://calendly.com/zakariabasraou/kennismaking" target="_blank" rel="noopener noreferrer" className="relative block w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 shadow-md transform hover:-translate-y-0.5 hover:shadow-xl">
                  {t.scheduleMeeting}
                </a>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mt-3 text-center">
                {t.availability}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8">
          {t.copyright.replace('{year}', currentYear)}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
