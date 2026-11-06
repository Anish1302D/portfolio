import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
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
  const [initialService, setInitialService] = useState('Full Stack Web Systems');
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

  const handleOpenContact = (serviceName = 'Full Stack Web Systems') => {
    setInitialService(serviceName);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121212] selection:bg-black selection:text-white">
      {/* Editorial Navigation */}
      <Navbar onOpenContact={() => handleOpenContact('Full Stack Web Systems')} />

      {/* Main Single Page Sections */}
      <main>
        <Hero
          onSelectService={(idx) => {
            const serviceNames = [
              'UI/UX & Architecture',
              'Full Stack Web Systems',
              'AI & Telemetry Systems'
            ];
            handleOpenContact(serviceNames[idx] || 'Full Stack Web Systems');
          }}
        />

        <About onOpenContact={() => handleOpenContact('General Inquiry')} />

        <Experience />

        <FeaturedProjects onSelectProject={handleOpenProject} />

        <LandingPages onSelectProject={handleOpenProject} />

        <Services onInquire={(serviceKey) => handleOpenContact(serviceKey)} />
      </main>

      {/* Editorial Let's Talk Footer */}
      <Footer onOpenContact={() => handleOpenContact('General Inquiry')} />

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
