import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { addContactMessage } from '../../services/firebaseService';

export const RealEstateContact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    // 1. Save to Firebase
    await addContactMessage(formObject);

    try {
      // 2. Try sending email notification via FormSubmit
      const response = await fetch("https://formsubmit.co/contact@grainxstudio.com", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus('success'); // Still saved to Firebase
    }
  };

  return (
    <section id="contact" className="py-24 md:py-48 bg-[#E8DEC7] px-6 border-t border-[#921713]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.8em] text-[#921713]/40 mb-6 md:mb-8 block font-bold">Secure Your Edge</span>
          <h2 className="text-4xl md:text-7xl font-display uppercase text-[#921713] mb-8 leading-[0.9] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
            Partner with <br />
            <span className="italic">the elite.</span>
          </h2>
          <p className="text-[#921713]/70 text-base md:text-lg leading-relaxed max-w-md mb-12 font-light">
            Average production is no longer enough to compete in Marbella's luxury tier. 
            Partner with us to build a visual legacy that commands attention and justifies premium valuations.
          </p>
          
          <div className="space-y-8">
            <div className="flex flex-col gap-2 group cursor-pointer">
              <span className="text-[10px] uppercase tracking-widest text-[#921713]/40 font-bold">Direct Line</span>
              <a href="mailto:contact@grainxstudio.com" className="text-xl md:text-2xl text-[#921713] font-medium border-b border-[#921713]/10 w-fit pb-1 group-hover:border-[#921713] transition-all duration-500">
                contact@grainxstudio.com
              </a>
            </div>
            
            <div className="flex flex-col gap-2 group cursor-pointer">
              <span className="text-[10px] uppercase tracking-widest text-[#921713]/40 font-bold">IG Channel</span>
              <a href="https://www.instagram.com/grainxstudio/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-[#921713] font-medium border-b border-[#921713]/10 w-fit pb-1 group-hover:border-[#921713] transition-all duration-500">
                @grainxstudio
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/40 backdrop-blur-sm px-6 py-8 md:p-12 border border-[#921713]/10 relative group"
        >
          {/* Subtle Accent Line */}
          <div className="absolute top-0 right-0 w-px h-0 bg-[#921713] group-hover:h-full transition-all duration-1000" />
          <div className="absolute bottom-0 left-0 w-0 h-px bg-[#921713] group-hover:w-full transition-all duration-1000" />

           <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8">
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Real Estate Inquiry from Grain" />

              <div className="space-y-1">
                <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-[#921713]/60 font-bold">Name</label>
                <input 
                  required
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-[#921713]/10 py-2 md:py-4 text-[#921713] placeholder:text-[#921713]/20 focus:outline-none focus:border-[#921713] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-[#921713]/60 font-bold">Email</label>
                <input 
                  required
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-[#921713]/10 py-2 md:py-4 text-[#921713] placeholder:text-[#921713]/20 focus:outline-none focus:border-[#921713] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-[#921713]/60 font-bold">Subject</label>
                <input 
                  required
                  type="text" 
                  name="subject" 
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-transparent border-b border-[#921713]/10 py-2 md:py-4 text-[#921713] placeholder:text-[#921713]/20 focus:outline-none focus:border-[#921713] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-[#921713]/60 font-bold">Message</label>
                <textarea 
                  required
                  name="message" 
                  id="message"
                  rows={3}
                  placeholder="Describe your vision or property..."
                  className="w-full bg-transparent border-b border-[#921713]/10 py-2 md:py-4 text-[#921713] placeholder:text-[#921713]/20 focus:outline-none focus:border-[#921713] transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className="w-full py-4 md:py-6 bg-[#921713] text-[#E8DEC7] hover:bg-[#a81c17] transition-all uppercase text-[10px] tracking-[0.4em] font-bold disabled:opacity-50 disabled:cursor-not-allowed group-hover:shadow-2xl group-hover:shadow-[#921713]/20"
              >
                {status === 'sending' ? 'Initiating...' : status === 'success' ? 'Connection Established' : 'Initiate Conversation'}
              </button>

              {status === 'success' && (
                <div className="text-center pt-4 bg-[#921713]/5 p-4 rounded border border-[#921713]/10">
                  <p className="text-[#921713] text-sm font-medium">✓ Transmission Successful</p>
                  <p className="text-[#921713]/60 text-[10px] mt-2 uppercase tracking-widest">
                    We will review your submission and connect within 24 hours.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-[10px] text-center pt-4 uppercase tracking-widest">⚠ Transmission failed. Please email directly.</p>
              )}
           </form>
        </motion.div>
      </div>
    </section>
  );
};
