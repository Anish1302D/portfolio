import React from 'react';
import { scrollToSection } from '../animations/transitionAnimations';

export default function Footer() {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <footer>
      <div className="footer-logo">AM//</div>
      <div className="footer-copy">© 2026 Anish Mogam · Built with ❤️ &amp; ☕</div>
      <div className="footer-links">
        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
        <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
      </div>
    </footer>
  );
}
