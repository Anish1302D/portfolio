import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import FeaturedProjects from './sections/FeaturedProjects';
import LandingPages from './sections/LandingPages';
import Services from './sections/Services';
import Footer from './sections/Footer';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';
import Toast from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [initialService, setInitialService] = useState('Internship & Project Opportunity');
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleOpenContact = (topic = 'Internship & Project Opportunity') => {
    setInitialService(topic);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121212] selection:bg-black selection:text-white">
      {/* Editorial Navigation */}
      <Navbar onOpenContact={() => handleOpenContact('Internship & Project Opportunity')} />

      {/* Main Single Page Sections */}
      <main>
        <Hero
          onSelectFocus={(topic) => {
            handleOpenContact(topic || 'Full-Stack Development');
          }}
        />

        <About onOpenContact={() => handleOpenContact('General Conversation')} />

        <Experience />

        <Skills />

        <FeaturedProjects onSelectProject={handleOpenProject} />

        <LandingPages onSelectProject={handleOpenProject} />

        <Services onInquire={(focusKey) => handleOpenContact(focusKey)} />
      </main>

      {/* Editorial Let's Talk Footer */}
      <Footer onOpenContact={() => handleOpenContact('Internship & Project Opportunity')} />

      {/* Modals & Overlays */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        project={selectedProject}
        onClose={() => setIsProjectModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        initialService={initialService}
        onClose={() => setIsContactOpen(false)}
        onToast={addToast}
      />

      {/* Toast Notification Container */}
      <Toast toasts={toasts} />
    </div>
  );
}
