import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  price?: string;
  includes: string[];
  focus?: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, price, includes, focus, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="relative p-4 md:p-12 border border-[#921713]/10 h-full flex flex-col group hover:bg-[#921713]/[0.02] transition-colors duration-500"
  >
    {/* Large Background Number */}
    <div className="absolute top-4 right-4 text-[4rem] md:text-[10rem] font-display font-bold text-[#921713]/[0.03] leading-none select-none italic">
      {number}
    </div>

    <div className="relative z-10">
      <span className="text-[9px] md:text-xs font-display uppercase tracking-[0.3em] text-[#921713]/40 mb-1 md:mb-6 block">
        {number}
      </span>
      
      <h3 className="text-sm md:text-3xl font-display font-medium text-[#921713] mb-1 md:mb-4 leading-tight">
        {title}
      </h3>
      
      {price && (
        <p className="text-[#921713] font-medium text-[9px] md:text-sm tracking-widest uppercase mb-1 md:mb-6">
          {price}
        </p>
      )}

      <p className="text-[#921713]/70 text-[10px] md:text-base leading-relaxed mb-4 md:mb-10 font-light max-w-sm">
        {description}
      </p>

      <div className="mt-auto pt-2 md:pt-8 border-t border-[#921713]/10">
        <h4 className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-[#921713]/40 font-bold mb-1 md:mb-4">Includes (Monthly)</h4>
        <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-8">
          {includes.map((item, idx) => (
            <span 
              key={idx}
              className="text-[8px] md:text-[10px] uppercase tracking-widest px-2 py-1 md:px-3 md:py-1.5 border border-[#921713]/20 text-[#921713]/80 rounded-full hover:bg-[#921713] hover:text-[#E8DEC7] transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {focus && (
          <>
            <h4 className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-[#921713]/40 font-bold mb-2 md:mb-4">Focus</h4>
            <div className="flex flex-wrap gap-1 md:gap-2">
              {focus.map((item, idx) => (
                <span 
                  key={idx}
                  className="text-[8px] md:text-[10px] uppercase tracking-widest px-2 py-1 md:px-3 md:py-1.5 bg-[#921713]/5 text-[#921713] rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  </motion.div>
);

export const RealEstateServices: React.FC = () => {
  return (
    <section className="py-16 md:py-48 bg-[#E8DEC7] border-t border-[#921713]/5">
      <div className="max-w-[1440px] mx-auto px-6">
        <header className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-12 bg-[#921713]/30" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-[#921713]/50 font-bold">What We Do</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-display font-medium text-[#921713] leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
              Visual systems for <br />
              <span className="italic relative md:static">Elite Real Estate.</span>
            </h2>
          </div>
          <p className="max-w-md text-[#921713]/60 text-xs md:text-base leading-relaxed font-light">
            We partner with ambitious agencies to build a cohesive visual identity that compounds over time into a recognizable brand asset.
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-3">
          <ServiceCard 
            number="01"
            title="Film Grade Content System™"
            description="Our proprietary boutique content engine for elite real estate. A strategic system for consistent, high-end property film and identity building."
            price="Contact for custom quote"
            includes={[
              "Branded video production",
              "Story-driven lifestyle reels",
              "Scandinavian Aesthetic photos",
              "1 Heritage Property Package",
              "Creative Brand Direction"
            ]}
            focus={["Brand Identity", "Film Grade Content", "Market Authority", "Legacy Consistency"]}
            delay={0.1}
          />
          <ServiceCard 
            number="02"
            title="Property Sale Package"
            description="Bespoke cinematic listing videos designed to present homes with emotional depth, justified premium valuations, and elite first impressions."
            price="€2500 - €3500"
            includes={[
              "High-end property film",
              "Lifestyle shots",
              "Listing photography",
              "Cinematic Drone visuals",
              "Full Creative Direction"
            ]}
            focus={["Capital Investment", "Perceived Value", "Elite Prestige", "Visual Lifestyle"]}
            delay={0.2}
          />
          <ServiceCard 
            number="03"
            title="Property Rental Package"
            description="Tailored for rental properties, created to increase attention, strengthen presentation, and attract the right audience faster."
            price="€1500 - €2000"
            includes={[
              "High-end property rental film",
              "Experience shots",
              "Airbnb/Rental photos",
              "Full Creative Direction"
            ]}
            focus={["Experience", "Escape", "Lifestyle"]}
            delay={0.3}
          />
        </div>


      </div>
    </section>
  );
};
