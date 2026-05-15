import React from 'react';
import { motion } from 'framer-motion';

import { GlowingButton } from '../GlowingButton';

export const RealEstateHero: React.FC = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#E8DEC7]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source 
            src="https://firebasestorage.googleapis.com/v0/b/redhead-productions.firebasestorage.app/o/grain_-_your_strategic_partner_v1%20(2160p).mp4?alt=media&token=e724f449-1b75-4610-a3a0-c8e5cdcc91b8" 
            type="video/mp4" 
          />
        </video>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 text-center pt-8 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 md:mb-12">
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#E8DEC7]/60 mb-2 md:mb-8 block font-medium">Boutique Production</span>
          </div>

          <h1 className="text-3xl md:text-6xl lg:text-[4.5rem] font-display font-medium text-[#E8DEC7] leading-[0.9] md:leading-[0.85] tracking-tighter mb-4 md:mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="sr-only">Scandinavian Real Estate Video Production & High End Property Films — </span>
            Average is no longer enough.
          </h1>
          
          <p className="max-w-xl mx-auto text-xs md:text-lg text-[#E8DEC7]/80 font-light mb-12 md:mb-20 leading-relaxed tracking-wide px-2 md:px-0">
            We don't just film properties. We craft cinematic legacies that command attention and justify premium valuations in Marbella's most competitive market.
          </p>

          <div className="flex flex-row items-center justify-center gap-4 md:gap-10">
            <GlowingButton className="!h-11 md:!h-16 !tracking-[0.2em] md:!tracking-[0.3em] !text-[10px] md:!text-sm">
              Try Free Analysis
            </GlowingButton>
            <button 
              onClick={scrollToPortfolio}
              className="group flex items-center gap-2 md:gap-4 text-[#E8DEC7] font-display text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:opacity-70 transition-all"
            >
              <span className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border border-[#E8DEC7]/20 rounded-full group-hover:bg-[#E8DEC7] group-hover:text-[#921713] transition-all duration-500">
                ▶
              </span>
              <span className="italic font-semibold translate-y-[0px] md:translate-y-[1px]">Watch Our Work</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Rule */}
      <div className="absolute bottom-24 left-6 hidden xl:block">
        <div className="h-[1px] w-48 bg-[#E8DEC7]/20" />
      </div>

      {/* Scroll indicator with halation theme */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#E8DEC7]/40">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-[#E8DEC7] to-transparent" />
      </div>
    </section>
  );
};
