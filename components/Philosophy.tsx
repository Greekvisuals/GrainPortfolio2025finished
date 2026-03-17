import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/10 bg-[#0c0c0c] relative overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top left orange glow */}
        <div 
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] rounded-full bg-[#e67828] opacity-[0.12] blur-[120px] mix-blend-screen animate-pulse" 
          style={{ animationDuration: '6s' }}
        />
        {/* Center right deep red/orange glow */}
        <div 
          className="absolute top-[10%] -right-[15%] w-[70%] h-[80%] rounded-full bg-[#b4280a] opacity-[0.15] blur-[150px] mix-blend-screen animate-pulse" 
          style={{ animationDuration: '8s', animationDelay: '1s' }}
        />
        {/* Bottom center subtle glow */}
        <div 
          className="absolute -bottom-[30%] left-[15%] w-[70%] h-[60%] rounded-full bg-[#d24614] opacity-[0.1] blur-[100px] mix-blend-screen animate-pulse" 
          style={{ animationDuration: '7s', animationDelay: '2s' }}
        />
      </div>

      {/* Cinematic Shapes & Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Center Crosshairs */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
        
        {/* Large Rotating Dashed Ring (Left) */}
        <div className="absolute top-1/2 left-[25%] w-[600px] h-[600px] border border-white/[0.03] border-dashed rounded-full -translate-x-1/2 -translate-y-1/2 animate-[spin_120s_linear_infinite]" />
        <div className="absolute top-1/2 left-[25%] w-[400px] h-[400px] border border-[#e67828]/[0.05] rounded-full -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite_reverse]" />

        {/* Geometric Diamond (Right) */}
        <div className="absolute top-1/2 right-[5%] w-[500px] h-[500px] border border-white/[0.04] rotate-45 -translate-y-1/2" />

        {/* Registration Marks (+) */}
        <div className="absolute top-12 left-12 text-white/20 text-xs font-mono tracking-widest leading-none">+</div>
        <div className="absolute top-12 right-12 text-white/20 text-xs font-mono tracking-widest leading-none">+</div>
        <div className="absolute bottom-12 left-12 text-white/20 text-xs font-mono tracking-widest leading-none">+</div>
        <div className="absolute bottom-12 right-12 text-white/20 text-xs font-mono tracking-widest leading-none">+</div>
        
        {/* Tech/Film Data overlay */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/10 text-[10px] font-mono tracking-[0.3em] uppercase">
          REC // 00:00:00:00 // 24FPS
        </div>
      </div>

      {/* Textured Background Overlay (Noise) */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Logo Side */}
          <div className="flex justify-center items-center">
            <div className="logo-halation-strong">
              {/* Replace this src with the actual URL of the uploaded G logo */}
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Grain%20Logo%202.png?alt=media&token=6f4ccc0c-2760-43c8-aecd-cd62a1ab121f" 
                alt="Grain Logo" 
                className="w-48 md:w-64 h-auto brightness-0 invert"
                onError={(e) => {
                  // Fallback if the guessed URL doesn't work
                  (e.target as HTMLImageElement).src = "https://placehold.co/400x400/transparent/white?text=G";
                }}
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-display uppercase text-white mb-6">
              The Grain Philosophy
            </h2>
            <h3 className="text-xl md:text-2xl font-display text-white/80 mb-6 uppercase tracking-wide">
              Texture. Authenticity. Imperfection.
            </h3>
            <div className="space-y-6 text-white/60 leading-relaxed max-w-lg">
              <p>
                "Grain" isn't just a name; it's the foundation of our visual identity. In an era of sterile, hyper-polished digital content, we believe in the power of texture. Film grain represents authenticity, warmth, and the human element.
              </p>
              <p>
                It's the subtle imperfections that make a story feel real. We don't just capture pristine pixels; we craft cinematic experiences that have depth, character, and a tactile quality you can almost feel.
              </p>
              <p className="text-white/80 font-display text-xl uppercase tracking-widest border-l-2 border-white/20 pl-6 mt-10">
                "We don't build disposable content.<br/>We build visual foundations with soul."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
