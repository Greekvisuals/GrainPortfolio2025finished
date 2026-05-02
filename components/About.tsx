import React from 'react';
import { SERVICES, TEAM_MEMBERS } from '../constants';
import { Process } from './Process';

export const About: React.FC = () => {
  return (
    <section id="about-section" className="bg-[#0a0a0a] border-t border-white/10">
      {/* Intro & Services */}
      <div className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-display leading-tight text-white/90 mb-8">
            At Grain, We produce identity-defining visual assets for ambitious brands that want to reach their full potential.
          </h2>
          <p className="text-white/60 leading-relaxed max-w-md">
Rather than producing disposable content, we focus on creating visual foundations that shape how a brand is perceived across campaigns, platforms, and audiences.

Every project is approached with a director’s eye and a strategist’s mindset. From concept to final film, we stay fully involved to ensure creative consistency, strong narrative, and a visual identity that stands apart in crowded markets.
            <br/><br/>
            Strategic cinema for brands that want to be remembered. 
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

      {/* Process Section */}
      <Process />

      {/* Team Section */}
      <div className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
             <h2 className="text-4xl md:text-6xl font-display uppercase text-white">The Team</h2>
             <span className="text-xs text-white/40 uppercase tracking-widest hidden md:block">Hands-on Production</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
             {TEAM_MEMBERS.map((member, index) => (
               <div key={index} className="group cursor-pointer">
                 <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#111] mb-4 md:mb-6 transition-all duration-700 ease-out">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 </div>
                 <div className="flex flex-col">
                    <h3 className="text-lg md:text-2xl font-display uppercase text-white group-hover:translate-x-2 transition-transform duration-300">
                      {member.name}
                    </h3>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 mt-1 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      {member.role}
                    </span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
