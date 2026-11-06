/**
 * Cursor animation configuration and interactive hover binders.
 */

export function setupCursorListeners(onHoverEnter, onHoverLeave) {
  if (typeof window === 'undefined') return () => {};

  const interactiveSelector = 'a, button, .skill-category, .project-card, .contact-link, .about-pillar, .about-floating-badge, input, textarea, .nav-logo, .hero-scroll';

  const handlePointerOver = (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      onHoverEnter();
    }
  };

  const handlePointerOut = (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      onHoverLeave();
    }
  };

  document.addEventListener('mouseover', handlePointerOver);
  document.addEventListener('mouseout', handlePointerOut);

  return () => {
    document.removeEventListener('mouseover', handlePointerOver);
    document.removeEventListener('mouseout', handlePointerOut);
  };
}
