import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const milestones = [
  {
    year: '2025',
    category: 'HACKATHON ARENA',
    tag: 'AMD SLINGSHOT 2025',
    title: 'INFRAGUARD AI — AMD SLINGSHOT PARTICIPANT',
    desc: 'Selected participant in AMD Slingshot. Engineered a multimodal failure prediction platform combining high-resolution satellite imagery, AQI sensor networks, traffic matrices, and historical flood maps through ResNet-50 + XGBoost with SHAP explainability across 4 global cities.',
  },
  {
    year: '2025',
    category: 'INDUSTRY CERTIFICATION',
    tag: 'CREDENTIAL // VERIFIED',
    title: 'FULL STACK WEB DEVELOPMENT — INDUSTRY CERTIFICATION',
    desc: 'Completed comprehensive full stack engineering curriculum covering component lifecycles, asynchronous backend microservices, relational and document persistence, cryptographic authentication, and cloud deployment pipelines.',
  },
  {
    year: '2024',
    category: 'ADVANCED COURSEWORK',
    tag: 'SPECIALIZATION // NPTEL',
    title: 'AI/ML SPECIALIZATION — NPTEL / ONLINE COURSEWORK',
    desc: 'Structured deep-dive into mathematical foundations of machine learning, convolutional neural networks, tree ensembles, computer vision pipelines, and natural language transformers.',
  },
  {
    year: '2024',
    category: 'ACADEMIC MATRICULATION',
    tag: 'DEGREE IN PROGRESS',
    title: 'ENROLLED — B.SC. COMPUTER SCIENCE, SPPU PUNE',
    desc: 'Commenced undergraduate Computer Science degree at Savitribai Phule Pune University, establishing deep theoretical foundations in algorithms, data structures, computer networks, and systems architecture.',
  },
];

export default function Achievements() {
  const containerRef = useRef(null);
  const logRef = useRef(null);

  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      if (logRef.current) {
        const rows = logRef.current.querySelectorAll('.log-entry');
        gsap.fromTo(
          rows,
          { opacity: 0, x: -25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: logRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      id="achievements"
      ref={containerRef}
      style={{
        backgroundColor: 'var(--bg-canvas)',
        borderBottom: '1px solid var(--border-hairline)',
        padding: '7rem 0',
      }}
    >
      <div className="content-wrapper">
        {/* Technical Header */}
        <div className="section-meta-header">
          <div className="section-code">
            SECTION // [05] — CHRONOLOGICAL EXPEDITION &amp; MILESTONES
          </div>
          <div style={{ color: 'var(--text-tertiary)' }}>
            COMPETITIVE HACKATHONS // CERTIFICATIONS // ACADEMIA
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title-large">
            EXPEDITION LOGS &amp; VALIDATION
          </h2>
          <p className="section-lead">
            Chronological log of competitive development milestones, hackathon proving grounds, 
            and verified technical specializations.
          </p>
        </div>

        {/* Chronological Telemetry Index */}
        <div ref={logRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {milestones.map((m) => (
            <div
              key={m.title}
              className="log-entry"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-hairline)',
                padding: '2rem 2.5rem',
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '2.5rem',
                alignItems: 'baseline',
              }}
            >
              {/* Year & Category */}
              <div style={{ fontFamily: 'var(--font-mono)' }}>
                <div
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--signal-orange)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {m.year}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', marginTop: '0.2rem' }}>
                  {m.category}
                </div>
              </div>

              {/* Title, Tag, and Details */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '0.6rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {m.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--signal-orange)',
                      border: '1px solid var(--border-hairline)',
                      padding: '0.2rem 0.5rem',
                    }}
                  >
                    {m.tag}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
