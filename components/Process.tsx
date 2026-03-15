import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <div className="py-24 border-t border-white/10 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
           <h2 className="text-4xl md:text-6xl font-display uppercase text-white">Our Process</h2>
           <span className="text-xs text-white/40 uppercase tracking-widest mt-2 block">From Concept to Final Cut</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="flex flex-col group">
              <span className="text-6xl md:text-8xl font-display text-white/10 group-hover:text-white/20 transition-colors mb-6">
                {step.number}
              </span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-white/30 transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
