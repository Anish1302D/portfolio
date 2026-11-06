import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const coreSkillsList = [
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
  'TypeScript',
];

export default function Resume() {
  const containerRef = useRef(null);
  const dossierRef = useRef(null);

  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.fromTo(
        dossierRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const handleDownload = () => {
    window.open('/anish-mogam-resume.html?print=true', '_blank');
  };

  return (
    <section
      id="resume"
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
            SECTION // [06] — PROFESSIONAL DOSSIER &amp; CREDENTIALS
          </div>
          <div style={{ color: 'var(--text-tertiary)' }}>
            ATS-COMPATIBLE CV // FORMAL VERIFICATION
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title-large">
            CURRICULUM VITAE
          </h2>
          <p className="section-lead">
            Formal technical dossier summarizing academic credentials, verified engineering competencies, 
            and key production deployments. Available for direct print dispatch and ATS processing.
          </p>
        </div>

        {/* Dossier Document Container */}
        <div
          ref={dossierRef}
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-hairline)',
            padding: '3rem',
          }}
        >
          {/* Dossier Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1.5rem',
              borderBottom: '1px solid var(--border-hairline)',
              paddingBottom: '2rem',
              marginBottom: '2.5rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--signal-orange)',
                  marginBottom: '0.4rem',
                }}
              >
                // CANDIDATE SPECIFICATION
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                ANISH MOGAM
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  marginTop: '0.2rem',
                }}
              >
                B.Sc. Computer Science Student | Full Stack Developer | AI Enthusiast
              </div>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              <div>EMAIL: anishmogam@gmail.com</div>
              <div>TEL: +91 86051 04120</div>
              <div>LOC: Pune, Maharashtra, India</div>
              <div>WEB: linkedin.com/in/anish-mogam</div>
            </div>
          </div>

          {/* Academic & Skills Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              borderBottom: '1px solid var(--border-hairline)',
              paddingBottom: '2.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {/* Education */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--signal-orange)',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem',
                }}
              >
                // ACADEMIC CREDENTIAL
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Bachelor of Science in Computer Science
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                Savitribai Phule Pune University (SPPU), Pune
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.3rem' }}>
                TIMELINE: 2024 – Present (Active Matriculation)
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--signal-orange)',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem',
                }}
              >
                // VERIFIED CORE STACK
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {coreSkillsList.map((skill) => (
                  <span key={skill} className="tech-tag" style={{ fontSize: '0.72rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Production Deployments Summary */}
          <div style={{ marginBottom: '3rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--signal-orange)',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              // VERIFIED PORTFOLIO BUILDS
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>INFRAGUARD AI</span>
                <span style={{ color: 'var(--signal-orange)' }}>AMD Slingshot Participant // ResNet + XGBoost + SHAP</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>KESSLERX</span>
                <span style={{ color: 'var(--signal-blue)' }}>Live Aerospace Platform // CesiumJS + WebSockets</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>HEYLO APP</span>
                <span style={{ color: 'var(--text-secondary)' }}>Full Stack Media // WebRTC (PeerJS) Voice + Socket.io</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>SMART TREK COMPANION</span>
                <span style={{ color: 'var(--text-secondary)' }}>Offline Edge PWA // Mapbox GL + YOLOv8 + PostGIS</span>
              </div>
            </div>
          </div>

          {/* Document Dispatch Callout */}
          <div
            style={{
              backgroundColor: 'var(--bg-canvas)',
              border: '1px solid var(--border-hairline)',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--signal-orange)', marginBottom: '0.3rem' }}>
                // DOCUMENT TRANSMISSION READY
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                ATS-Optimized Printable Document · Auto-Print Trigger Enabled · Updated May 2026
              </div>
            </div>

            <button
              type="button"
              id="downloadResumeBtn"
              onClick={handleDownload}
              className="btn-cadmium"
            >
              DISPATCH FULL RESUME (PDF) ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
