// src/sections/Skills.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, Database } from 'lucide-react';

// FULLY EXTRACTED TECH STACK FROM RESUME
const skills = {
  "LANGUAGES": [
    "Python", 
    "C/C++", 
    "Java", 
    "SQL (Postgres/MySQL)", 
    "JavaScript", 
    "Dart", 
    "R", 
    "PHP", 
    "HTML/CSS"
  ],
  "AI & ML ARSENAL": [
    "PyTorch", 
    "TensorFlow", 
    "MLX",            // [cite: 28]
    "Transformers",   // [cite: 28]
    "VLMs",           // [cite: 30]
    "Hugging Face", 
    "XGBoost",        // [cite: 26]
    "Scikit-learn", 
    "Keras", 
    "BERT",           // 
    "Pandas/NumPy", 
    "Matplotlib"
  ],
  "ENGINEERING & CLOUD": [
    "React", 
    "Next.js", 
    "Node.js", 
    "Spring Boot",    // 
    "FastAPI", 
    "Redis",          // 
    "Docker", 
    "Kubernetes", 
    "GCP", 
    "AWS", 
    "Azure", 
    "GitHub Actions", // [cite: 27]
    "Flutter", 
    "React Native",
    "Streamlit"
  ]
};

const iconMap = {
  "LANGUAGES": <Code className="text-spider-yellow" />,
  "AI & ML ARSENAL": <Cpu className="text-spider-red" />, // Changed icon to CPU for AI
  "ENGINEERING & CLOUD": <Terminal className="text-spider-blue" />
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8 bg-spider-dark relative bg-dots">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-comic text-white mb-4">
            WEB <span className="text-spider-yellow">SHOOTERS</span>
          </h2>
          <p className="font-mono text-gray-400">Technical Inventory & Gadgets</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black/50 border border-gray-700 p-6 relative overflow-hidden group hover:border-spider-blue transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
                {iconMap[category]}
                <h3 className="text-xl font-bold font-mono text-white tracking-wider">{category}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-sm font-mono text-gray-300 border-l-2 border-transparent hover:border-spider-yellow hover:text-white hover:bg-gray-700 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-2 opacity-50">
                <div className="w-2 h-2 bg-spider-blue rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;