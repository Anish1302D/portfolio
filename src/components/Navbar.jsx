import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../animations/transitionAnimations';

const navItems = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Achievements', href: '#achievements', id: 'achievements' },
  { name: 'Resume', href: '#resume', id: 'resume' },
  { name: 'Contact', href: '#contact', id: 'contact', isCta: true }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'resume', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(targetId);
  };

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => handleNavClick(e, 'hero')}
          aria-label="Anish Mogam Homepage"
        >
          AM//
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`${item.isCta ? 'nav-cta' : ''} ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-hamburger"
          id="navHamburger"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <nav
        className={`nav-mobile ${mobileMenuOpen ? 'open' : ''}`}
        id="mobileNav"
        aria-hidden={!mobileMenuOpen}
      >
        <button
          type="button"
          className="nav-close"
          id="navClose"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <a
            key={`mobile-${item.id}`}
            href={item.href}
            className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </>
  );
}

