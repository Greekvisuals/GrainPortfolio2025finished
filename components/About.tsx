import React from 'react';
import { SERVICES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about-section" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-display leading-tight text-white/90 mb-8">
            At Grain, we build identity-defining films and visual assets for outdoor and performance brands into cult identities people instantly remember..
          </h2>
          <p className="text-white/60 leading-relaxed max-w-md">
            We develop identity-defining films and strategic visual assets designed to build recognition, authority, and long-term brand equity. Our work combines cinematic storytelling with clear brand thinking to create films that people remember and brands can build around.

Rather than producing disposable content, we focus on creating visual foundations that shape how a brand is perceived across campaigns, platforms, and audiences.

Every project is approached with a director’s eye and a strategist’s mindset. From concept to final film, we stay fully involved to ensure creative consistency, strong narrative, and a visual identity that stands apart in crowded markets.
            <br/><br/>
            Strategic cinema for brands that want to be remembered..
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
