import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const coreSkills = [
  'React.js',
  'Next.js',
  'Node.js',
  'Python',
  'TensorFlow',
  'MongoDB',
  'PostgreSQL',
  'Firebase',
  'Docker',
  'Git',
  'Tailwind CSS',
  'TypeScript'
];

export default function Resume() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardRef = useRef(null);

  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.to([headerRef.current, cardRef.current], {
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

      // Card entrance
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  const handleDownload = () => {
    window.open('/anish-mogam-resume.html?print=true', '_blank');
  };

  return (
    <section id="resume" ref={containerRef}>
      <div className="resume-inner">
        <div style={{ marginBottom: '2.5rem' }} ref={headerRef}>
          <div className="section-label">Resume</div>
          <h2 className="section-title">
            Curriculum <span className="highlight">Vitae</span>
          </h2>
        </div>

        <div className="resume-card" ref={cardRef}>
          <div className="resume-header">
            <div className="resume-person">
              <h2>ANISH MOGAM</h2>
              <p>Computer Science Student | Full Stack Developer | AI Enthusiast</p>
              <div className="resume-contacts">
                <div className="resume-contact-item">📧 anishmogam@gmail.com</div>
                <div className="resume-contact-item">📱 +91 86051 04120</div>
                <div className="resume-contact-item">📍 Pune, Maharashtra</div>
                <div className="resume-contact-item">🔗 linkedin.com/in/anish-mogam</div>
              </div>
            </div>
          </div>

          <div className="resume-divider" />

          <div className="resume-section-title">Education</div>
          <div className="resume-edu">
            <div className="resume-edu-item">
              <div>
                <div className="resume-edu-name">B.Sc. Computer Science</div>
                <div className="resume-edu-sub">Savitribai Phule Pune University (SPPU), Pune</div>
              </div>
              <div className="resume-edu-year">2024 – Present</div>
            </div>
          </div>

          <div className="resume-divider" />

          <div className="resume-section-title">Core Skills</div>
          <div className="resume-skills-row">
            {coreSkills.map((skill) => (
              <span className="resume-skills-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <div className="resume-divider" />

          <div className="resume-section-title">Key Projects</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div>
              <div className="resume-edu-item">
                <div className="resume-edu-name">InfraGuard AI</div>
                <div className="resume-edu-year" style={{ color: 'var(--cyan)' }}>
                  AMD Slingshot
                </div>
              </div>
              <div className="resume-edu-sub" style={{ marginTop: '0.2rem' }}>
                Multimodal infrastructure failure prediction — ResNet + XGBoost + SHAP, monitoring 4 cities globally
              </div>
            </div>

            <div>
              <div className="resume-edu-item">
                <div className="resume-edu-name">KesslerX</div>
                <div className="resume-edu-year" style={{ color: 'var(--cyan)' }}>
                  Live Project
                </div>
              </div>
              <div className="resume-edu-sub" style={{ marginTop: '0.2rem' }}>
                AI-powered Orbital Traffic Management platform featuring 3D satellite visualization and WebSocket alert streams
              </div>
            </div>

            <div>
              <div className="resume-edu-item">
                <div className="resume-edu-name">HeyLo App</div>
              </div>
              <div className="resume-edu-sub" style={{ marginTop: '0.2rem' }}>
                Real-time chat &amp; productivity application with custom liquid glass UI and peer-to-peer WebRTC voice calling
              </div>
            </div>

            <div>
              <div className="resume-edu-item">
                <div className="resume-edu-name">Smart Trek Companion</div>
              </div>
              <div className="resume-edu-sub" style={{ marginTop: '0.2rem' }}>
                Offline-first AI trek app with Mapbox navigation, GPS tracking, RAG guide, and YOLOv8 wildlife detection
              </div>
            </div>
          </div>

          <div className="resume-download-wrap">
            <button
              type="button"
              className="btn-primary"
              id="downloadResumeBtn"
              onClick={handleDownload}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
            >
              ⬇ Download Full Resume (PDF)
            </button>
            <p style={{ fontSize: '0.75rem', color: 'var(--gray)', marginTop: '0.8rem' }}>
              ATS-optimized · Updated May 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

