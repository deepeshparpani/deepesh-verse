import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact'; // <--- Import this
import Footer from './sections/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-spider-dark text-white selection:bg-spider-red selection:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
   
    </main>
  );
}

export default App;