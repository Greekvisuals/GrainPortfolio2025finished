import React from 'react';

interface PreloaderProps {
  progress: number;
}

export const Preloader: React.FC<PreloaderProps> = ({ progress }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
      <div className="relative flex flex-col items-center w-full max-w-[280px] md:max-w-[340px]">
         {/* Logo */}
         <h1 className="text-8xl md:text-[10rem] font-display font-bold tracking-tighter text-white mb-8 md:mb-12 opacity-90 select-none">
            GRAIN.
         </h1>

         {/* Progress Bar Container */}
         <div className="w-full h-[1px] bg-white/10 relative overflow-visible">
            {/* Glowing Progress Fill */}
            <div 
              className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_1px_rgba(255,255,255,0.6)] transition-all duration-200 ease-linear"
              style={{ width: `${progress}%` }}
            />
            {/* Leading Head Glow */}
            <div 
               className="absolute top-1/2 -translate-y-1/2 h-[3px] w-[20px] bg-white blur-[2px] transition-all duration-200 ease-linear"
               style={{ left: `calc(${progress}% - 20px)`, opacity: progress > 0 ? 1 : 0 }}
            />
         </div>

         {/* Meta Data */}
         <div className="w-full flex justify-between mt-3 px-1">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-medium">Initializing</span>
            <span className="text-[9px] font-mono text-white/30">{Math.round(progress).toString().padStart(3, '0')}%</span>
         </div>
      </div>
    </div>
  );
};