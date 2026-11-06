import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { scrollToSection } from '../animations/transitionAnimations';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const headlineRef = useRef(null);
  const metaRef = useRef(null);
  const manifestRef = useRef(null);
  const actionsRef = useRef(null);
  const telemetryRef = useRef(null);

  const reducedMotion = useReducedMotion();

  // Architectural Grid Canvas — Subtle interactive engineering coordinates
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let W, H;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const gridSize = 70;
      ctx.lineWidth = 1;

      // Draw faint technical blueprint crosshairs
      for (let x = gridSize; x < W; x += gridSize) {
        for (let y = gridSize; y < H; y += gridSize) {
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const isNear = dist < 140;

          const size = isNear ? 5 : 2.5;
          const alpha = isNear ? 0.35 : 0.08;

          ctx.strokeStyle = isNear ? 'rgba(255, 75, 38, ' + alpha + ')' : 'rgba(255, 255, 255, ' + alpha + ')';

          ctx.beginPath();
          ctx.moveTo(x - size, y);
          ctx.lineTo(x + size, y);
          ctx.moveTo(x, y - size);
          ctx.lineTo(x, y + size);
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  // GSAP Entrance Sequence
  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.to([metaRef.current, headlineRef.current, manifestRef.current, actionsRef.current, telemetryRef.current], {
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        metaRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.15 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30, letterSpacing: '0.04em' },
          { opacity: 1, y: 0, letterSpacing: '-0.02em', duration: 0.9, ease: 'power4.out' },
          '-=0.3'
        )
        .fromTo(
          manifestRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          telemetryRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        );
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'auto',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="content-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Architectural Metadata Strip */}
        <div
          ref={metaRef}
          className="hero-meta-bar"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            borderBottom: '1px solid var(--border-hairline)',
            paddingBottom: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ color: 'var(--signal-orange)', fontWeight: 700 }}>[SYS_ID: 1302D]</span>
            <span>COMPUTER SCIENCE // FULL STACK // AI SYSTEMS</span>
          </div>
          <div className="status-indicator live">
            <span className="status-pulse-dot" />
            <span>AVAILABLE FOR INTERNSHIPS &amp; SYSTEM ROLES</span>
          </div>
        </div>

        {/* Master Architectural Headline */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1
            ref={headlineRef}
            className="hero-headline"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.4rem, 9.5vw, 7.8rem)',
              fontWeight: 800,
              lineHeight: 0.94,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            ANISH MOGAM
          </h1>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.85rem, 1.8vw, 1.15rem)',
              color: 'var(--signal-orange)',
              letterSpacing: '0.08em',
              marginTop: '1.25rem',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span>FOUNDER, SPHERE COMMUNITY</span>
            <span style={{ color: 'var(--text-tertiary)' }}>//</span>
            <span>FULL STACK DEVELOPER</span>
            <span style={{ color: 'var(--text-tertiary)' }}>//</span>
            <span>AI BUILDER</span>
          </div>
        </div>

        {/* Asymmetrical Manifest & Telemetry Grid */}
        <div
          className="hero-manifest-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '4rem',
            alignItems: 'start',
            borderTop: '1px solid var(--border-hairline)',
            paddingTop: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Manifest Description */}
          <div ref={manifestRef}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.15rem',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
                marginBottom: '1.2rem',
              }}
            >
              Engineering at the intersection of <strong>multimodal artificial intelligence</strong>, 
              <strong>resilient backend architectures</strong>, and <strong>high-performance distributed web applications</strong>.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
              }}
            >
              Undergraduate at <strong>Savitribai Phule Pune University</strong> and founder of <strong>Sphere</strong> — 
              a collaborative ecosystem empowering builders to compete in premier hackathons and ship production-grade software.
            </p>
          </div>

          {/* Real Telemetry Data Board */}
          <div
            ref={telemetryRef}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              padding: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
            }}
          >
            <div
              style={{
                color: 'var(--text-tertiary)',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
                borderBottom: '1px solid var(--border-hairline)',
                paddingBottom: '0.5rem',
              }}
            >
              // ACTIVE ENGINEERING TELEMETRY
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>COMMUNITY_ENTITY:</span>
                <span style={{ color: 'var(--signal-orange)', fontWeight: 700 }}>SPHERE CLUB (FOUNDER)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>FLAGSHIP_SYSTEM:</span>
                <span style={{ color: 'var(--text-primary)' }}>INFRAGUARD AI (AMD SLINGSHOT)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>ORBITAL_PLATFORM:</span>
                <span style={{ color: 'var(--text-primary)' }}>KESSLERX (CESIUMJS + WEBSOCKETS)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>INSTITUTION:</span>
                <span style={{ color: 'var(--text-primary)' }}>SPPU PUNE (B.SC. CS)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>VERIFIED_METRICS:</span>
                <span style={{ color: 'var(--signal-green)' }}>5+ HACKATHONS // 10+ BUILDS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Command & Exploration Actions */}
        <div
          ref={actionsRef}
          className="hero-actions"
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="btn-cadmium"
          >
            EXPLORE DEPLOYED SYSTEMS ↓
          </a>
          <a
            href="#architecture"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('architecture');
            }}
            className="btn-technical"
          >
            INSPECT ARCHITECTURE DIAGRAM ↗
          </a>
          <a
            href="/anish-mogam-resume.html?print=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-technical"
          >
            VIEW ATS RESUME (PDF) ↗
          </a>
        </div>
      </div>
    </section>
  );
}
