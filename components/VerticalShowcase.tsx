
import React from 'react';
import { Project } from '../types';

interface VerticalShowcaseProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const VerticalShowcase: React.FC<VerticalShowcaseProps> = ({ projects, onProjectClick }) => {
  // Filter for only vertical projects
  const verticalProjects = projects.filter(p => p.format === 'vertical');

  if (verticalProjects.length === 0) return null;

  return (
    <section className="relative z-40 py-24 bg-[#0a0a0a] px-6 border-b border-white/10">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">Featured Projects</h2>
          <div className="flex gap-2">
             <button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white/60">
                ←
             </button>
             <button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white/60">
                →
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {verticalProjects.map((project) => (
            <div 
                key={project.id} 
                className="group relative cursor-pointer"
                onClick={() => onProjectClick(project)}
            >
              {/* Aspect Ratio Container for Vertical Video */}
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#111]">
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Content Below */}
              <div className="flex justify-between items-start mt-4 px-1">
                <h3 className="text-sm font-medium text-white/90 group-hover:text-white transition-colors tracking-wide">
                    {project.title}
                </h3>
                <span className="text-xs text-white/40 font-mono">
                    {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
