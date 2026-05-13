import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Film Grade Content System™",
    description: "A library of versatile visual assets built to work across marketing, sales, social, paid media, and recruiting - designed to compound over time, not collect dust after one campaign.",
    tags: ["Social", "Paid Media", "Sales Enablement", "Recruiting", "Website"]
  },
  {
    number: "02",
    title: "Campaign Package",
    description: "High-impact spots built to perform - whether it's a product launch, a campaign anchor, or a brand moment that needs to land exactly right.",
    tags: ["Product", "Campaign", "Testimonial", "Event"]
  },
  {
    number: "03",
    title: "Brand Films",
    description: "A cinematic look at who you are, what you've built, and why it matters. Designed to anchor your brand identity and give your audience a reason to believe.",
    tags: ["Origin Story", "Culture Piece", "Mission Piece", "Documentary"]
  }
];

export const ServicesShowcase: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] border-y border-white/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Label */}
        <div className="px-6 md:px-12 pt-12 md:pt-24 mb-16">
          <span className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-bold">
            What we do
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-white/10">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative p-8 md:p-12 lg:p-16 group min-h-[500px] flex flex-col border-white/10 ${
                index !== SERVICES_DATA.length - 1 ? 'lg:border-r border-b lg:border-b-0' : ''
              }`}
            >
              {/* Background Number */}
              <div className="absolute top-8 right-8 lg:top-12 lg:right-12 select-none pointer-events-none overflow-hidden">
                <span 
                  className="text-[120px] md:text-[180px] lg:text-[220px] font-display italic text-white/[0.03] leading-none block transform translate-x-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <span className="text-xs font-mono text-white/30 block mb-12">
                  {service.number}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-sm mb-12">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-auto pt-12 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1.5 border border-white/10 rounded-sm text-[10px] uppercase tracking-wider text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Hover highlight */}
              <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Detailed Services List Section */}
        <div className="border-t border-white/10 px-6 md:px-12 py-10 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
            <div className="lg:col-span-4">
               <h3 className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-bold mb-4 md:mb-8">
                Capabilities
              </h3>
              <h4 className="text-2xl md:text-3xl font-display text-white/90 leading-tight">
                Our core expertise in <span className="italic">cinematic production</span>.
              </h4>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-12">
                {SERVICES.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/5 pb-2 md:pb-4 group cursor-default"
                  >
                    <span className="text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-300">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
