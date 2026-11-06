import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../animations/transitionAnimations';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    scrollToSection('hero');
  };

  return (
    <button
      type="button"
      className={`back-to-origin ${visible ? 'visible' : ''}`}
      onClick={handleClick}
      aria-label="Return to Origin"
    >
      <span>↑</span>
      <span>ORIGIN</span>
    </button>
  );
}
