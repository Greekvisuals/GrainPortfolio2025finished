import React, { useEffect, useState, useRef } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeLightboxImg, setActiveLightboxImg] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeLightboxImg) {
          setActiveLightboxImg(null);
        } else {
          handleClose();
        }
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxImg]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
      if (isPlaying) {
        controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 2500);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) container.removeEventListener('mousemove', handleMouseMove);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current && videoRef.current.videoWidth && videoRef.current.videoHeight) {
      setAspectRatio(videoRef.current.videoWidth / videoRef.current.videoHeight);
    }
  }, [project.videoUrl]);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      if (videoRef.current.videoWidth && videoRef.current.videoHeight) {
        setAspectRatio(videoRef.current.videoWidth / videoRef.current.videoHeight);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => console.error(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md flex flex-col justify-start">
      {/* Background backdrop blur transition */}
      <div 
        className={`fixed inset-0 bg-black/80 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Top Navbar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-[#921713] font-bold">
            Project Overview
          </span>
          <span className="text-white/20">/</span>
          <span className="text-xs uppercase tracking-widest text-white/60">
            {project.title}
          </span>
        </div>

        <button 
          onClick={handleClose}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors group px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30"
        >
          <span>Close</span>
          <svg 
            className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Content Area */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 py-8 md:py-12 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="space-y-12">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-white/40 uppercase">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight text-white">
                {project.title}
              </h1>
            </div>
            
            <div className="flex flex-wrap gap-8 text-xs tracking-widest uppercase text-white/60">
              <div>
                <span className="block text-white/30 text-[10px] mb-1">Format</span>
                <span className="text-white font-mono">{project.format || 'Landscape'}</span>
              </div>
              <div>
                <span className="block text-white/30 text-[10px] mb-1">Stills Captured</span>
                <span className="text-white font-mono">{(project.galleryImages?.length || 0) + ' Frames'}</span>
              </div>
              <div>
                <span className="block text-white/30 text-[10px] mb-1">Production</span>
                <span className="text-white font-mono">Grain. Studio</span>
              </div>
            </div>
          </div>

          {/* Custom Video Player Container */}
          <div className="flex justify-center w-full my-4">
            <div 
              ref={containerRef}
              style={{
                aspectRatio: aspectRatio ? `${aspectRatio}` : (project.format === 'vertical' ? '9/16' : '16/9'),
                maxHeight: '82vh'
              }}
              className="w-full relative bg-black overflow-hidden group/player rounded-sm shadow-2xl transition-all duration-300 flex items-center justify-center"
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
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={togglePlay}
               />

               {/* Center Play/Pause Icon Overlay */}
               {!isPlaying && (
                  <div 
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer backdrop-blur-[2px] transition-all"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md hover:scale-110 hover:bg-[#921713] transition-all duration-300 shadow-2xl">
                      <svg className="w-8 h-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
               )}

               {/* Controls Bar */}
               <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0'
               }`}>
                  {/* Progress Bar Track */}
                  <div 
                    onClick={handleSeek}
                    className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer relative mb-4 transition-all overflow-hidden group/seek"
                  >
                    <div 
                      className="absolute top-0 left-0 bottom-0 bg-[#921713] rounded-full relative"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/seek:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Left Controls */}
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={togglePlay} 
                        className="text-white hover:text-[#921713] transition-colors p-1"
                      >
                        {isPlaying ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </button>

                      <button 
                        onClick={toggleMute} 
                        className="text-white hover:text-[#921713] transition-colors p-1"
                      >
                        {isMuted ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                        )}
                      </button>

                      <span className="text-xs font-mono text-white/60">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={toggleFullscreen}
                        className="text-white hover:text-[#921713] transition-colors p-1"
                      >
                        {isFullscreen ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Project Gallery Library */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#921713] font-bold">
                    Visual Archive
                  </span>
                  <h3 className="text-2xl font-display uppercase tracking-tight text-white">
                    Project Stills
                  </h3>
                </div>
                <span className="text-xs font-mono uppercase text-white/40">
                  {project.galleryImages.length} {project.galleryImages.length === 1 ? 'Frame' : 'Frames'}
                </span>
              </div>

              {/* Responsive Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.galleryImages.map((imgUrl, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveLightboxImg(imgUrl)}
                    className="relative group cursor-pointer aspect-[16/10] overflow-hidden rounded-sm bg-white/5 border border-white/5"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${project.title} Still ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description Section */}
          {project.description && (
            <div className="border-t border-white/10 pt-8 max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#921713] font-bold">
                Director's Note
              </span>
              <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal for Gallery Stills */}
      {activeLightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12 animate-fadeIn cursor-pointer"
          onClick={() => setActiveLightboxImg(null)}
        >
          <button 
            onClick={() => setActiveLightboxImg(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white p-2 rounded-full border border-white/10 hover:border-white/40 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src={activeLightboxImg} 
            alt="Expanded Still" 
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
};
