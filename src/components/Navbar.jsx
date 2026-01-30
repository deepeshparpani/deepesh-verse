import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'THE ANOMALY', href: '#hero', id: 'hero' },
  { name: 'CANON EVENTS', href: '#experience', id: 'experience' },
  { name: 'MISSIONS', href: '#projects', id: 'projects' },
  { name: 'GADGETS', href: '#skills', id: 'skills' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(navLinks[0].href);
  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(link.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- THE WEB SWING SCROLL FUNCTION ---
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // Stop default browser jump
    setIsOpen(false);   // Close mobile menu if open

    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;

    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500; // Duration in ms (2 seconds = Slow Motion)
    let startTime = null;

    // Easing function: easeInOutQuart (starts slow, speeds up, slows down)
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t * t + b;
      t -= 2;
      return -c / 2 * (t * t * t * t - 2) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Ensure we land exactly on the spot
        window.scrollTo(0, targetPosition);
        setActiveTab(targetId); 
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-spider-dark/90 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-2xl font-comic text-white tracking-wider hover:text-spider-blue transition-colors z-50 cursor-pointer">
          DP<span className="text-spider-red">.VERSE</span>
        </a>

        <div className="hidden md:flex gap-2" onMouseLeave={() => setHoveredTab(null)}>
          {navLinks.map((link) => {
            const isActive = (hoveredTab === link.href) || (!hoveredTab && activeTab === link.href);

            return (
              <a 
                key={link.name} 
                href={link.href}
                onMouseEnter={() => setHoveredTab(link.href)}
                onClick={(e) => handleNavClick(e, link.href)} // <--- ATTACHED THE CUSTOM SCROLL HERE
                className={`relative px-4 py-2 font-mono text-sm font-bold transition-colors z-10 cursor-pointer ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-spider-blue/20 border border-spider-blue -z-10 skew-x-[-10deg]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-spider-dark border-b border-spider-blue absolute w-full left-0 top-full overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)} // <--- ALSO ATTACHED TO MOBILE
                  className={`font-comic text-xl block cursor-pointer ${activeTab === link.href ? 'text-spider-blue' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;