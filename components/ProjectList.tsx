
import React from 'react';
import { Project } from '../types';

interface ProjectListProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, onProjectClick }) => {
  return (
    <section className="w-full bg-[#0a0a0a]">
      <div className="flex flex-col w-full">
        {projects.map((project) => (
          <div 
            key={project.id}
            id={`project-${project.id}`}
            onClick={() => onProjectClick(project)}
            className="group relative w-full h-[30vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-white/5 cursor-pointer"
          >
            {/* Background Video - Above Grain (z-50) */}
            <div className="absolute inset-0 z-40 bg-[#050505]">
               <video 
                src={project.videoUrl}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out"
              />
              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60" />
            </div>

            {/* Content - Above Video (z-50) */}
            <div className="relative z-50 text-center px-6 mix-blend-screen pointer-events-none">
              <h2 className="text-3xl md:text-8xl font-display font-medium uppercase text-white tracking-tight mb-3 md:mb-6 drop-shadow-2xl scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out">
                {project.title}
              </h2>
              <div className="flex items-center justify-center gap-3 text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-white/90 drop-shadow-lg">
                <span>{project.year}</span>
                <span className="w-1 h-1 bg-white/60 rounded-full" />
                <span>{project.category}</span>
              </div>
            </div>

            {/* Hover Action */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 z-50">
               <span className="bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  View Project
               </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
