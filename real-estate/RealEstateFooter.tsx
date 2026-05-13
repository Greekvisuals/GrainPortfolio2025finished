import React from 'react';
import { motion } from 'framer-motion';

export const RealEstateFooter: React.FC = () => {
  return (
    <footer className="bg-[#E8DEC7] text-[#921713] py-16 px-6 border-t border-[#921713]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12vw] leading-[0.8] font-display font-medium uppercase tracking-tight text-[#921713]/5 select-none pointer-events-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Build Your <br /> legacy
            </motion.h2>
          </div>
          
          <div className="flex flex-col md:items-end w-full md:w-auto">
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 md:justify-end">
               <a href="/" className="text-xs uppercase tracking-widest text-[#921713]/60 hover:text-[#921713] transition-colors font-bold">Home</a>
               <a href="/assets/" className="text-xs uppercase tracking-widest text-[#921713]/60 hover:text-[#921713] transition-colors font-bold">Assets</a>
               <a 
                 href="https://www.instagram.com/grainxstudio/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-xs uppercase tracking-widest text-[#921713]/60 hover:text-[#921713] transition-colors font-bold"
               >
                 Instagram
               </a>
               <a 
                 href="https://www.linkedin.com/company/grainxstudio/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-xs uppercase tracking-widest text-[#921713]/60 hover:text-[#921713] transition-colors font-bold"
               >
                 LinkedIn
               </a>
            </div>
            
            <div className="flex flex-col md:items-end gap-2">
              <span className="text-[10px] text-[#921713]/30 uppercase tracking-[0.4em] font-bold">
                © 2025 Grain. Boutique Production & Scandinavian Real Estate Video Production.
              </span>
              <span className="text-[10px] text-[#921713]/20 uppercase tracking-[0.2em]">
                Cinematic Legacies for Elite Real Estate | High-End Property Film | Film Grade Content Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
