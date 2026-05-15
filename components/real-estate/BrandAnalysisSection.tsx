import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, CheckCircle2, ShieldCheck, BarChart4 } from 'lucide-react';
import { GlowingButton } from '../GlowingButton';

const PillBadge: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#921713]/10 bg-[#921713]/5 text-[#921713] relative group overflow-hidden">
    <div className="absolute inset-0 bg-[#921713]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
    <span className="text-[#921713] relative z-10">{icon}</span>
    <span className="text-[10px] uppercase tracking-[0.2em] font-bold relative z-10">{label}</span>
  </div>
);

export const BrandAnalysisSection: React.FC = () => {
  const points = [
    { label: "Visual Identity Audit", desc: "A definitive audit of your Scandinavian Real Estate video production and online prestige." },
    { label: "Film Grade Potential", desc: "Analyzing the cinematic quality and 'Wow' factor of your current listing videos." },
    { label: "Conversion Strategy", desc: "Targeted strategies for turning property films into high-net-worth real estate leads." },
    { label: "Strategic Identity Roadmap", desc: "A bespoke content plan for elite property listing videos and long-term brand building." },
  ];

  return (
    <section className="py-10 md:py-48 bg-[#FAF7F0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="hidden lg:block h-[1px] w-12 bg-[#921713]/30" />
                <span className="text-[8px] uppercase tracking-[0.6em] text-[#921713]/50 font-bold">The Strategic Content Tool</span>
                <div className="lg:hidden h-[1px] w-12 bg-[#921713]/30" />
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-medium text-[#921713] leading-[1.1] md:leading-[1] mb-8 md:mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="sr-only">High End Property Film & Identity Analysis — </span>
                <span className="md:whitespace-nowrap">Try our Free Real</span><br />
                <span className="italic">Estate Analysis.</span>
              </h2>
              
              <div className="space-y-8 md:space-y-12 mb-12 md:mb-16 flex flex-col items-center lg:items-start">
                <p className="text-lg md:text-xl text-[#921713]/80 font-light leading-relaxed italic">
                  "Most realtors market property. Elite realtors market an envy-driven lifestyle."
                </p>
                <p className="text-sm md:text-base text-[#921713]/70 font-light leading-relaxed max-w-md">
                  Our proprietary analysis tool identifies the critical gap between your current online perception and where you need to be to attract Marbella's elite.
                </p>
              </div>

              {/* Badges from Reference */}
              <div className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-12 justify-center lg:justify-start">
                <PillBadge icon={<CheckCircle2 size={12} />} label="Free Analysis" />
                <PillBadge icon={<ShieldCheck size={12} />} label="100% Personalized" />
                <PillBadge icon={<BarChart4 size={12} />} label="Trained on Top Marketers" />
              </div>

              <div className="flex justify-center lg:justify-start">
                <GlowingButton 
                  onClick={() => window.open('https://www.grainanalysis.com/', '_blank')}
                  className="!h-14 md:!h-16 !text-[10px] !tracking-[0.4em]">
                  Get My Analysis
                </GlowingButton>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 lg:gap-16">
              {points.map((point, i) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="group"
                >
                  <div className="mb-1 md:mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-xl md:text-3xl font-display italic text-[#921713]">0{i + 1}.</span>
                  </div>
                  <h4 className="text-sm md:text-lg font-display text-[#921713] mb-1 md:mb-3 uppercase tracking-widest">{point.label}</h4>
                  <p className="text-[11px] md:text-sm text-[#921713]/60 font-light leading-relaxed md:leading-loose">{point.desc}</p>
                  <div className="mt-2 md:mt-8 h-[1px] w-0 bg-[#921713]/20 group-hover:w-full transition-all duration-1000" />
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="hidden md:block mt-16 md:mt-24 p-8 md:p-12 bg-[#E8DEC7]/30 border border-[#921713]/5 relative overflow-hidden"
            >
               <div className="relative z-10">
                 <p className="text-xl md:text-3xl font-display italic text-[#921713] mb-4">"Instantly receive recommendations to improve your online credibility."</p>
                 <span className="text-[10px] uppercase tracking-[0.4em] text-[#921713]/40 font-bold">— Strategic Insight</span>
               </div>
               <div className="absolute top-0 right-0 p-8 md:p-12 text-[#921713]/5 rotate-12">
                  <Fingerprint size={80} />
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
