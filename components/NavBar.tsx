import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

interface NavBarProps {
  onUploadClick: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onUploadClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isRealEstate = location.pathname === '/real-estate';

  const navLinks = [
    { name: 'Projects', href: '/#project-index' },
    { name: 'Real Estate', href: '/real-estate' },
    { name: 'About', href: '#about-section', isScroll: true },
    { name: 'Assets', href: '/assets/' },
    { name: 'Contact', href: '/#contact-section' },
  ];

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    if (location.pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else if (href.startsWith('#')) {
      // If we are on another page, navigate to home with hash
      window.location.href = '/' + href;
    }
  };

  const themeColors = isRealEstate 
    ? {
        nav: "text-[#921713]",
        button: "border-[#921713]/30 text-[#921713] hover:bg-[#921713] hover:text-[#E8DEC7]",
        active: "text-[#921713]",
        blend: ""
      }
    : {
        nav: "text-white",
        button: "border-white/30 text-white hover:bg-white hover:text-black",
        active: "text-white",
        blend: "mix-blend-difference"
      };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + (i * 0.1),
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[70] flex justify-between items-center px-6 py-6 ${themeColors.blend} ${themeColors.nav}`}>
        <a 
          href="/"
          className="text-2xl font-bold font-display tracking-tighter hover:opacity-70 transition-opacity"
        >
          GRAIN.
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            link.isScroll ? (
              <button 
                key={link.name}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs uppercase tracking-widest font-medium opacity-60 hover:opacity-100 transition-colors"
              >
                {link.name}
              </button>
            ) : link.href.startsWith('/#') ? (
              <a 
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium opacity-60 hover:opacity-100 transition-colors"
              >
                {link.name}
              </a>
            ) : link.name === 'Assets' ? (
              <a 
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium opacity-60 hover:opacity-100 transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                to={link.href}
                className={`text-xs uppercase tracking-widest font-medium transition-colors ${link.href === location.pathname ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
              >
                {link.name}
              </Link>
            )
          ))}
          <button 
            onClick={onUploadClick}
            className={`border rounded-full px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${themeColors.button}`}
          >
            Upload Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-[80] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`fixed inset-0 z-[65] flex flex-col items-center justify-center pt-20 ${isRealEstate ? 'bg-[#FAF7F0]' : 'bg-[#0a0a0a]'}`}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                link.isScroll ? (
                  <motion.div key={link.name} custom={i} variants={linkVariants}>
                    <button
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`text-2xl font-display font-medium tracking-tight hover:italic transition-all ${isRealEstate ? 'text-[#921713]' : 'text-white'}`}
                    >
                      {link.name}
                    </button>
                  </motion.div>
                ) : link.href.startsWith('/#') ? (
                  <motion.div key={link.name} custom={i} variants={linkVariants}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-2xl font-display font-medium tracking-tight hover:italic transition-all ${isRealEstate ? 'text-[#921713]' : 'text-white'}`}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ) : link.name === 'Assets' ? (
                  <motion.div key={link.name} custom={i} variants={linkVariants}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-2xl font-display font-medium tracking-tight hover:italic transition-all ${isRealEstate ? 'text-[#921713]' : 'text-white'}`}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ) : (
                  <motion.div key={link.name} custom={i} variants={linkVariants}>
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-2xl font-display font-medium tracking-tight hover:italic transition-all ${isRealEstate ? 'text-[#921713]' : 'text-white'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`absolute bottom-12 text-[10px] uppercase tracking-[0.3em] opacity-30 ${isRealEstate ? 'text-[#921713]' : 'text-white'}`}
            >
              Cinematic Brand Storytelling
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
