import React from 'react';
import { Project } from '../types';

interface ProjectIndexProps {
  projects: Project[];
}

export const ProjectIndex: React.FC<ProjectIndexProps> = ({ projects }) => {
  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, projectId: string) => {
    e.preventDefault();
    const element = document.getElementById(`project-${projectId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="project-index" className="py-32 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-display uppercase text-white">Index</h2>
            <span className="text-xs text-white/40 uppercase tracking-widest hidden md:block">Selected Works</span>
        </div>

        <div className="w-full border-t border-white/10">
          {projects.map((project, index) => (
             <a
               href={`#project-${project.id}`}
               onClick={(e) => handleProjectClick(e, project.id)}
               key={project.id}
               className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors duration-500 cursor-pointer px-4 relative overflow-hidden"
             >
                <div className="w-full md:w-1/2 flex items-center gap-6">
                   <span className="text-xs text-white/20 font-mono hidden md:block">{(index + 1).toString().padStart(2, '0')}</span>
                   <h3 className="text-2xl md:text-4xl font-display uppercase text-white/80 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
                     {project.title}
                   </h3>
                </div>
                
                <div className="w-full md:w-1/4 mt-4 md:mt-0 flex items-center">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 group-hover:text-white/60 transition-colors">
                      {project.category}
                    </span>
                </div>
                
                <div className="w-full md:w-1/4 text-right mt-2 md:mt-0">
                     <span className="text-xs font-medium uppercase tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
                       {project.year}
                     </span>
                </div>
             </a>
          ))}
        </div>
      </div>
    </section>
  );
};