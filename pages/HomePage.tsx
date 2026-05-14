import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { ProjectList } from '../components/ProjectList';
import { ProjectIndex } from '../components/ProjectIndex';
import { VerticalShowcase } from '../components/VerticalShowcase';
import { CinemaGallery } from '../components/CinemaGallery';
import { About } from '../components/About';
import { Reviews } from '../components/Reviews';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { Philosophy } from '../components/Philosophy';
import { Manifesto } from '../components/Manifesto';
import { ClientSlider } from '../components/ClientSlider';
import { Footer } from '../components/Footer';
import { Project } from '../types';
import { SEO_FAQS } from '../constants';

interface HomePageProps {
  projects: Project[];
  loading: boolean;
  handleProjectClick: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ projects, loading, handleProjectClick }) => {
  const mainProjects = projects.filter(p => !p.isRealEstate);
  const landscapeProjects = mainProjects.filter(p => !p.format || p.format === 'landscape');

  return (
    <main>
      <Helmet>
        <title>Grain. | Boutique Film & Brand Direction</title>
        <meta name="description" content="Cinematic video production and boutique brand film studio. We craft visual legacies for ambitious brands worldwide through story-driven filmmaking." />
        <meta name="keywords" content="video production, luxury brand film, cinematic storytelling, boutique film studio, commercial videography, luxury brand direction" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Grain. | Boutique Film Studio & Brand Direction" />
        <meta property="og:description" content="Cinematic video production. We craft visual legacies for ambitious brands worldwide." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/og-main.jpg?alt=media" />
      </Helmet>
      <Hero />
      <ClientSlider />
      <Manifesto />
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
              projects={mainProjects} 
              onProjectClick={handleProjectClick}
          />
        </>
      )}
      <About />
      <Reviews />
      <Contact />
      <Philosophy />
      <FAQ 
        items={SEO_FAQS} 
        subtitle="Everything you need to know about our cinematic brand films and video production services worldwide."
      />
      <Footer />
    </main>
  );
};
