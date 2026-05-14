import React from 'react';
import { motion } from "framer-motion";

export const RealEstateManifesto: React.FC = () => {
  return (
    <section className="py-12 md:py-48 bg-[#E8DEC7] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-left space-y-6 md:space-y-12"
        >
          <div className="space-y-3 md:space-y-8">
            <h2 className="text-1,75xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-[#921713] leading-[1.1] md:leading-[1.05] max-w-6xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Strong visuals aren’t a luxury. <br className="hidden lg:block"/>
              They’re how serious Real Estate companies compete. We partner with ambitious <span className="italic">Scandinavian Real Estate</span> companies to build a visual identity that builds trust, elevates perception, and positions you as the obvious choice in a saturated market.
            </h2>
            
            <p className="text-sm md:text-xl lg:text-[24px] text-[#921713]/80 font-light leading-relaxed max-w-2xl italic">
              If you are showcasing your properties like everyone else, you are already not being chosen.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Aesthetic Rule */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 md:h-24 bg-[#921713]/10" />
    </section>
  );
};
