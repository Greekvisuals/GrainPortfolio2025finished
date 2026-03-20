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
        <h1 className="text-[15vw] leading-[0.9] font-display font-medium uppercase tracking-tight mix-blend-overlay text-white opacity-90">
          Grain.
        </h1>
        
        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-24 text-xs md:text-sm font-medium tracking-wide text-white/80 uppercase items-center">
          <span>Strategy and story driven brand films</span>
          <span className="hidden md:inline">•</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>

        <GlowingButton 
          onClick={() => {
            const element = document.getElementById('contact-section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="mt-12"
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
