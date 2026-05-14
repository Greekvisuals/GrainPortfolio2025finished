import React, { useState, useEffect } from 'react';
import { CINEMA_GALLERY_IMAGES } from '../constants';
import { getStorageImages } from '../services/firebaseService';

export const CinemaGallery: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [images, setImages] = useState(CINEMA_GALLERY_IMAGES);

  useEffect(() => {
    const fetchImages = async () => {
      // Attempt to fetch from 'Cinema Gallery' folder in Storage
      const urls = await getStorageImages('Cinema Gallery');
      if (urls.length > 0) {
        setImages(urls.map((url, i) => ({
          src: url,
          alt: `Cinematic brand film still ${i + 1}`
        })));
      }
    };
    fetchImages();
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-4">
              Cinema Gallery
            </h2>
            <p className="text-white/60 max-w-md text-sm md:text-base">
              A curated selection of stills from our most visually striking projects. Every frame tells a story.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {images.map((image, index) => {
            return (
              <div 
                key={index}
                className="relative overflow-hidden group cursor-pointer aspect-[2.39/1]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    hoveredIndex === index ? 'scale-105' : 'scale-100'
                  } ${
                    hoveredIndex !== null && hoveredIndex !== index ? 'opacity-40 grayscale' : 'opacity-100 grayscale-0'
                  }`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
