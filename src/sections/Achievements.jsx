import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const timelineItems = [
  {
    year: '2025',
    tag: '🏆 Hackathon',
    tagClass: 'tag-hackathon',
    dotClass: '',
    title: 'InfraGuard AI — AMD Slingshot Participant',
    desc: 'Built a multimodal infrastructure failure prediction system using ResNet + XGBoost as part of AMD Slingshot. Features real-time monitoring dashboard across 4 cities with explainable AI via SHAP.'
  },
  {
    year: '2025',
    tag: '📜 Certification',
    tagClass: 'tag-cert',
    dotClass: 'purple',
    title: 'Full Stack Web Development — Industry Certification',
    desc: 'Completed comprehensive full-stack development curriculum covering React, Node.js, databases, authentication, and cloud deployment strategies.'
  },
  {
    year: '2024',
    tag: '🔬 Research',
    tagClass: 'tag-project',
    dotClass: '',
    title: 'AI/ML Specialization — NPTEL / Online Coursework',
    desc: 'Deep-dived into machine learning algorithms, neural networks, computer vision, and natural language processing through structured courses.'
  },
  {
    year: '2024',
    tag: '📜 Education',
    tagClass: 'tag-cert',
    dotClass: 'blue',
    title: 'Enrolled — B.Sc. Computer Science, SPPU',
    desc: 'Began Computer Science degree at Savitribai Phule Pune University, focusing on algorithms, data structures, networks, and software engineering.'
  }
];

export default function Achievements() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.to([headerRef.current, timelineRef.current], {
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

      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      // Staggered timeline entries
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll('.timeline-item');
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  return (
    <section id="achievements" ref={containerRef}>
      <div className="achievements-inner">
        <div className="skills-header" ref={headerRef}>
          <div className="section-label">Track Record</div>
          <h2 className="section-title">
            Milestones &amp; <span className="highlight">Achievements</span>
          </h2>
          <p className="section-desc">
            A journey of continuous growth, competition, and innovation.
          </p>
        </div>

        <div className="timeline" ref={timelineRef}>
          {timelineItems.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className={`timeline-dot ${item.dotClass}`} />
              <div className="timeline-meta">
                <span className="timeline-year">{item.year}</span>
                <span className={`timeline-tag ${item.tagClass}`}>{item.tag}</span>
              </div>
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

