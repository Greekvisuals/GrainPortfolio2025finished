import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface GlowingButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({ onClick, children, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative text-xs md:text-sm font-medium tracking-[0.2em] uppercase rounded-full h-12 md:h-14 p-1 pl-6 pr-14 md:pl-8 md:pr-16 group transition-all duration-500 hover:pl-14 hover:pr-6 md:hover:pl-16 md:hover:pr-8 w-fit overflow-hidden cursor-pointer btn-glow-red flex items-center ${className}`}
    >
      <span className="relative z-10 transition-all duration-500">
        {children}
      </span>
      <div className="absolute right-1 w-10 h-10 md:w-12 md:h-12 bg-white text-[#960a0a] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] md:group-hover:right-[calc(100%-52px)] group-hover:rotate-45 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
  <path d="M7 7h10v10"/>
  <path d="M7 17 17 7"/>
</svg>
      </div>
    </button>
  );
};
