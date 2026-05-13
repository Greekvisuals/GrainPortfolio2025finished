import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "What exactly is the Film Grade Content System™?",
    answer: "It is our proprietary boutique content engine designed specifically for elite real estate. Unlike 'batch' filming, it is a strategic monthly system for Scandinavian Real Estate video production that produces cinematic, high-impact visuals—from heritage listing films to agency brand positioning and identity building. It ensures your brand remains active and your digital presence stays as premium as the properties you represent."
  },
  {
    question: "Why invest in high-end property film and identity when standard content is cheaper?",
    answer: "In Marbella's luxury tier, the image is the valuation. Generic content suggests a generic property. Scandinavian Real Estate video production doesn't just show a space; it builds an emotional legacy that justifies premium pricing and attracts high-net-worth individuals who buy on feeling and authority, not just square meters."
  },
  {
    question: "Does high-end visual branding actually shorten the sales cycle?",
    answer: "Absolutely. Quality visuals pre-qualify the lead. By the time a client reaches out, they have already 'lived' in the space through our film. This eliminates curiosity-seekers and ensures that physical viewings are restricted to serious buyers who are already emotionally invested."
  },
  {
    question: "We have an in-house team. Why partner with Grain?",
    answer: "Consistency is the enemy of distinction. In-house teams are often optimized for volume, not impact. We are a boutique partner that focuses on 'The One'-the listing or agency campaign that needs to stand out as a masterpiece. We bring a cinematic DOP lens and high-end post-production that local teams rarely match."
  },
  {
    question: "What is the turnaround time for a luxury listing heritage film?",
    answer: "Quality cannot be rushed, but strategy requires speed. We typically deliver a first edit within 7-10 business days of the final shoot day. For agency system content (monthly retainers), we operate on a strict delivery calendar to ensure your brand presence never fades."
  },
  {
    question: "How do we measure the ROI of investing in visual identity?",
    answer: "ROI in the luxury sector is measured by two pillars: Perceived Value and Brand Compounding. Higher quality content allows you to maintain premium commission structures and attracts more exclusive listings. Your brand becomes the 'obvious choice' for elite sellers, which is the ultimate leverage."
  },
  {
    question: "Do you handle the creative direction or do we provide the brief?",
    answer: "We are a full-service creative partner. While we align with your agency's goals, we specialize in Discovery & Direction. We audit the property or brand, identify the unique 'story' that will sell, and handle everything from script to video production and finale assets. You simply provide the vision; we execute the legacy."
  },
  {
    question: "How does investing in identity and Scandinavian Real Estate video production directly impact my business?",
    answer: "Perceived value is the primary driver of high-end real estate. By elevating your visual identity with our Film Grade Content Systems, you shift from being a commodity to a premium authority. This leads to higher-quality leads, immediate trust from elite clients, and the leverage to justify premium valuations."
  },
  {
    question: "Who is this for? I’m not sure if I qualify.",
    answer: "We partner with visionary agents and agencies who understand that 'good enough' is the enemy of 'exceptional'. This is for those who value their reputation, their perceived authority, and the trust that high-end production commands. If you are seeking the lowest possible price point, we aren't the right fit. But if you value reaching your full potential, we should talk."
  }
];

const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-b border-[#921713]/10"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-10 flex items-center justify-between text-left group"
      >
        <h3 className="text-lg md:text-2xl font-display font-medium text-[#921713] pr-8 group-hover:translate-x-2 transition-transform duration-500 ease-out italic">
          {question}
        </h3>
        <div className={`p-2 rounded-full border border-[#921713]/20 text-[#921713] transition-all duration-500 ${isOpen ? 'rotate-180 bg-[#921713] text-[#E8DEC7]' : ''}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 md:pb-12 pr-12">
              <p className="text-[#921713]/70 text-sm md:text-lg leading-relaxed font-light max-w-4xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const RealEstateFAQ: React.FC = () => {
  return (
    <section className="pt-12 pb-16 md:py-48 bg-[#E8DEC7] px-6 border-t border-[#921713]/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#921713]/40 mb-3 md:mb-4 block font-bold">Addressing the Details</span>
            <h2 className="text-4xl md:text-7xl font-display uppercase text-[#921713] leading-none tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
            Commonly asked <span className="italic">questions</span>
            </h2>
          </motion.div>
        </div>

        <div className="border-t border-[#921713]/10">
          {FAQS.map((faq, index) => (
            <FAQItem 
              key={index} 
              index={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 md:mt-24 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#921713]/40 font-bold mb-3 md:mb-4">Have a question we missed?</p>
          <a 
            href="#contact" 
            className="text-sm md:text-base text-[#921713] border-b border-[#921713]/20 hover:border-[#921713] transition-all pb-1 font-medium"
          >
            Connect directly with our team
          </a>
        </motion.div>
      </div>
    </section>
  );
};
