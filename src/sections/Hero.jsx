import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
// IMPORT YOUR IMAGE HERE (Make sure the path matches your file)
import profilePic from '../assets/profile.png'; 

const GlitchText = ({ text }) => {
  return (
    <div className="relative inline-block group mb-2">
      <h1 className="text-5xl md:text-8xl font-black text-white relative z-10 font-comic tracking-wider">
        {text}
      </h1>
      <h1 className="text-5xl md:text-8xl font-black text-spider-blue absolute top-0 left-0 -z-10 opacity-70 translate-x-[3px] translate-y-[3px] font-comic">
        {text}
      </h1>
      <h1 className="text-5xl md:text-8xl font-black text-spider-red absolute top-0 left-0 -z-10 opacity-70 -translate-x-[3px] -translate-y-[3px] font-comic">
        {text}
      </h1>
    </div>
  );
};

const Hero = () => {
  return (
    // ADDED ID="HERO" FOR NAVIGATION
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden p-8 bg-dots pt-24">
      
      {/* Spider-Sense Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-spider-blue blur-[100px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-spider-red blur-[100px] rounded-full mix-blend-screen animate-pulse" />
      </div>

      <div className="z-10 text-center max-w-4xl flex flex-col items-center">
        
        {/* --- PROFILE PICTURE SECTION --- */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-40 h-40 md:w-56 md:h-56 mb-8"
        >
          {/* The Image Container with Comic Border */}
          <div className="w-full h-full rounded-full border-4 border-white overflow-hidden relative z-10 bg-gray-800">
             {/* Replace with your actual image variable */}
            <img src="https://github.com/deepeshparpani.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          
          {/* Glitch Shadows behind the image */}
          <div className="absolute inset-0 rounded-full border-4 border-spider-blue translate-x-1 translate-y-1 -z-10" />
          <div className="absolute inset-0 rounded-full border-4 border-spider-red -translate-x-1 -translate-y-1 -z-10" />
        </motion.div>
        {/* ------------------------------- */}

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-spider-yellow text-black font-black px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_white] transform -rotate-2"
        >
          CS Grad Student @ UMASS AMHERST
        </motion.div>

       <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center leading-none mb-6">
            <GlitchText text="DEEPESH" />
            <GlitchText text="PARPANI" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/40 backdrop-blur-sm border-l-4 border-spider-blue p-6 max-w-2xl text-left"
        >
          <p className="font-mono text-gray-300 text-lg md:text-xl leading-relaxed">
            <span className="text-spider-blue font-bold">Protocol:</span> Building Scalable ML Systems & Full Stack Solutions<br/>
            <span className="text-spider-red font-bold">Mission:</span> Optimizing neural networks for the speed of the web :P<br/>
            <span className="text-gray-400 text-sm mt-2 block border-t border-gray-700 pt-2">
              // Focus: Quantization, On-Device AI, and Distributed Systems.
            </span>
          </p>
        </motion.div>

        <div className="flex gap-4 justify-center mt-10">
          <a href="https://github.com/deepeshparpani" target="_blank" className="flex items-center gap-2 bg-white text-black font-black px-6 py-3 hover:bg-spider-blue hover:text-white transition-all shadow-[4px_4px_0px_0px_#ff0055]">
            <Github size={20} /> GITHUB
          </a>
          <a href="https://linkedin.com/in/deepeshparpani" target="_blank" className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-black px-6 py-3 hover:bg-white hover:text-black transition-all">
            <Linkedin size={20} /> LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;