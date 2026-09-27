import React, { useState } from 'react';
import { addContactMessage } from '../services/firebaseService';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showNote, setShowNote] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    // 1. Save to Firebase (Guaranteed Delivery)
    await addContactMessage(formObject);

    try {
      // 2. Try sending email notification via FormSubmit
      const response = await fetch("https://formsubmit.co/contact@grainxstudio.com", {
        method: "POST",
        body: formData,
      });
      
      const contentType = response.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (response.ok) {
            setStatus('success');
            (e.target as HTMLFormElement).reset();
          } else {
            console.error("Form error:", data);
            setStatus('error');
          }
      } else {
          const text = await response.text();
          if (response.ok) {
             setStatus('success');
             (e.target as HTMLFormElement).reset();
          } else {
             setStatus('error');
          }
      }
    } catch (error) {
      console.error("Submission failed:", error);
      // Even if email notification fails, message was securely recorded to Firebase
      setStatus('success');
    }
  };

  return (
    <section id="contact-section" className="py-24 md:py-32 bg-[#0a0a0a] px-6 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Studio Details */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block font-mono">
              Direct Connection
            </span>
            <h2 className="text-4xl md:text-6xl font-display uppercase text-white mb-6 leading-[1.05]">
              Let's Chat!
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md mb-10 font-light">
              No matter where you are in the creative and production journey, we are ready to dive in and get to work. 
              Fill out our form or reach out directly to begin.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-white/10">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#888888] block mb-1">New Business</span>
              <a 
                href="mailto:contact@grainxstudio.com" 
                className="text-lg text-white hover:text-[#e67828] transition-colors inline-block border-b border-white/20 pb-0.5"
              >
                contact@grainxstudio.com
              </a>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#888888] block mb-1">Direct Line / DM</span>
              <a 
                href="https://www.instagram.com/grainxstudio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-white hover:text-[#e67828] transition-colors inline-block border-b border-white/20 pb-0.5"
              >
                @grainxstudio
              </a>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#888888] block mb-1">Headquarters</span>
              <p className="text-base text-white/80">
                Marbella, Spain <span className="text-white/40">• Worldwide Available</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Pill-style Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* FormSubmit Configuration */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" defaultValue="false" />
            <input type="hidden" name="_template" defaultValue="table" />
            <input type="hidden" name="_subject" defaultValue="New Project Inquiry from Grain Portfolio" />

            {/* Brand Name */}
            <div className="space-y-2">
              <label htmlFor="brand-name" className="text-xs font-medium text-[#888888] block">
                Brand Name
              </label>
              <input 
                required
                type="text" 
                name="Brand Name" 
                id="brand-name"
                placeholder="Nike"
                className="w-full rounded-full bg-[#bbbbbb]/15 hover:bg-[#bbbbbb]/20 focus:bg-[#bbbbbb]/25 border border-white/10 focus:border-white/40 px-6 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Contact Name */}
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-xs font-medium text-[#888888] block">
                Contact Name
              </label>
              <input 
                required
                type="text" 
                name="Contact Name" 
                id="contact-name"
                placeholder="John Doe"
                className="w-full rounded-full bg-[#bbbbbb]/15 hover:bg-[#bbbbbb]/20 focus:bg-[#bbbbbb]/25 border border-white/10 focus:border-white/40 px-6 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-medium text-[#888888] block">
                Email
              </label>
              <input 
                required
                type="email" 
                name="Email" 
                id="email"
                placeholder="jane@nike.com"
                className="w-full rounded-full bg-[#bbbbbb]/15 hover:bg-[#bbbbbb]/20 focus:bg-[#bbbbbb]/25 border border-white/10 focus:border-white/40 px-6 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-medium text-[#888888] block">
                Phone
              </label>
              <input 
                required
                type="tel" 
                name="Phone" 
                id="phone"
                placeholder="+47 600 000 000"
                className="w-full rounded-full bg-[#bbbbbb]/15 hover:bg-[#bbbbbb]/20 focus:bg-[#bbbbbb]/25 border border-white/10 focus:border-white/40 px-6 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Web/Social */}
            <div className="space-y-2">
              <label htmlFor="web-social" className="text-xs font-medium text-[#888888] block">
                Web/Social
              </label>
              <input 
                required
                type="text" 
                name="Web/Social" 
                id="web-social"
                placeholder="nike.com or @handle"
                className="w-full rounded-full bg-[#bbbbbb]/15 hover:bg-[#bbbbbb]/20 focus:bg-[#bbbbbb]/25 border border-white/10 focus:border-white/40 px-6 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Estimated Budget Range Dropdown */}
            <div className="space-y-2">
              <label htmlFor="budget-range" className="text-xs font-medium text-[#888888] block">
                Estimated Budget Range
              </label>
              <div className="relative">
                <select
                  required
                  name="Estimated Budget Range"
                  id="budget-range"
                  defaultValue=""
                  className="w-full appearance-none rounded-full bg-[#bbbbbb]/15 hover:bg-[#bbbbbb]/20 focus:bg-[#bbbbbb]/25 border border-white/10 focus:border-white/40 px-6 py-3.5 pr-12 text-sm text-white focus:outline-none transition-all duration-200 cursor-pointer"
                >
                  <option value="" disabled className="bg-[#111111] text-white/40">Select…</option>
                  <option value="€3-5k" className="bg-[#111111] text-white">€3-5k</option>
                  <option value="€5-10k" className="bg-[#111111] text-white">€5-10k</option>
                  <option value="€10-20k" className="bg-[#111111] text-white">€10-20k</option>
                  <option value="€20-50k" className="bg-[#111111] text-white">€20-50k</option>
                  <option value="€50-100k" className="bg-[#111111] text-white">€50-100k</option>
                  <option value="€100k+" className="bg-[#111111] text-white">€100k+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-white/50">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Optional Project Note Toggle */}
            <div className="pt-1">
              {!showNote ? (
                <button
                  type="button"
                  onClick={() => setShowNote(true)}
                  className="text-xs text-white/40 hover:text-white/70 transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
                >
                  <span>+ Add project note</span>
                  <span className="text-white/30 text-[11px]">(optional)</span>
                </button>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="notes" className="text-xs font-medium text-[#888888] block">
                      Project Notes / Details
                    </label>
                    <button 
                      type="button" 
                      onClick={() => setShowNote(false)} 
                      className="text-[11px] text-white/30 hover:text-white/60 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                  <textarea
                    name="Project Notes"
                    id="notes"
                    rows={3}
                    placeholder="Tell us about your project vision, timeline, or key deliverables..."
                    className="w-full rounded-2xl bg-[#bbbbbb]/15 hover:bg-[#bbbbbb]/20 focus:bg-[#bbbbbb]/25 border border-white/10 focus:border-white/40 p-4 text-sm text-white placeholder:text-white/30 focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className="w-full sm:w-[240px] h-[44px] rounded-full bg-[#eeeeee] hover:bg-white text-[#010103] font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer shadow-lg shadow-black/20"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Submit'}
              </button>
            </div>

            {status === 'success' && (
              <div className="pt-4 bg-green-500/10 p-4 rounded-2xl border border-green-500/20 text-center">
                <p className="text-green-400 text-sm font-medium">✓ Inquiry submitted successfully!</p>
                <p className="text-white/60 text-xs mt-1">
                  We have securely received your details and will connect with you shortly.
                </p>
              </div>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-xs pt-2">⚠ Something went wrong. Please email us directly at contact@grainxstudio.com</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
