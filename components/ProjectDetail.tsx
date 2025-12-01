
import React, { useEffect, useState } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500); // Wait for animation
  };

  const defaultCredits = [
    { role: 'Director', name: 'John Antonsen' },
    { role: 'Editor', name: 'Grain Studio' },
    { role: 'Color', name: 'Grain Studio' }
  ];

  const credits = project.credits && project.credits.length > 0 ? project.credits : defaultCredits;
  const clientName = project.client || 'Private Client';
  const headline = project.headline || project.title; // Fallback to title if no headline

  return (
    <div className={`fixed inset-0 z-[80] bg-[#0a0a0a] transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Scrollable Container */}
      <div className="w-full h-full overflow-y-auto hide-scrollbar">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-[90] bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex justify-between items-center text-[10px] md:text-xs uppercase tracking-widest text-white/60">
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

        {/* Content Section */}
        <div className="max-w-[1800px] mx-auto px-6 py-12 md:py-24">
          
          {/* Text Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
            
            {/* Overview Section */}
            <div className="lg:col-span-8">
              <span className="block text-xs uppercase tracking-widest text-white/40 mb-6">Overview</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.1] mb-8 max-w-4xl">
                {headline}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl font-light">
                {project.description || "A cinematic exploration of light, texture, and human connection. This project represents our commitment to storytelling through a lens of high-end visual aesthetics."}
              </p>
            </div>

            {/* Credits Section */}
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

          {/* Media Section */}
          <div className="w-full relative aspect-video bg-[#111] overflow-hidden">
             <video 
                src={project.videoUrl} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Footer Navigation within Modal */}
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
