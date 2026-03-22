import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What makes your video production in Marbella different from everyone else?",
    answer: "As a premier video production company in Marbella, we don't just shoot videos; we craft cinematic brand films. Our approach combines high-end cinema cameras, meticulous lighting, and Hollywood-grade color grading to ensure your brand stands out globally. We understand the unique luxury market of Marbella and translate that into visual storytelling."
  },
  {
    question: "Do you only produce brand films in Marbella?",
    answer: "While our roots and primary studio are based in Marbella, Spain, we produce cinematic brand films worldwide. Our team frequently travels internationally for clients who demand the highest tier of visual storytelling, bringing our signature cinematic aesthetic to global campaigns."
  },
  {
    question: "What is a cinematic brand film?",
    answer: "A cinematic brand film is a high-end promotional video that utilizes the techniques, equipment, and narrative structures of feature films. Unlike standard corporate videos, cinematic brand films focus on emotional resonance, breathtaking visuals, and compelling storytelling to elevate your brand's perception and connect deeply with your audience."
  },
  {
    question: "How long does a typical video production project take?",
    answer: "For a premium brand film in Marbella or internationally, the timeline typically ranges from 2 to 4 weeks. This includes pre-production (concept development, scripting, location scouting), production (filming), and post-production (editing, sound design, color grading). We ensure every frame meets our rigorous cinematic standards."
  },
  {
    question: "Do you handle the entire video production process?",
    answer: "Yes, we are a full-service video production agency. From the initial creative concept to the final color-graded cinematic brand film, we handle everything. This includes casting, location scouting in Marbella and beyond, directing, filming, and comprehensive post-production."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/10" id="faq-section">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium uppercase tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to know about our cinematic brand films and video production services in Marbella and worldwide.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-white/60" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
