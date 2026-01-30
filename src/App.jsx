import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-spider-dark text-white selection:bg-spider-red selection:text-white overflow-hidden">
      <Navbar /> {/* <-- Added Navbar here */}
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;