import React from 'react';
import Testimonial from '../cards/Testimonial';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';

function TestimonialsSection({ testimonials }) {
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  
  return (
    <section id="testimonials" className="py-12 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">{t.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          {t.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4 sm:px-0">
        {testimonials.map((testimonial, i) => (
          <Testimonial key={i} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
