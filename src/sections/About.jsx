import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const doctrines = [
  {
    code: '01',
    title: 'RAPID PROTOTYPE TO PRODUCTION',
    desc: 'Transforming conceptual architectures into battle-tested, deployed software with rigorous engineering velocity.',
  },
  {
    code: '02',
    title: 'EMBEDDED MACHINE INTELLIGENCE',
    desc: 'Integrating deep learning, computer vision, and NLP natively into data pipelines rather than relying on superficial API wrappers.',
  },
  {
    code: '03',
    title: 'HACKATHON-TESTED RESILIENCE',
    desc: 'Delivering fault-tolerant, complex applications under tight 24-48hr competitive constraints, proven in arenas like AMD Slingshot.',
  },
  {
    code: '04',
    title: 'FIRST-PRINCIPLES DECOMPOSITION',
    desc: 'Dissecting complex engineering systems into modular, observable, and independently verifiable primitives.',
  },
];

export default function About() {
  const containerRef = useRef(null);
  const dossierRef = useRef(null);
  const narrativeRef = useRef(null);

  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.fromTo(
        [dossierRef.current, narrativeRef.current],
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      id="about"
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
            SECTION // [03] — IDENTITY &amp; OPERATIONAL DOCTRINE
          </div>
          <div style={{ color: 'var(--text-tertiary)' }}>
            BIO // PHILOSOPHY // ROLES
          </div>
        </div>

        <div style={{ marginBottom: '3.5rem' }}>
          <h2 className="section-title-large">
            ENGINEERING THE FUTURE
          </h2>
          <p className="section-lead">
            Anish Mogam is an engineer and founder operating at the intersection of full-stack systems, 
            multimodal artificial intelligence, and developer communities.
          </p>
        </div>

        {/* Asymmetrical Dossier + Doctrine Grid */}
        <div
          className="dossier-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1.6fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Technical Dossier Card */}
          <div
            ref={dossierRef}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              padding: '2.5rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--signal-orange)',
                letterSpacing: '0.1em',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--border-hairline)',
                paddingBottom: '0.6rem',
              }}
            >
              // VERIFIED DOSSIER
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
              <div>
                <div style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>OPERATIVE_NAME:</div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem', marginTop: '0.2rem' }}>
                  ANISH MOGAM
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>CURRENT_FOCUS:</div>
                <div style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.6 }}>
                  Full Stack Distributed Systems, Multimodal ML Architectures, Satellite &amp; Geospatial Vision
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>ORGANIZATION_FOUNDED:</div>
                <div style={{ marginTop: '0.2rem' }}>
                  <a
                    href="https://sphere-club.vercel.app/about.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-tech"
                    style={{ color: 'var(--signal-orange)' }}
                  >
                    SPHERE COMMUNITY (FOUNDER) ↗
                  </a>
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>ACADEMIC_INSTITUTION:</div>
                <div style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.6 }}>
                  Savitribai Phule Pune University (SPPU)
                  <br />
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '0.72rem' }}>B.Sc. Computer Science (2024 – Present)</span>
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>BASE_OF_OPERATIONS:</div>
                <div style={{ color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  Pune, Maharashtra, India [18.5204° N, 73.8567° E]
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Operational Doctrines */}
          <div ref={narrativeRef}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '2.5rem' }}>
              <p style={{ marginBottom: '1.2rem' }}>
                I founded <a href="https://sphere-club.vercel.app/about.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--signal-orange)', textDecoration: 'underline', textUnderlineOffset: '4px' }}><strong>Sphere</strong></a> with a clear conviction: the highest-impact software is engineered at the intersection of disciplined systems programming and modern machine intelligence.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
                From architecting multimodal platforms that forecast municipal infrastructure failure through ResNet CNNs and SHAP explainability, to building 3D spatial space-traffic monitors backed by CesiumJS and live orbital ephemeris feeds, I prioritize building software that is rigorous, observable, and production-ready.
              </p>
            </div>

            {/* 4 Operational Doctrines */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1rem',
              }}
            >
              {doctrines.map((doctrine) => (
                <div
                  key={doctrine.code}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-hairline)',
                    padding: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--signal-orange)',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.06em',
                    }}
                  >
                    // DOCTRINE_{doctrine.code}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {doctrine.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {doctrine.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
