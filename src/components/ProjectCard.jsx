import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ title, date, tech, description, points, link }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, rotate: 1 }}
      className="relative group bg-black/50 border-2 border-gray-700 hover:border-spider-blue transition-colors p-6 overflow-hidden"
    >
      {/* "Ben-Day Dots" Overlay (Comic Texture) */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      {/* Decorative "Glitch" Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-spider-red opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start mb-4">
        <div>
          <h3 className="text-3xl font-comic text-white group-hover:text-spider-blue transition-colors">
            {title}
          </h3>
          <span className="font-mono text-xs text-spider-yellow bg-spider-yellow/10 px-2 py-1 mt-1 inline-block border border-spider-yellow/30">
            // {date}
          </span>
        </div>
        
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Github size={24} />
        </a>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {tech.map((t, i) => (
          <span key={i} className="text-xs font-mono font-bold px-2 py-1 bg-gray-800 text-gray-300 border-l-2 border-spider-red">
            {t}
          </span>
        ))}
      </div>

      {/* Description Points */}
      <ul className="space-y-3 relative z-10">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm font-mono leading-relaxed">
            <span className="text-spider-blue mt-1">▹</span>
            {point}
          </li>
        ))}
      </ul>

      {/* Hover "Scanning" Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-spider-blue/5 to-transparent pointer-events-none"
        initial={{ y: '-100%' }}
        whileHover={{ y: '100%' }}
        transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
      />
    </motion.div>
  );
};

export default ProjectCard;