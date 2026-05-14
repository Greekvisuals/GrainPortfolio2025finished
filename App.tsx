import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { UploadModal } from './components/UploadModal';
import { GrainOverlay } from './components/GrainOverlay';
import { ProjectDetail } from './components/ProjectDetail';
import { Project } from './types';
import { getProjectsFromFirestore } from './services/firebaseService';
import { INITIAL_PROJECTS } from './constants';
import { HomePage } from './pages/HomePage';
import { RealEstatePage } from './pages/RealEstatePage';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchPromise = getProjectsFromFirestore();
        const timeoutPromise = new Promise<Project[]>((_, reject) => 
          setTimeout(() => reject(new Error("Firebase fetch timeout")), 5000)
        );
        
        const fetchedProjects = await Promise.race([fetchPromise, timeoutPromise]);
        
        if (fetchedProjects && fetchedProjects.length > 0) {
          setProjects(fetchedProjects);
        }
      } catch (error) {
        console.error("Failed to fetch projects, using fallback:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleUpload = (newProject: Project) => {
    // Only add to main projects state if it's not a real estate project
    if (!newProject.isRealEstate) {
      setProjects(prev => [newProject, ...prev]);
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-white selection:text-black">
      <GrainOverlay />
      <NavBar 
        onUploadClick={() => setIsUploadOpen(true)} 
      />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              projects={projects} 
              loading={loading} 
              handleProjectClick={handleProjectClick} 
            />
          } 
        />
        <Route 
          path="/real-estate" 
          element={<RealEstatePage />} 
        />
      </Routes>

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
