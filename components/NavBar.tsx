import React from 'react';

interface NavBarProps {
  onUploadClick: () => void;
  onHomeClick: () => void;
  onProjectsClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onUploadClick, onHomeClick, onProjectsClick, onAboutClick, onContactClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 py-6 mix-blend-difference text-white">
      <button 
        onClick={onHomeClick}
        className="text-2xl font-bold font-display tracking-tighter hover:opacity-70 transition-opacity"
      >
        GRAIN.
      </button>
      
      <div className="flex gap-8 items-center">
        <button 
          onClick={onProjectsClick}
          className="text-xs uppercase tracking-widest font-medium hover:text-gray-300 transition-colors hidden md:block"
        >
          Projects
        </button>
        <button 
          onClick={onAboutClick}
          className="text-xs uppercase tracking-widest font-medium hover:text-gray-300 transition-colors hidden md:block"
        >
          About
        </button>
        <button 
          onClick={onContactClick}
          className="text-xs uppercase tracking-widest font-medium hover:text-gray-300 transition-colors hidden md:block"
        >
          Contact
        </button>
        <button 
          onClick={onUploadClick}
          className="border border-white/30 rounded-full px-5 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Upload Project
        </button>
      </div>
    </nav>
  );
};