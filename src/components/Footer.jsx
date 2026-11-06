import React from 'react';
import { scrollToSection } from '../animations/transitionAnimations';

export default function Footer() {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-hairline)',
        padding: '4.5rem 0 3rem',
      }}
    >
      <div className="content-wrapper">
        <div
          className="footer-colophon-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '4rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            lineHeight: 1.8,
          }}
        >
          {/* Colophon Meta */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
                marginBottom: '0.8rem',
              }}
            >
              ANISH MOGAM
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.88rem' }}>
              Full Stack Engineer &amp; AI Builder. Founder of Sphere Community. Engineering intelligent architectures at the intersection of machine intelligence and production software.
            </p>
            <div style={{ color: 'var(--signal-orange)', fontSize: '0.72rem', letterSpacing: '0.06em' }}>
              SYS_REF: AM-26 // PUNE, INDIA (18.5204° N, 73.8567° E)
            </div>
          </div>

          {/* Architecture Disclosures */}
          <div>
            <div style={{ color: 'var(--text-tertiary)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>
              // ARCHITECTURE
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              <div>FRAMEWORK: React 19</div>
              <div>BUNDLER: Vite 6</div>
              <div>ENGINE: GSAP 3 + ScrollTrigger</div>
              <div>STYLING: Swiss Modular CSS</div>
              <div>DEPLOY: Vercel Edge</div>
            </div>
          </div>

          {/* Directory Navigation */}
          <div>
            <div style={{ color: 'var(--text-tertiary)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>
              // DIRECTORY
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="btn-ghost-tech">
                [01] SYSTEMS
              </a>
              <a href="#architecture" onClick={(e) => handleLinkClick(e, 'architecture')} className="btn-ghost-tech">
                [02] ARCHITECTURE
              </a>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="btn-ghost-tech">
                [03] ABOUT
              </a>
              <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="btn-ghost-tech">
                [04] ARSENAL
              </a>
              <a href="#achievements" onClick={(e) => handleLinkClick(e, 'achievements')} className="btn-ghost-tech">
                [05] LOGS
              </a>
              <a href="#resume" onClick={(e) => handleLinkClick(e, 'resume')} className="btn-ghost-tech">
                [06] DOSSIER
              </a>
            </div>
          </div>

          {/* Network Channels */}
          <div>
            <div style={{ color: 'var(--text-tertiary)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>
              // NETWORK
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a
                href="https://github.com/Anish1302D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-tech"
              >
                GITHUB ↗
              </a>
              <a
                href="https://www.linkedin.com/in/anish-mogam-33a2b6218/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-tech"
              >
                LINKEDIN ↗
              </a>
              <a
                href="https://sphere-club.vercel.app/about.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-tech"
              >
                SPHERE ECOSYSTEM ↗
              </a>
              <a
                href="/anish-mogam-resume.html?print=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-tech"
              >
                ATS RESUME (PDF) ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-hairline)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--text-tertiary)',
          }}
        >
          <div>
            © {new Date().getFullYear()} ANISH MOGAM. ALL RIGHTS RESERVED.
          </div>
          <div>
            HUMAN-DESIGNED &amp; ENGINEERED WITHOUT AI PORTFOLIO CLICHÉS.
          </div>
        </div>
      </div>
    </footer>
  );
}
