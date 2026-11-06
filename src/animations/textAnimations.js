import { gsap } from './gsapConfig';

/**
 * Animate text reveal using SplitText or letter spans.
 * @param {HTMLElement|string} target 
 * @param {Object} options 
 */
export function animateSplitText(target, options = {}) {
  if (!target) return null;
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.03,
    ease = 'power3.out',
    reducedMotion = false
  } = options;

  if (reducedMotion) {
    return gsap.to(target, {
      opacity: 1,
      duration: 0.3,
      delay
    });
  }

  try {
    const split = new (gsap.plugins.SplitText || window.SplitText)(target, {
      type: 'chars,words',
      charsClass: 'split-char',
      wordsClass: 'split-word'
    });

    return gsap.fromTo(
      split.chars,
      {
        opacity: 0,
        y: 30,
        rotateX: -40
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        stagger,
        ease,
        delay,
        onComplete: () => {
          // Keep structure intact
        }
      }
    );
  } catch {
    // Fallback if SplitText is not instantiated
    return gsap.fromTo(
      target,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration, ease, delay }
    );
  }
}

