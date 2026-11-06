import { ScrollTrigger } from './gsapConfig';

/**
 * Recalculate ScrollTrigger positions after dynamic content or layout updates.
 */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}

/**
 * Smooth scroll to target element ID.
 * @param {string} id - HTML element id (e.g. 'about', 'skills')
 */
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
