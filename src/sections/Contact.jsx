// src/sections/Contact.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Radio } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-spider-dark relative overflow-hidden border-t border-gray-800">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Signal Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="w-16 h-16 bg-spider-red/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-spider-red"
        >
          <Radio className="text-spider-red animate-pulse" size={32} />
        </motion.div>

        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-comic text-white mb-6">
          SEND A <span className="text-spider-blue">SIGNAL</span>
        </h2>
        
        <p className="font-mono text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          My sensors are online. Whether you have a mission for me, a glitch to fix, or just want to discuss the multiverse—transmit your data.
        </p>

        {/* The Big Email Button */}
        <motion.a 
          href="mailto:deepesh.parpani@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-4 bg-white text-black font-black text-xl px-10 py-5 hover:bg-spider-red hover:text-white transition-all shadow-[8px_8px_0px_0px_#00d4ff] group"
        >
          <Mail className="group-hover:rotate-12 transition-transform" />
          INITIATE PROTOCOL
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.a>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 font-mono text-xs">
          <p>© 2026 DEEPESH PARPANI. ALL RIGHTS RESERVED.</p>
          <p>BUILT IN THE SPIDER-VERSE 🕷️</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;