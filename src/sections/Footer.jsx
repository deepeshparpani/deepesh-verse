import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-spider-dark pt-20 pb-10 overflow-hidden">
      
      {/* The "Daily Bugle" Paper Strip */}
      <div className="w-full bg-[#f0e6d2] text-black transform -rotate-1 py-8 border-y-4 border-black relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Animated "Breaking News" Ticker Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="whitespace-nowrap animate-marquee font-comic text-6xl">
            HIRE HIM! • SYSTEM OPTIMIZED • LATENCY REDUCED • HIRE HIM! • SYSTEM OPTIMIZED •
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* Headline Text */}
          <div className="text-center md:text-left">
            <div className="bg-spider-red text-white text-xs font-bold px-2 py-1 inline-block mb-2 rotate-2">
              BREAKING NEWS
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-comic leading-none tracking-tighter">
              ENGINEER OPTIMIZES <br/>EVERYTHING!
            </h2>
            <p className="font-mono text-sm mt-2 text-gray-800 font-bold">
              "Top 1% Talent Found in Massachusetts"
            </p>
          </div>

          {/* The Download Button */}
          <motion.a 
            href="https://drive.google.com/file/d/1ASwaWtglmk06QLA3zp1f1cpmDCwIsFMs/view?usp=sharing" 
           target="_blank"             // Opens in a new tab
            rel="noopener noreferrer"   // Security best practice
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-black text-white px-8 py-4 font-bold font-mono border-4 border-black shadow-[8px_8px_0px_0px_#ff0055] hover:shadow-[12px_12px_0px_0px_#00f3ff] transition-all cursor-pointer flex items-center gap-3"
          >
            <Download className="group-hover:animate-bounce" />
            <span>VIEW CLASSIFIED FILE</span>
            
            {/* Glitch Overlay on Button */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.a>

        </div>
      </div>

      {/* Copyright / Socials */}
      <div className="text-center mt-12 font-mono text-gray-500 text-xs">
        <p className="mb-2">DEEPESH-VERSE © 2026 // DESIGNED IN THE MULTIVERSE</p>
        <div className="flex justify-center gap-4 text-spider-blue">
          <a href="https://github.com/deepeshparpani" className="hover:text-white transition-colors">GITHUB</a>
          <span>•</span>
          <a href="https://linkedin.com/in/deepeshparpani" className="hover:text-white transition-colors">LINKEDIN</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;