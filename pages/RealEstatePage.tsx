import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { RealEstateHero } from '../components/real-estate/RealEstateHero';
import { RealEstateManifesto } from '../components/real-estate/RealEstateManifesto';
import { BrandAnalysisSection } from '../components/real-estate/BrandAnalysisSection';
import { RealEstateServices } from '../components/real-estate/RealEstateServices';
import { RealEstateServicesList } from '../components/real-estate/RealEstateServicesList';
import { RealEstateProcess } from '../components/real-estate/RealEstateProcess';
import { RealEstateTeam } from '../components/real-estate/RealEstateTeam';
import { RealEstateFAQ } from '../components/real-estate/RealEstateFAQ';
import { RealEstateContact } from '../components/real-estate/RealEstateContact';
import { Project } from '../types';
import { getProjectsFromFirestore } from '../services/firebaseService';
import { INITIAL_PROJECTS } from '../constants';
import { GrainOverlay } from '../components/GrainOverlay';
import { ProjectDetail } from '../components/ProjectDetail';

import { GlowingButton } from '../components/GlowingButton';

export const RealEstatePage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getProjectsFromFirestore(true);
        if (fetchedProjects && fetchedProjects.length > 0) {
          setProjects(fetchedProjects);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const realEstateProjects = projects.filter(p => p.isRealEstate === true);

  return (
    <div className="bg-[#E8DEC7] min-h-screen selection:bg-[#921713] selection:text-[#E8DEC7]">
      <Helmet>
        <title>Scandinavian Real Estate Video Production | High-End Property Film | Grain</title>
        <meta name="description" content="Grain specializes in Scandinavian Real Estate video production and high-end property films. Elevate your brand with our Film Grade Content Systems, identity building, and cinematic listing videos." />
        <meta name="keywords" content="Scandinavian Real Estate video production, high end property film, real estate videography, film grade content systems, real estate identity building, luxury property listing videos, real estate marketing" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Boutique Real Estate Video Production - Scandinavian Excellence" />
        <meta property="og:description" content="We craft cinematic legacies that command attention. Specialist high-end property film and identity building for elite real estate agencies." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/RealEstateThumbnail.jpg?alt=media" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scandinavian Real Estate Video Production | Grain" />
        <meta name="twitter:description" content="Elevate your perceived value with Film Grade Content Systems and high-end property films. Boutique production for the elite market." />
      </Helmet>

      <GrainOverlay />
      
      <main>
        <RealEstateHero />
        <RealEstateManifesto />
        <BrandAnalysisSection />
        
        {/* Portfolio Section - Curated Editorial Gallery */}
        <section id="portfolio" className="py-20 md:py-32 bg-[#E8DEC7]">
          <div className="w-full">
            <div className="max-w-[1920px] mx-auto px-6 mb-16 md:mb-32 flex flex-col items-center text-center gap-6 md:gap-10 relative">
              <div className="max-w-4xl relative">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.5, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[10px] uppercase tracking-[0.8em] text-[#921713] mb-3 md:mb-6 block font-bold"
                >
                  Featured Projects
                </motion.span>
                <h2 className="text-4xl md:text-6xl lg:text-[10rem] font-display font-medium text-[#921713] leading-[0.85] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Selected <br />
                  <span className="italic relative inline-block">
                    work.
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                      className="absolute -bottom-4 left-0 h-px bg-[#921713]/30" 
                    />
                  </span>
                </h2>
              </div>
            </div>

            {loading ? (
              <div className="h-[50vh] flex items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-12 h-12 border-t border-[#921713] rounded-full animate-spin" />
                  <span className="text-[#921713]/40 uppercase tracking-[0.6em] text-[10px] font-bold">Cataloging Masterpieces</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                {realEstateProjects.length > 0 ? (
                  realEstateProjects.map((project, i) => (
                    <motion.div
                      key={project.id || i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.5 }}
                      className="relative w-full aspect-video md:h-screen overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Background Media */}
                      <div className="absolute inset-0 transition-all duration-[1.5s] group-hover:scale-105">
                        {project.videoUrl ? (
                          <video
                            src={project.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img 
                            src={project.thumbnailUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      {/* Editorial Interface Overlays */}
                      <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end text-[#921713] pointer-events-none">
                        {/* Title: Bottom Left & Smaller */}
                        <div className="flex justify-start">
                            <motion.h3 
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 1 }}
                              className="text-xs md:text-3xl font-bold leading-tight tracking-[0.4em] uppercase text-left max-w-[250px] md:max-w-2xl"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {project.title}
                            </motion.h3>
                        </div>
                      </div>

                      {/* Interaction: Hover State */}
                      <div className="absolute inset-0 bg-[#921713] opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none" />
                    </motion.div>
                  ))
                ) : (
                  <div className="lg:col-span-12 text-center py-64 border border-[#921713]/10 bg-white/5 mx-6 rounded-sm">
                    <div className="max-w-md mx-auto">
                      <div className="w-12 h-px bg-[#921713]/20 mx-auto mb-8" />
                      <p className="text-[#921713]/40 font-display italic text-2xl mb-4 tracking-tighter">Private Collection Under Review</p>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[#921713]/30">New Real Estate cinematic productions are currently being cataloged.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <RealEstateServices />
        <RealEstateServicesList />
        <RealEstateProcess />
        <RealEstateTeam />
        <RealEstateFAQ />
        <RealEstateContact />
        
        {/* Final CTA - Boutique Luxury Branding */}
        <section className="py-32 md:py-64 bg-[#FAF7F0] text-center px-6 relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 md:h-32 bg-[#921713]/10" />
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-4xl md:text-[8rem] font-display text-[#921713] mb-8 md:mb-16 leading-[0.85] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
               Ready to elevate <br />
               <span className="italic relative md:static">perceived value?</span>
             </h2>
             <div className="flex justify-center">
               <GlowingButton className="!h-16 md:!h-20 !text-[10px] md:!text-xs !tracking-[0.4em]">
                 Book Strategy Session
               </GlowingButton>
             </div>
           </motion.div>
        </section>
      </main>

      {selectedProject && (
        <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};
