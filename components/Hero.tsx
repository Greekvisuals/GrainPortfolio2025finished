import React, { useState, useEffect, useRef } from 'react';
import { Preloader } from './Preloader';

export const Hero: React.FC = () => {
  // State for the preloader
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const [progress, setProgress] = useState(0);
  
  // Ref for the asset you are waiting to load (e.g., a video)
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
      setIsLoading(false); // Triggers the CSS opacity fade
      
      // Remove from DOM entirely after fade transition completes
      setTimeout(() => {
        setShowPreloader(false);
      }, 1000);
    }, 400);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      
      {/* 1. Preloader Overlay */}
      {showPreloader && (
        <div className={`fixed inset-0 z-[100] bg-[#0a0a0a] transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Preloader progress={progress} />
        </div>
      )}

      {/* 2. Your Heavy Asset (Video) */}
      <div className="absolute inset-0 z-40">
        <video 
          ref={videoRef}
          src="https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/GRAINSHOWEEELTOPAZFAST1080p%20copy.mp4?alt=media&token=0a977e9f-624b-40c9-a449-1eb8499532f3" 
          autoPlay 
          loop 
          muted 
          playsInline
          onCanPlayThrough={handleVideoLoad} // Triggers completion when buffered
          onError={handleVideoLoad} // Failsafe
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* 3. Your Main Content (Fades in after preloader) */}
      <div className={`relative z-50 text-center transition-all duration-1000 delay-500 ${isLoading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
        <h1 className="text-white text-6xl font-bold">
          Welcome.
        </h1>
      </div>
      
    </section>
  );
};
