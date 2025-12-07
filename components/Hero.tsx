import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video - Above Grain (z-40) */}
      <div className="absolute inset-0 z-40">
        <video 
          src="https://firebasestorage.googleapis.com/v0/b/redhead-productions.firebasestorage.app/o/grainshowreel%20best.mp4?alt=media&token=4a0d1186-a270-4616-aa86-7830bfb6abe3" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a]" />
      </div>

      {/* Hero Content - Above Video (z-50) */}
      <div className="relative z-50 text-center flex flex-col items-center">
        <h1 className="text-[15vw] leading-[0.9] font-display font-medium uppercase tracking-tight mix-blend-overlay text-white opacity-90">
          Grain.
        </h1>
        
        <div className="mt-12 flex flex-col md:flex-row gap-4 md:gap-24 text-xs md:text-sm font-medium tracking-wide text-white/80 uppercase items-center">
          <span>Brand films that sell</span>
          <span className="hidden md:inline">•</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 z-50 text-xs text-white/40 uppercase tracking-widest animate-pulse">
        Scroll to Explore
      </div>
    </section>
  );
};
