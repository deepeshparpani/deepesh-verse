// src/sections/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Folder, Youtube, Copy, Shield, Scan, Activity } from 'lucide-react';

// --- TIER 1: THE BIG 3 ---
const bigProjects = [
  {
    title: "PLANETARY DEFENSE SYSTEM",
    date: "Dec 2025",
    points: [
      "Engineered a physics-informed MLOps pipeline to identify hazardous Near-Earth Objects (NEOs) via NASA's API.",
      "Integrated Kinetic Proxy features (v² × m) into cost-sensitive XGBoost models, achieving a 99.2% recall rate.",
      "Architected a cloud-native microservices system with automated retraining pipelines on Google Cloud Run."
    ],
    tags: ["Python", "XGBoost", "FastAPI", "Docker", "GCP"],
    link: "https://github.com/deepeshparpani/planetary-defense-system",
    color: "border-spider-red"
  },
  {
    title: "AUTONOMOUS MEDICAL TRIAGE",
    date: "Jan 2025",
    points: [
      "Architected a local-first multi-agent system on MLX, using VLM-based routing to dispatch patient data with strict privacy.",
      "Engineered 'System 2' reflective workflows to reduce hallucinations by 40%.",
      "Implemented an RLHF loop to auto-curate a Golden Dataset from real-time clinician feedback."
    ],
    tags: ["Python", "MLX", "Transformers", "Streamlit", "Agents"],
    link: "https://github.com/deepeshparpani/Aegis-AI",
    color: "border-spider-blue"
  },
  {
    title: "GOING DUTCH",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Built a shared expense management app using a greedy-based algorithm inspired by Splitwise.",
      "Designed an impersonation feature allowing expense sharing without requiring group member logins.",
      "Optimized for graph simplification in cases with minimal lenders and many borrowers."
    ],
    tags: ["React", "Flutter", "Node.js", "Algorithms"],
    link: "https://github.com/deepeshparpani/goingDutch-WebApp",
    color: "border-spider-yellow"
  }
];

// --- TIER 2: OTHER PROJECTS (Updated Selection) ---
const otherProjects = [
  {
    title: "Focus Tube",
    desc: "Distraction-free YouTube wrapper.",
    tech: "JS / Chrome Ext",
    icon: <Youtube size={16} />,
    link: "https://github.com/deepeshparpani/FocusExtension"
  },
  {
    title: "Quick Copy",
    desc: "Productivity tool for fast clipboard actions.",
    tech: "JavaScript / Utils",
    icon: <Copy size={16} />,
    link: "https://github.com/deepeshparpani/QuickCopy"
  },
  {
    title: "Healthcare DApp",
    desc: "Decentralized patient records on Ethereum.",
    tech: "Solidity / React",
    icon: <Shield size={16} />,
    link: "https://github.com/deepeshparpani/Healthcare-Dapp"
  },
  {
    title: "Mask Detection",
    desc: "Real-time face mask detection using CV.",
    tech: "OpenCV / Python",
    icon: <Scan size={16} />,
    link: "https://github.com/deepeshparpani/Mask-Detection"
  },
  {
    title: "OrthoTriage",
    desc: "Automated bone fracture classification.",
    tech: "PyTorch / CNN",
    icon: <Activity size={16} />,
    link: "https://github.com/deepeshparpani/OrthoTriage"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black relative overflow-hidden min-h-screen">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="max-w-6xl mx-auto mb-16 relative text-center">
          <h2 className="text-5xl md:text-7xl font-comic text-white mb-2">
            MULTIVERSAL <span className="text-spider-red">MISSIONS</span>
          </h2>
          <div className="w-24 h-2 bg-spider-blue mx-auto skew-x-[-20deg]" />
        </div>

        {/* --- TIER 1: THE BIG 3 GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {bigProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`bg-gray-900/50 backdrop-blur-sm border-t-4 ${project.color} p-8 flex flex-col h-full group hover:bg-gray-800 transition-all relative overflow-hidden`}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <Folder size={40} className="text-white group-hover:text-spider-blue transition-colors" />
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* Title & Date */}
              <h3 className="text-2xl font-bold text-white mb-2 font-comic tracking-wide uppercase leading-none">
                {project.title}
              </h3>
              <p className="text-spider-blue font-mono text-xs mb-4">{project.date}</p>

              {/* Bullet Points */}
              <ul className="text-gray-400 mb-6 font-mono text-xs leading-relaxed flex-grow space-y-2 list-disc pl-4">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold font-mono text-spider-blue px-2 py-1 bg-blue-900/20 rounded border border-blue-900/30">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- TIER 2: OTHER PROJECTS --- */}
        <div className="mb-8">
            <h3 className="text-2xl font-comic text-white mb-6 border-l-4 border-spider-yellow pl-4">
                OTHER MISSIONS
            </h3>
        </div>

        {/* The 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {otherProjects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
              className="bg-gray-900 border border-gray-800 p-4 hover:border-spider-blue transition-colors group cursor-default"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-spider-yellow group-hover:text-white transition-colors">
                    {item.icon}
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Github size={14} className="text-gray-600 hover:text-white cursor-pointer" />
                </a>
              </div>
              
              <h4 className="font-bold text-white font-mono text-sm mb-1 truncate">
                {item.title}
              </h4>
              <p className="text-[10px] text-spider-blue font-mono mb-2">
                {item.tech}
              </p>
              <p className="text-gray-500 text-[10px] leading-tight line-clamp-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;