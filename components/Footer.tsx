import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
        <div>
          <h2 className="text-[12vw] leading-[0.8] font-display font-medium uppercase tracking-tight text-white/10 select-none">
            Start Your Story
          </h2>
        </div>
        <div className="flex flex-col text-right mt-8 md:mt-0">
          <div className="flex gap-6 mb-4 justify-end">
             <a 
               href="https://www.instagram.com/john.antonsen/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-sm text-white/60 hover:text-white transition-colors"
             >
               Instagram
             </a>
             <a 
               href="https://www.linkedin.com/company/grainxstudio/?viewAsMember=true" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-sm text-white/60 hover:text-white transition-colors"
             >
               LinkedIn
             </a>
             <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Twitter/X</a>
          </div>
          <span className="text-xs text-white/20 uppercase tracking-widest">
            © 2025 Grain. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};