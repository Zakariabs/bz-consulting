import React from 'react';
import Testimonial from '../cards/Testimonial';

function TestimonialsSection({ testimonials }) {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <Testimonial key={i} {...t} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
