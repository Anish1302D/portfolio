import { gsap } from './gsapConfig';

/**
 * Editorial entrance sequence for the Swiss Architecture Hero.
 */
export function initHeroAnimations(refs, reducedMotion = false) {
  const { metaRef, headlineRef, manifestRef, telemetryRef, actionsRef } = refs;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (reducedMotion) {
    tl.to([metaRef, headlineRef, manifestRef, telemetryRef, actionsRef].filter(Boolean), {
      opacity: 1,
      duration: 0.4,
      stagger: 0.05,
    });
    return tl;
  }

  tl.fromTo(metaRef, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.15 })
    .fromTo(
      headlineRef,
      { opacity: 0, y: 30, letterSpacing: '0.04em' },
      { opacity: 1, y: 0, letterSpacing: '-0.02em', duration: 0.9, ease: 'power4.out' },
      '-=0.3'
    )
    .fromTo(manifestRef, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
    .fromTo(telemetryRef, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
    .fromTo(actionsRef, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');

  return tl;
}
