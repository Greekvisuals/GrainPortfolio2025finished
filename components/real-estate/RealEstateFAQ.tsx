import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
  question: "What is the Film Grade Content System™?",
    answer: "It’s our monthly content partnership for real estate agencies that want to build a consistent and strong visual identity online. We deliver listing films, agent films and brand content that make your listings and brand look trustworthy, premium and more memorable in a highly competitive market. It ensures your digital presence is as refined as the properties you represent. Not needing to worry about what to post next."
  },
  {
    question: "Why invest in high-end visuals when standard content is cheaper?",
    answer: "Because presentation affects perception. High-end visuals help your agency look more professional, justify premium commissions, attract high-net-worth individuals, and make properties feel more valuable. In a competitive market, average content is easy to ignore. But emotional content that makes you feel something is hard to ignore." 
  },
  {
    question: "How does this impact the sales cycle for listings?",
    answer: "Quality visuals pre-qualify the lead. By the time a client reaches out, they have already 'lived' in the space through our film. This eliminates curiosity-seekers and ensures that physical viewings are restricted to serious buyers who are already emotionally invested, often leading to faster decisions and higher offers." 
  },
  {
    question: "We already have an in-house team. Why partner with Grain?",
    answer: "Efficiency is the enemy of distinction. In-house teams are often optimized for speed and volume. We are a boutique partner focusing on impact. We position your most important listings as masterpieces, setting a standard that standard in-house equipment and workflows rarely reach." 
  },
  {
    question: "What is the turnaround time for a high-end property film?",
    answer: "We usually deliver the first edit within 7 business days after filming. For monthly partners, we work on a structured content schedule to keep your brand consistently active online."
  },
  {
    question: "How do we measure the ROI of investing in visual identity?",
    answer: "ROI is measured by perceived authority. Investing in a strong visual identity allows you to maintain premium commission structures and attracts more exclusive listings. When you look like the market leader, you become the 'obvious choice' for serious sellers, providing the ultimate leverage in listing presentations."
  },
  {
    question: "Do you handle the creative direction or do we provide the brief?",
    answer: "We handle the full creative process. We work with your goals, develop the concept, plan the shoot, and deliver the final content. You don’t need to manage the creative side yourself."
  },
  {
    question: "Who is this for? I’m not sure if I qualify.",
    answer: "We partner with Scandinavian agents and agencies who understand that 'good enough' is the enemy of the extraordinary. This is for those who care about how they show up, and understand the power of an online presence in today's digital society. If you are seeking the cheapest option, we aren't the right fit. But if you want to reach your brand's full potential, we should connect further."
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
