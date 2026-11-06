import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import Hero from './sections/Hero';
import Projects from './sections/Projects';
import SystemsExplorer from './sections/SystemsExplorer';
import About from './sections/About';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

import { ScrollTrigger } from './animations/gsapConfig';

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after DOM & fonts load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    if (document.readyState === 'complete') {
      ScrollTrigger.refresh();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <SystemsExplorer />
        <About />
        <Skills />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
