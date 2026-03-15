import React from 'react';

export const ClientSlider: React.FC = () => {
  const logos = [
    { src: "https://hydratecocowater.com/wp-content/uploads/2026/02/Hydrate_logomarquee_white-scaled.png", alt: "Apple Music" },
    { src: "https://www.bmw.es/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg", alt: "BMW" },
    { src: "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/FINAL-LOGO-2_preview_rev_2.png?alt=media&token=dbb42ad5-014a-453e-9c9c-12ae6d9d13c7", alt: "BMW" },    
    { src: "https://trailberg.eu/cdn/shop/files/trailberg-white.png?v=1739266888&width=198", alt: "Nintendo" },
    { src: "https://d3k81ch9hvuctc.cloudfront.net/company/VHjAwH/images/2644d8ed-8a7f-4c31-bb10-609a14ca44dc.png", alt: "Prada" },
  ];

  // Triplicate the array to ensure smooth infinite scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden relative flex items-center bg-[#0a0a0a]">
      <div className="w-full relative z-10">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8 md:mx-16 flex items-center justify-center logo-halation">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-12 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Progressive Blur Left */}
      <div 
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px] md:w-[250px] backdrop-blur-[12px] bg-gradient-to-r from-[#0a0a0a] to-transparent z-20"
        style={{
          maskImage: 'linear-gradient(to right, black 20%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent)'
        }}
      />
      
      {/* Progressive Blur Right */}
      <div 
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px] md:w-[250px] backdrop-blur-[12px] bg-gradient-to-l from-[#0a0a0a] to-transparent z-20"
        style={{
          maskImage: 'linear-gradient(to left, black 20%, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent)'
        }}
      />
    </section>
  );
};
