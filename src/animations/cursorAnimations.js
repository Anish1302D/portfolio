/**
 * Cursor animation configuration and interactive hover binders for the Technical Reticle.
 */

export function setupCursorListeners(onHoverEnter, onHoverLeave) {
  if (typeof window === 'undefined') return () => {};

  const interactiveSelector =
    'a, button, [role="button"], input, textarea, .project-spec-card, .matrix-block, .log-entry, .tech-tag, .btn-cadmium, .btn-technical, .btn-ghost-tech, .back-to-origin';

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

  document.addEventListener('mouseover', handlePointerOver, { passive: true });
  document.addEventListener('mouseout', handlePointerOut, { passive: true });

  return () => {
    document.removeEventListener('mouseover', handlePointerOver);
    document.removeEventListener('mouseout', handlePointerOut);
  };
}
