
import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { ProjectList } from './components/ProjectList';
import { ProjectIndex } from './components/ProjectIndex';
import { VerticalShowcase } from './components/VerticalShowcase';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { UploadModal } from './components/UploadModal';
import { GrainOverlay } from './components/GrainOverlay';
import { ProjectDetail } from './components/ProjectDetail';
import { INITIAL_PROJECTS } from './constants';
import { Project } from './types';
import { getProjectsFromFirestore } from './services/firebaseService';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getProjectsFromFirestore();
        if (fetchedProjects.length > 0) {
          // Merge fetched projects with initial structure if needed, or just use them
          // Note: Firestore projects won't have the rich mock data (credits/headlines) unless added manually
          // For this demo, we prioritize the Initial Projects if they match IDs to keep the rich UI
          setProjects(fetchedProjects);
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleUpload = (newProject: Project) => {
    setProjects(prev => [newProject, ...prev]);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const element = document.getElementById('project-index');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter for different views
  const landscapeProjects = projects.filter(p => !p.format || p.format === 'landscape');

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-white selection:text-black">
      <GrainOverlay />
      <NavBar 
        onUploadClick={() => setIsUploadOpen(true)} 
        onHomeClick={scrollToTop}
        onProjectsClick={scrollToProjects}
        onAboutClick={scrollToAbout}
        onContactClick={scrollToContact}
      />
      
      <main>
        <Hero />
        {loading ? (
          <div className="h-screen w-full flex items-center justify-center bg-[#0a0a0a]">
             <span className="text-white/40 uppercase tracking-widest animate-pulse text-xs">Loading Projects...</span>
          </div>
        ) : (
          <>
            <ProjectList 
                projects={landscapeProjects} 
                onProjectClick={handleProjectClick}
            />
            <ProjectIndex projects={landscapeProjects} />
            <VerticalShowcase 
                projects={projects} 
                onProjectClick={handleProjectClick}
            />
          </>
        )}
        <About />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      <UploadModal 
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUpload={handleUpload}
      />

      {selectedProject && (
        <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;
