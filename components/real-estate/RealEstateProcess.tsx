import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProcessItemProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  delay?: number;
}

const ProcessRow: React.FC<ProcessItemProps> = ({ number, title, subtitle, description, items, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="grid grid-cols-1 md:grid-cols-12 border-b border-[#921713]/10"
  >
    <div className="md:col-span-5 px-6 py-4 md:p-16 border-r-0 md:border-r border-[#921713]/10 bg-[#E8DEC7]">
      <span className="text-[10px] uppercase tracking-[0.4em] text-[#921713]/40 font-bold mb-1 md:mb-8 block">
        {number}
      </span>
      <h3 className="text-lg md:text-4xl font-display font-medium text-[#921713] mb-1 md:mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#921713]/60 mb-2 md:mb-8 font-bold">
        {subtitle}
      </p>
      <p className="text-[#921713]/70 text-[10px] md:text-base leading-relaxed font-light max-w-sm">
        {description}
      </p>
    </div>
    
    <div className="md:col-span-7 px-6 py-4 md:p-16 flex items-center bg-[#E8DEC7] group hover:bg-[#921713]/[0.02] transition-colors duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1 md:gap-y-6 w-full">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 group/item">
            <div className="w-4 h-4 rounded-full border border-[#921713]/20 flex items-center justify-center group-hover/item:border-[#921713]/40 transition-colors">
              <Check className="w-2 h-2 text-[#921713]" strokeWidth={3} />
            </div>
            <span className="text-[10px] md:text-sm uppercase tracking-widest text-[#921713]/80 font-medium group-hover/item:text-[#921713] transition-colors">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const RealEstateProcess: React.FC = () => {
  return (
    <section className="bg-[#E8DEC7] border-t border-[#921713]/5">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-32">
        <header className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-12 bg-[#921713]/30" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-[#921713]/50 font-bold">How We Work</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-display font-medium text-[#921713] leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
              The architecture of <br />
              <span className="italic relative md:static">Our Process.</span>
            </h2>
          </div>
          <p className="max-w-md text-[#921713]/60 text-xs md:text-base leading-relaxed font-light">
            Precision in every frame. We follow a rigorous creative methodology to ensure every asset reinforces your market positioning.
          </p>
        </header>
        
        <div className="border-t border-l border-r border-[#921713]/10 overflow-hidden">
          <ProcessRow 
            number="01"
            title="Discovery & Direction"
            subtitle="WHERE IT STARTS"
            description="Every listing or agency campaign begins with vision. We align on creative direction and planning so nothing is left to chance on set."
            items={[
              "Creative Direction",
              "Concept Development",
              "Script & Storyboarding",
              "Location Scouting",
              "Lighting Analysis",
              "Brand Alignment"
            ]}
          />
          <ProcessRow 
            number="02"
            title="The Production"
            subtitle="WHAT WE CAPTURE"
            description="This is the craft. High-end cinematography and editorial lighting designed to capture the property and lifestyle in their most elevated form."
            items={[
              "Cinema-grade Capture",
              "High-End Cinematography",
              "Lifestyle Photography",
              "Drone Aerials (4K)",
              "Detail & Character Shots",
              "Agent Brand Profiles"
            ]}
          />
          <ProcessRow 
            number="03"
            title="Refinement & Systems"
            subtitle="HOW IT SCALES"
            description="We build content systems and libraries of versatile assets designed to work across every channel, ensuring your brand shows up with absolute consistency."
            items={[
              "Editorial Color Grading",
              "Sound Design",
              "Social-First Formats",
              "Ad-Ready Exports",
              "Brand Consistency Check",
              "Ongoing Asset Systems"
            ]}
          />
        </div>
      </div>
    </section>
  );
};
