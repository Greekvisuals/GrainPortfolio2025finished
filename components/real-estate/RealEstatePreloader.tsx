import React from 'react';
import { motion } from 'framer-motion';

interface RealEstatePreloaderProps {
  progress: number;
}

export const RealEstatePreloader: React.FC<RealEstatePreloaderProps> = ({ progress }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-[#E8DEC7]">
      <div className="relative flex flex-col items-center w-full max-w-[300px] md:max-w-[400px]">
         {/* Logo */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="text-8xl md:text-[10rem] font-display font-medium tracking-tighter text-[#921713] mb-8 md:mb-12 select-none"
           style={{ fontFamily: "'Playfair Display', serif" }}
         >
           Grain.
         </motion.div>

         {/* Progress Bar Container */}
         <div className="w-full h-[1px] bg-[#921713]/10 relative overflow-visible">
            {/* Progress Fill */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#921713] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Glow effect at the tip */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 h-[3px] w-[15px] bg-[#921713] blur-[2px] transition-all duration-300 ease-out"
              style={{ left: `calc(${progress}% - 15px)`, opacity: progress > 5 ? 1 : 0 }}
            />
         </div>

         {/* Meta Data */}
         <div className="w-full flex justify-between mt-4 px-1">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] uppercase tracking-[0.5em] text-[#921713]/40 font-bold"
            >
              Curating Excellence
            </motion.span>
            <motion.span 
              className="text-[10px] font-mono text-[#921713]/40"
            >
              {Math.round(progress).toString().padStart(3, '0')}%
            </motion.span>
         </div>

         {/* Small decorative indicator */}
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: [0, 0.4, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="absolute -bottom-24 text-[9px] uppercase tracking-[0.8em] text-[#921713]/30 font-medium"
         >
           Scandinavian Quality
         </motion.div>
      </div>
    </div>
  );
};
