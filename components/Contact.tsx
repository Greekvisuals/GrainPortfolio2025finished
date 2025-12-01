import React, { useState, useEffect } from 'react';

export const Contact: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Check URL for success parameter after redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === 'true') {
      setShowSuccess(true);
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  return (
    <section id="contact-section" className="py-24 bg-[#0a0a0a] px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-display uppercase text-white mb-6">Let's Connect</h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-md mb-8">
            Got a vision for a project? We'd love to help you bring it to life. 
            Fill out the form or send us an email directly.
          </p>
          
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-white/40">Email Us</span>
            <a href="mailto:contact@grainxstudio.com" className="text-xl text-white hover:text-[#0099ff] transition-colors">
              contact@grainxstudio.com
            </a>
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-sm border border-white/5">
           {/* KEY FIX: Use native form submission with action and method */}
           <form 
             action="https://formsubmit.co/contact@grainxstudio.com" 
             method="POST"
             className="space-y-6"
           >
              {/* FormSubmit Configuration */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Submission from Grain Portfolio" />
              {/* Redirect back to your site after submission */}
              <input 
                type="hidden" 
                name="_next" 
                value={typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}?submitted=true` : ''} 
              />

              <div className="space-y-1">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/60">Name</label>
                <input 
                  required
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-[#0a0a0a] border border-white/10 p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/60">Email</label>
                <input 
                  required
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#0a0a0a] border border-white/10 p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-white/60">Subject</label>
                <input 
                  required
                  type="text" 
                  name="subject" 
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-[#0a0a0a] border border-white/10 p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/60">Message</label>
                <textarea 
                  required
                  name="message" 
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#0a0a0a] border border-white/10 p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-white text-black hover:bg-gray-200 transition-all uppercase text-xs tracking-widest font-bold"
              >
                Send Message
              </button>

              {showSuccess && (
                <div className="text-center pt-2 bg-green-500/10 p-3 rounded border border-green-500/20">
                  <p className="text-green-400 text-sm font-medium">✓ Form submitted!</p>
                  <p className="text-white/60 text-xs mt-2 leading-relaxed">
                    <strong>⚠️ ACTION REQUIRED:</strong> Check your inbox at <span className="text-white">contact@grainxstudio.com</span> (including spam) for an <strong>activation email from FormSubmit</strong>. You MUST click the activation link or messages won't be received!
                  </p>
                </div>
              )}
           </form>
        </div>
      </div>
    </section>
  );
}