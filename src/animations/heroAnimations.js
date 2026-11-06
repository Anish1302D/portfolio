import { gsap } from './gsapConfig';

/**
 * Initializes the entrance animation sequence for the Hero section.
 * @param {Object} refs - DOM references to hero elements
 * @param {boolean} reducedMotion - Whether user prefers reduced motion
 */
export function initHeroAnimations(refs, reducedMotion = false) {
  const {
    badgeRef,
    nameRef,
    nameGlowRef,
    subtitleRef,
    taglineRef,
    descRef,
    ctaRef,
    statsRef,
    scrollRef
  } = refs;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (reducedMotion) {
    tl.to(
      [badgeRef, nameRef, subtitleRef, taglineRef, descRef, ctaRef, statsRef, scrollRef].filter(Boolean),
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05
      }
    );
    return tl;
  }

  // Initial state setup
  gsap.set(
    [badgeRef, subtitleRef, taglineRef, descRef, ctaRef, statsRef, scrollRef].filter(Boolean),
    { opacity: 0, y: 25 }
  );
  if (nameRef) gsap.set(nameRef, { opacity: 0, y: 35, scale: 0.96 });
  if (nameGlowRef) gsap.set(nameGlowRef, { opacity: 0 });

  // 1. Badge entrance
  if (badgeRef) {
    tl.to(badgeRef, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.2
    });
  }

  // 2. Name reveal with subtle scale and glow
  if (nameRef) {
    tl.to(
      nameRef,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power4.out'
      },
      '-=0.3'
    );
  }

  if (nameGlowRef) {
    tl.to(
      nameGlowRef,
      {
        opacity: 0.7,
        duration: 1,
        ease: 'power2.out'
      },
      '-=0.7'
    );
  }

  // 3. Subtitle
  if (subtitleRef) {
    tl.to(
      subtitleRef,
      {
        opacity: 1,
        y: 0,
        duration: 0.6
      },
      '-=0.5'
    );
  }

  // 4. Tagline
  if (taglineRef) {
    tl.to(
      taglineRef,
      {
        opacity: 1,
        y: 0,
        duration: 0.6
      },
      '-=0.4'
    );
  }

  // 5. Description
  if (descRef) {
    tl.to(
      descRef,
      {
        opacity: 1,
        y: 0,
        duration: 0.6
      },
      '-=0.4'
    );
  }

  // 6. CTA Buttons
  if (ctaRef) {
    tl.to(
      ctaRef,
      {
        opacity: 1,
        y: 0,
        duration: 0.6
      },
      '-=0.4'
    );
  }

  // 7. Stats
  if (statsRef) {
    tl.to(
      statsRef,
      {
        opacity: 1,
        y: 0,
        duration: 0.6
      },
      '-=0.4'
    );
  }

  // 8. Scroll indicator
  if (scrollRef) {
    tl.to(
      scrollRef,
      {
        opacity: 0.6,
        y: 0,
        duration: 0.6
      },
      '-=0.2'
    );
  }

  return tl;
}
