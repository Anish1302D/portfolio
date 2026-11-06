import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const pillars = [
  {
    icon: '🚀',
    title: 'Rapid Builder',
    desc: 'From idea to MVP in record time'
  },
  {
    icon: '🤖',
    title: 'AI Enthusiast',
    desc: 'Integrating intelligence into everything'
  },
  {
    icon: '🏆',
    title: 'Hackathon Warrior',
    desc: 'Competing and winning under pressure'
  },
  {
    icon: '🔬',
    title: 'Problem Solver',
    desc: 'Breaking down complexity elegantly'
  }
];

export default function About() {
  const containerRef = useRef(null);
  const visualRef = useRef(null);
  const textRef = useRef(null);
  const pillarsRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);

  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.to([visualRef.current, textRef.current], {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true
          }
        });
        return;
      }

      // Visual entrance
      gsap.fromTo(
        visualRef.current,
        { opacity: 0, x: -40, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: visualRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Text entrance
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Pillars stagger
      if (pillarsRef.current) {
        const pillarCards = pillarsRef.current.querySelectorAll('.about-pillar');
        gsap.fromTo(
          pillarCards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      // Floating badges gentle floating animation
      if (badge1Ref.current && badge2Ref.current) {
        gsap.to(badge1Ref.current, {
          y: -8,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
        gsap.to(badge2Ref.current, {
          y: 8,
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5
        });
      }
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  return (
    <section id="about" ref={containerRef}>
      <div className="about-inner">
        <div className="about-visual" ref={visualRef}>
          <div style={{ position: 'relative', width: 'fit-content' }}>
            <div className="about-avatar" aria-label="Anish Mogam avatar">
              🧠
            </div>
            <div className="about-avatar-ring" aria-hidden="true" />
            <div className="about-avatar-ring-2" aria-hidden="true" />
            <a
              href="https://sphere-club.vercel.app/about.html"
              target="_blank"
              rel="noopener noreferrer"
              className="about-floating-badge b1"
              title="Founder of Sphere"
              ref={badge1Ref}
            >
              <span>🌐</span> <span>Founder of Sphere</span>
            </a>
            <div className="about-floating-badge b2" ref={badge2Ref}>
              <span>🤖</span> <span>AI Builder</span>
            </div>
          </div>
        </div>

        <div className="about-text" ref={textRef}>
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            Engineering the <span className="highlight">Future</span>
          </h2>
          <p>
            I'm <strong>Anish Mogam</strong>, founder of{' '}
            <a href="https://sphere-club.vercel.app/about.html" target="_blank" rel="noopener noreferrer">
              <strong>Sphere</strong>
            </a>{' '}
            and a Computer Science student at <strong>Savitribai Phule Pune University (SPPU)</strong>, 
            driven by an obsession with building technology that matters. I live at the intersection of 
            intelligent systems, elegant code, and ambitious ideas.
          </p>
          <p>
            From architecting multimodal AI platforms to crafting seamless full-stack applications, 
            I believe <strong>great software is a form of art</strong> — precise, purposeful, and powerful. 
            Hackathons are my proving ground; every competition sharpens my ability to deliver 
            under pressure.
          </p>
          <p>
            My vision: build products that don't just solve problems — they{' '}
            <strong>redefine what's possible</strong>.
          </p>
          <p>
            Founder of{' '}
            <a href="https://sphere-club.vercel.app/about.html" target="_blank" rel="noopener noreferrer">
              <strong>Sphere</strong>
            </a>{' '}
            — a student-led technology ecosystem for building, hackathons, and emerging tech.
          </p>

          <div className="about-pillars" ref={pillarsRef}>
            {pillars.map((pillar) => (
              <div className="about-pillar" key={pillar.title}>
                <div className="about-pillar-icon">{pillar.icon}</div>
                <div className="about-pillar-title">{pillar.title}</div>
                <div className="about-pillar-desc">{pillar.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

