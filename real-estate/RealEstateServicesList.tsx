import React from 'react';
import { motion } from 'framer-motion';

const REAL_ESTATE_SERVICES_LIST = [
  "High-End Property Sale Films",
  "Luxury Rental Films",
  "Agent Advertisement Films",
  "Brand Films",
  "Agency & Founder Story Films",
  "Branded Video Content",
  "Professional Property Photography"
];

export const RealEstateServicesList: React.FC = () => {
  return (
    <section className="bg-[#FAF7F0] border-t border-[#921713]/5 py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="max-w-xl">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-8 bg-[#921713]/30" />
                <span className="text-[10px] uppercase tracking-[0.6em] text-[#921713]/50 font-bold">
                  Bespoke Solutions
                </span>
             </div>
            <h2 className="text-3xl md:text-5xl font-display leading-[1.1] text-[#921713] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Elevate your market <br className="hidden md:block" />
              perception with <span className="italic">specialist production</span>.
            </h2>
            <p className="text-[#921713]/70 leading-relaxed font-light text-lg">
              We develop cinematic visual foundations that shape how real estate brands are perceived. Rather than producing disposable content, we focus on creating high-end assets that command authority and build long-term brand equity.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-display font-medium text-[#921713] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
              {REAL_ESTATE_SERVICES_LIST.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="text-lg text-[#921713] border-b border-[#921713]/5 pb-3 hover:pl-2 transition-all duration-300 cursor-default font-medium"
                   style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
