import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "VERIZON",
    role: "Software Engineer (Intern + Fulltime)",
    date: "Feb 2024 - July 2025",
    location: "Hyderabad, India",
    points: [
      "Migrated workflows in ServiceNow, improving user experience and efficiency by over 40%.",
      "Transformed Change Management with Redis-backed APIs on Spring Boot and smart-scheduling algorithms.",
      "Built React + Redux interfaces for the Multiday feature, optimizing APIs for conflict detection."
    ]
  },
  {
    company: "VOLKSWAGEN ITS",
    role: "Software Engineer Intern",
    date: "May 2023 - July 2023",
    location: "Pune, India",
    points: [
      "Spearheaded third-party security API integration, reducing data exposure incidents by 55%.",
      "Improved system resilience and compliance metrics by 35% through secure token validation."
    ]
  },
  {
    company: "SAMSUNG R&D INSTITUTE",
    role: "Research Intern (SPARCS PRISM)",
    date: "Dec 2022 - July 2023",
    location: "Remote / Hybrid",
    points: [
      "Implemented a Seq2Seq model with BERT for joint intent detection, achieving 79% accuracy on mixSNIPS.",
      "Resolved code-mixed semantic issues using contextual analysis and dictionary-based overlap handling."
    ]
  }
];

const Experience = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 bg-spider-dark relative overflow-hidden">
      
      {/* Title */}
      <div className="max-w-4xl mx-auto mb-16 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-comic text-white mb-2">
          CANON <span className="text-spider-blue">EVENTS</span>
        </h2>
        <div className="w-32 h-2 bg-spider-red mx-auto skew-x-[-20deg]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* The "Web" Line (Timeline) */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 md:-translate-x-1/2 z-0">
          <div className="absolute inset-0 bg-spider-blue opacity-50 blur-sm" />
        </div>

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot (The "Spider" Node) */}
            <div className="absolute left-[-5px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-spider-red border-4 border-spider-dark z-20 md:-translate-x-[10px] shadow-[0_0_10px_#ff0055]" />

            {/* Content Card */}
            <div className="w-full md:w-1/2 pl-8 md:pl-0">
              <div className={`bg-black/80 border-l-4 border-spider-blue p-6 backdrop-blur-sm relative group hover:bg-gray-900/80 transition-colors ${
                 index % 2 === 0 ? 'md:mr-8 md:text-right md:items-end md:border-l-0 md:border-r-4' : 'md:ml-8'
              }`}>
                
                {/* Role & Company */}
                <h3 className="text-2xl font-comic text-white mb-1 group-hover:text-spider-blue transition-colors">
                  {exp.company}
                </h3>
                <h4 className="text-lg font-mono text-spider-red mb-4 font-bold">{exp.role}</h4>

                {/* Metadata */}
                <div className={`flex flex-col gap-2 mb-4 text-sm text-gray-400 font-mono ${
                  index % 2 === 0 ? 'md:items-end' : ''
                }`}>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} /> {exp.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} /> {exp.location}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="text-gray-300 text-sm leading-relaxed text-left">
                      <span className="text-spider-yellow mr-2 font-bold">{'>'}</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;