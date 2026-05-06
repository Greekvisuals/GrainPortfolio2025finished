import React, { useState, useEffect, useRef } from 'react';
import { Preloader } from './Preloader';
import { GlowingButton } from './GlowingButton';

export const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let fallbackTimeout: NodeJS.Timeout;

    // Simulate initial progress to avoid static 0%
    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 99) return 99;
        // Random small increments to simulate network activity
        return Math.min(99, prev + Math.random() * 15);
      });
    }, 400);

    // If video is already cached/ready
    if (videoRef.current && videoRef.current.readyState >= 3) {
      handleVideoLoad();
    } else {
      // Fallback: force load after 4 seconds to prevent getting stuck
      fallbackTimeout = setTimeout(() => {
        handleVideoLoad();
      }, 4000);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  const handleVideoLoad = () => {
    setProgress(100);
    // Slight delay to let user see 100% before fading out
    setTimeout(() => {
      setIsLoading(false);
      // Remove from DOM after fade transition completes
      setTimeout(() => {
        setShowPreloader(false);
      }, 1000);
    }, 400);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Preloader Overlay */}
      {showPreloader && (
        <div className={`fixed inset-0 z-[100] bg-[#0a0a0a] transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Preloader progress={progress} />
        </div>
      )}

      {/* Background Video - Above Grain (z-40) */}
      <div className="absolute inset-0 z-40">
        <video 
          ref={videoRef}
          src="https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Showreel%20nyeste%20HB%20Creator.mp4?alt=media&token=6961f766-c51b-4fd4-bf05-1fbebc6ce421" 
          autoPlay 
          loop 
          muted 
          playsInline
          onCanPlayThrough={handleVideoLoad}
          onError={handleVideoLoad}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a]" />
      </div>

      {/* Hero Content - Above Video (z-50) */}
      <div className={`relative z-50 text-center flex flex-col items-center transition-all duration-1000 delay-500 ${isLoading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
        <div className="mt-20 mb-6 flex flex-col md:flex-row gap-4 md:gap-24 text-s md:text-sm font-medium tracking-wide text-white/80 uppercase items-center">
          <h2>PRODUCTION · CREATIVE · STRATEGY</h2>
          <span className="hidden md:inline">•</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>

        <h1 className="sr-only">Brand Films & Commercial Video Production | Grain Studio Marbella</h1>
        <div aria-hidden="true" className="text-[15vw] leading-[0.9] font-display font-medium uppercase tracking-tight mix-blend-overlay text-white opacity-90">
          Grain.
        </div>

        {/* Headline & Subheading Inspired by Reference */}
        <div className="mt-12 md:mt-16 flex flex-col items-center max-w-5xl px-4 animate-fade-in">
          <h2 className="text-3xl md:text-[3.5rem] font-medium tracking-tight text-white leading-[1.05] text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Your brand deserves to <br />
            reach <span className="italic font-medium text-halation">it's full potential.</span>
          </h2>
          <p className="mt-8 text-base md:text-xl text-white/50 max-w-2xl font-light tracking-wide leading-relaxed text-center">
            We help established businesses close the gap between <br className="hidden md:block" />
            how good they are and how they're perceived.
          </p>
        </div>
        
        <GlowingButton 
          onClick={() => {
            const element = document.getElementById('contact-section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="mt-16 md:mt-24 scale-110"
        >
          Work With Us
        </GlowingButton>
      </div>
      
      <div className={`absolute bottom-12 right-12 z-50 text-xs text-white/40 uppercase tracking-widest animate-pulse transition-opacity duration-1000 delay-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        Scroll to Explore
      </div>
    </section>
  );
};
