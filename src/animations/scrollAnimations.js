import { gsap } from './gsapConfig';

/**
 * Creates a ScrollTrigger fade & rise reveal on a target container.
 * @param {HTMLElement} element - Target DOM node
 * @param {Object} options - Custom animation config
 */
export function createScrollReveal(element, options = {}) {
  if (!element) return null;
  const {
    trigger = element,
    start = 'top 85%',
    y = 35,
    duration = 0.8,
    delay = 0,
    ease = 'power3.out',
    reducedMotion = false
  } = options;

  if (reducedMotion) {
    return gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        delay,
        scrollTrigger: {
          trigger,
          start,
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  }

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none none',
        once: true
      }
    }
  );
}

/**
 * Creates a staggered ScrollTrigger reveal on multiple child elements.
 * @param {Array<HTMLElement>|string} targets - Child elements or selector within container
 * @param {Object} options - Custom animation config
 */
export function createStaggerReveal(targets, options = {}) {
  if (!targets) return null;
  const {
    trigger,
    start = 'top 85%',
    y = 30,
    duration = 0.7,
    stagger = 0.1,
    ease = 'power3.out',
    reducedMotion = false
  } = options;

  if (reducedMotion) {
    return gsap.fromTo(
      targets,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        scrollTrigger: {
          trigger: trigger || targets[0] || targets,
          start,
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  }

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: trigger || targets[0] || targets,
        start,
        toggleActions: 'play none none none',
        once: true
      }
    }
  );
}
