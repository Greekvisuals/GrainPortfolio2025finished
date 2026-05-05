import React, { useEffect, useState, useRef } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Player State
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    
    const hideTimeout = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(hideTimeout);
    };
  }, [isPlaying]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const defaultCredits = [
    { role: 'Director', name: 'John Antonsen' },
    { role: 'Editor', name: 'Grain Studio' },
    { role: 'Color', name: 'Grain Studio' }
  ];

  const credits = project.credits && project.credits.length > 0 ? project.credits : defaultCredits;
  const clientName = project.client || 'Private Client';
  const headline = project.headline || project.title;

  return (
    <div className={`fixed inset-0 z-[80] bg-[#0a0a0a] transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full h-full overflow-y-auto hide-scrollbar">
        
        {/* Navigation Bar */}
        <div className="sticky top-0 z-[100] bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex justify-between items-center text-[10px] md:text-xs uppercase tracking-widest text-white/60">
          <div className="flex gap-4 md:gap-12 w-full">
            <div className="hidden md:flex gap-2">
              <span className="text-white/30">Title</span>
              <span className="text-white">{project.title}</span>
            </div>
            <div className="hidden md:flex gap-2">
              <span className="text-white/30">Category</span>
              <span className="text-white">{project.category}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-white/30">Client</span>
              <span className="text-white">{clientName}</span>
            </div>
            <div className="flex gap-2 ml-auto md:ml-0">
              <span className="text-white/30">Year</span>
              <span className="text-white">{project.year}</span>
            </div>
          </div>
          
          <button 
            onClick={handleClose}
            className="ml-8 text-white hover:text-white/50 transition-colors"
          >
            CLOSE [X]
          </button>
        </div>

        <div className="max-w-[1800px] mx-auto px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-8">
              <span className="block text-xs uppercase tracking-widest text-white/40 mb-6">Overview</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.1] mb-8 max-w-4xl">
                {headline}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl font-light">
                {project.description || "A cinematic exploration of light, texture, and human connection. This project represents our commitment to storytelling through a lens of high-end visual aesthetics."}
              </p>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-12">
              <span className="block text-xs uppercase tracking-widest text-white/40 mb-6">Credits</span>
              <div className="space-y-4">
                {credits.map((credit, index) => (
                  <div key={index} className="flex justify-between items-baseline border-b border-white/5 pb-2">
                    <span className="text-white/40 text-sm">{credit.role}</span>
                    <span className="text-white text-sm font-medium">{credit.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Video Player Container */}
          <div 
            ref={containerRef}
            className="w-full relative aspect-video bg-black overflow-hidden group/player rounded-sm"
            onMouseMove={() => setShowControls(true)}
            onMouseLeave={() => isPlaying && setShowControls(false)}
          >
             <video 
                ref={videoRef}
                src={project.videoUrl} 
                autoPlay 
                loop 
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
             />

             {/* Center Play/Pause Icon Overlay */}
             {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity pointer-events-none"
                  onClick={togglePlay}
                >
                  <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
             )}

             {/* Controls Overlay */}
             <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                
                {/* Progress Bar */}
                <div className="relative w-full h-1 group/progress cursor-pointer mb-4">
                  <input 
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="absolute inset-0 bg-white/20" />
                  <div 
                    className="absolute inset-y-0 left-0 bg-white transition-all duration-100" 
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity"
                    style={{ left: `calc(${(currentTime / duration) * 100}% - 6px)` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {/* Play/Pause */}
                    <button onClick={togglePlay} className="text-white hover:text-white/70 transition-colors">
                      {isPlaying ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>

                    {/* Time */}
                    <div className="text-[10px] font-mono tracking-widest text-white/80">
                      <span>{formatTime(currentTime)}</span>
                      <span className="mx-2 text-white/30">/</span>
                      <span>{formatTime(duration)}</span>
                    </div>

                    {/* Volume */}
                    <div className="flex items-center gap-3 group/volume">
                      <button onClick={toggleMute} className="text-white hover:text-white/70 transition-colors">
                        {isMuted || volume === 0 ? (
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4.27 3L3 4.27l4.73 4.73H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                        )}
                      </button>
                      <input 
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-0 group-hover/volume:w-20 transition-all duration-300 h-1 bg-white/20 appearance-none cursor-pointer overflow-hidden rounded-full accent-white"
                      />
                    </div>
                  </div>

                  {/* Fullscreen */}
                  <button onClick={toggleFullscreen} className="text-white hover:text-white/70 transition-colors">
                    {isFullscreen ? (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                      </svg>
                    )}
                  </button>
                </div>
             </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/10 flex justify-between items-center">
             <span className="text-xs uppercase tracking-widest text-white/20">Grain. Studio</span>
             <button onClick={handleClose} className="text-sm uppercase tracking-widest text-white hover:opacity-50 transition-opacity">
               Back to Index
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
