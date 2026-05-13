import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../../constants';

export const RealEstateTeam: React.FC = () => {
  return (
    <div className="pt-12 pb-12 md:py-48 bg-[#E8DEC7] border-t border-[#921713]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-24 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#921713]/40 mb-2 md:mb-4 block font-bold">The Hands Behind the Vision</span>
            <h2 className="text-5xl md:text-8xl font-display uppercase text-[#921713] leading-none tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Team
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:text-right"
          >
            <p className="text-xs md:text-sm text-[#921713]/60 uppercase tracking-widest font-medium">Boutique Luxury Production</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-16">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-3 md:mb-10 transition-all duration-1000 ease-out">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s] ease-out"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm md:text-2xl font-display uppercase text-[#921713] group-hover:translate-x-2 transition-transform duration-500 ease-out tracking-widest font-bold">
                  {member.name}
                </h3>
                <div className="h-px w-8 md:w-12 bg-[#921713]/20 my-2 md:my-4 group-hover:w-24 transition-all duration-700" />
                <span className="text-[8px] md:text-xs uppercase tracking-[0.3em] text-[#921713]/50 group-hover:translate-x-2 transition-transform duration-500 delay-100 font-bold">
                  {member.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
