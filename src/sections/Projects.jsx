import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    title: "PLANETARY DEFENSE SYSTEM",
    date: "Dec 2025",
    tech: ["Python", "XGBoost", "FastAPI", "Docker", "GCP"],
    points: [
      "Engineered a physics-informed MLOps pipeline to identify hazardous Near-Earth Objects (NEOs) via NASA's API.",
      "Integrated Kinetic Proxy features (v² × m) into cost-sensitive XGBoost models, achieving a 99.2% recall rate.",
      "Architected a cloud-native microservices system with automated retraining pipelines on Google Cloud Run."
    ],
    link: "https://github.com/deepeshparpani" // Replace with actual link if available
  },
  {
    title: "AUTONOMOUS MEDICAL TRIAGE",
    date: "Jan 2025",
    tech: ["Python", "MLX", "Transformers", "Streamlit", "Multi-Agent"],
    points: [
      "Architected a local-first multi-agent system on MLX, using VLM-based routing to dispatch patient data with strict privacy.",
      "Engineered 'System 2' reflective workflows to reduce hallucinations by 40%.",
      "Implemented an RLHF loop to auto-curate a Golden Dataset from real-time clinician feedback."
    ],
    link: "https://github.com/deepeshparpani"
  },
  {
    title: "GOING DUTCH",
    date: "Sep 2022 - Nov 2022",
    tech: ["React", "Flutter", "Node.js", "Algorithms"],
    points: [
      "Built a shared expense management app using a greedy-based algorithm inspired by Splitwise.",
      "Designed an impersonation feature allowing expense sharing without requiring group member logins.",
      "Optimized for graph simplification in cases with minimal lenders and many borrowers."
    ],
    link: "https://github.com/deepeshparpani"
  }
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-8 bg-spider-dark relative">
      
      {/* Section Title */}
      <div className="max-w-6xl mx-auto mb-16 relative">
        <h2 className="text-5xl md:text-7xl font-comic text-white text-center mb-2">
          MULTIVERSAL <span className="text-spider-red">MISSIONS</span>
        </h2>
        <div className="w-24 h-2 bg-spider-blue mx-auto skew-x-[-20deg]" />
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;