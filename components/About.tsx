import React from 'react';
import { SERVICES, TEAM_MEMBERS } from '../constants';
import { Process } from './Process';
import { ServicesShowcase } from './ServicesShowcase';

export const About: React.FC = () => {
  return (
    <section id="about-section" className="bg-[#0a0a0a] border-t border-white/10">
      {/* New Services Showcase Section */}
      <ServicesShowcase />

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
