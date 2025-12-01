import React from 'react';
import { SERVICES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about-section" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-display leading-tight text-white/90 mb-8">
            We’re a videography studio driven by a love for cinematic storytelling and intentional filmmaking.
          </h2>
          <p className="text-white/60 leading-relaxed max-w-md">
            We are Grain, a creative filmmaking duo specializing in cinematic mini films for outdoor and adventure brands. We combine film-grade visuals, clear, authentic, impactful storytelling, and strategic thinking to create content that connects with the viewers on an emotional level that converts.
As a two-person team, we’re faster, focused, and fully hands-on, delivering the detail, consistency, and creative cohesion larger teams often can’t.

High impact brand films that sell. 
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-white/40 mb-8">Services</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {SERVICES.map((service, index) => (
              <li key={index} className="text-lg text-white/80 border-b border-white/5 pb-2 hover:pl-2 transition-all duration-300 cursor-default">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
