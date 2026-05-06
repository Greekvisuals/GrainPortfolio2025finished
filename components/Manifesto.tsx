import React from 'react';
import { motion } from 'motion/react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-[#0a0a0a] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-left"
        >
          <p className="text-2xl md:text-3xl lg:text-[34px] font-medium tracking-tight text-white leading-[1.1] max-w-6xl" style={{ fontFamily: "'Playfair Display', serif" }}>
           Strong visuals aren’t optional. They’re how serious brands compete. <br className="hidden lg:block"/>
           We partner with ambitious brands to build a visual presence that<br className="hidden lg:block"/>
           earns <span className="italic">credibility</span>, deepens <span className="italic">trust</span>, and gives your team assets that work<br className="hidden lg:block"/>
           across every channel you show up on -  not just once, but over time. <br className="hidden lg:block"/>
          
          </p>
        </motion.div>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};
