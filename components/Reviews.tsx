import React from 'react';
import { MOCK_REVIEWS } from '../constants';

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
         <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
            <h2 className="text-4xl md:text-6xl font-display uppercase text-white">Client Voices</h2>
            <span className="text-xs text-white/40 uppercase tracking-widest hidden md:block">Trust & Collaboration</span>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_REVIEWS.map((review) => (
            <div key={review.id} className="bg-white/5 p-8 rounded-sm hover:bg-white/10 transition-colors duration-500">
              <div className="flex gap-1 mb-6 text-[#d4af37]">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-8 font-light italic">
                "{review.text}"
              </p>
              <div className="flex flex-col">
                <span className="text-white font-medium uppercase tracking-wide text-sm">{review.clientName}</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">{review.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};