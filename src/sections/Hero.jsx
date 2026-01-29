import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';

const GlitchText = ({ text }) => {
  return (
    <div className="relative inline-block group mb-2">
      {/* Main White Text */}
      <h1 className="text-6xl md:text-8xl font-black text-white relative z-10 font-comic tracking-wider">
        {text}
      </h1>
      {/* Cyan Glitch Layer (Offset) */}
      <h1 className="text-6xl md:text-8xl font-black text-spider-blue absolute top-0 left-0 -z-10 opacity-70 translate-x-[3px] translate-y-[3px] font-comic">
        {text}
      </h1>
      {/* Pink Glitch Layer (Offset) */}
      <h1 className="text-6xl md:text-8xl font-black text-spider-red absolute top-0 left-0 -z-10 opacity-70 -translate-x-[3px] -translate-y-[3px] font-comic">
        {text}
      </h1>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden p-8 bg-dots">
      
      {/* Background Ambience (The "Spider-Sense" Glow) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-spider-blue blur-[100px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-spider-red blur-[100px] rounded-full mix-blend-screen animate-pulse" />
      </div>

      <div className="z-10 text-center max-w-4xl flex flex-col items-center">
        
        {/* The Sticker Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="inline-block bg-spider-yellow text-black font-black px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_white]"
        >
          MASTER'S STUDENT @ UMASS AMHERST
        </motion.div>

        {/* The Name */}
        <div className="flex flex-col items-center leading-none mb-6">
            <GlitchText text="DEEPESH" />
            <GlitchText text="PARPANI" />
        </div>

        {/* The Intro Box (Comic Narration Box) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/40 backdrop-blur-sm border-l-4 border-spider-blue p-6 max-w-2xl text-left"
        >
          <p className="font-mono text-gray-300 text-lg md:text-xl leading-relaxed">
            <span className="text-spider-blue font-bold">Protocol:</span> Distributed Systems Engineer.<br/>
            <span className="text-spider-red font-bold">Mission:</span> Identifying hazardous NEOs & optimizing latency.<br/>
            <span className="text-gray-400 text-sm mt-2 block border-t border-gray-700 pt-2">
              // Formerly reducing data exposure by 55% at Volkswagen ITS.
            </span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a href="https://github.com/deepeshparpani" target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 bg-white text-black font-black px-6 py-3 hover:bg-spider-blue hover:text-white transition-all shadow-[4px_4px_0px_0px_#ff0055] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#ff0055]">
            <Github size={20} /> GITHUB
          </a>
          <a href="https://linkedin.com/in/deepeshparpani" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-black px-6 py-3 hover:bg-white hover:text-black transition-all hover:translate-y-[-2px]">
            <Linkedin size={20} /> LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;