import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const primaryProjects = [
  {
    code: '01',
    category: 'SYS_FLAGSHIP // MACHINE INTELLIGENCE',
    awardTag: 'AMD SLINGSHOT PARTICIPANT 2025',
    title: 'INFRAGUARD AI',
    subtitle: 'Multimodal Infrastructure Failure Prediction System',
    description:
      'High-throughput infrastructure risk prediction platform integrating satellite imagery, traffic density metrics, air quality indices, weather patterns, and historical flood data. Powered by a ResNet-50 CNN + XGBoost ensemble model with explainable AI (SHAP) and an automated critical alert dispatch stream monitoring 4 global cities in real time.',
    specs: [
      { key: 'NEURAL_MODEL', val: 'ResNet-50 CNN + XGBoost' },
      { key: 'EXPLAINABILITY', val: 'SHAP (Shapley Attribution)' },
      { key: 'COVERAGE', val: '4 Cities Real-Time Telemetry' },
      { key: 'ALERT_STREAM', val: 'Automated Critical Dispatch' },
    ],
    stack: ['Python', 'ResNet CNN', 'XGBoost', 'SHAP', 'FastAPI', 'React', 'OpenCV'],
    liveUrl: 'https://infraguard-ai-ltxb.onrender.com/dashboard',
    githubUrl: 'https://github.com/Anish1302D/infraguard-ai',
  },
  {
    code: '02',
    category: 'SYS_AEROSPACE // DISTRIBUTED TELEMETRY',
    awardTag: 'LIVE DEPLOYED PLATFORM',
    title: 'KESSLERX',
    subtitle: 'Orbital Traffic Management & Space Situational Platform',
    description:
      'Space Situational Awareness platform engineered to track operational satellites and orbital debris in real time. Features an interactive 3D CesiumJS globe, automated conjunction risk analysis, space weather forecasting, and low-latency WebSocket alert feeds connecting to the official Space-Track NORAD API with client-side caching and rate limiting.',
    specs: [
      { key: 'SPATIAL_ENGINE', val: 'CesiumJS 3D WebGL Globe' },
      { key: 'EPHEMERIS_FEED', val: 'Space-Track NORAD API' },
      { key: 'CONJUNCTION_RISK', val: 'Proximity Vector Calculation' },
      { key: 'ALERT_TRANSPORT', val: 'Real-time WebSockets' },
    ],
    stack: ['React', 'TypeScript', 'CesiumJS', 'FastAPI', 'Tailwind CSS', 'Space-Track API', 'WebSockets'],
    liveUrl: 'https://kessler-x.vercel.app',
    githubUrl: 'https://github.com/Anish1302D/KesslerX',
  },
  {
    code: '03',
    category: 'SYS_COMMUNICATIONS // REAL-TIME MEDIA',
    awardTag: 'COMPLETED PRODUCTION BUILD',
    title: 'HEYLO APP',
    subtitle: 'Real-Time Peer-to-Peer Messaging & Voice Platform',
    description:
      'Real-time messaging and productivity application built with a custom liquid glass UI. Features WebRTC (PeerJS) peer-to-peer encrypted audio calling, Socket.io presence indicators, typing feedback, read receipts, and secure Node.js/Express authentication backed by MongoDB, JWT tokens, and bcrypt hashing.',
    specs: [
      { key: 'AUDIO_STREAMING', val: 'PeerJS (WebRTC P2P Voice)' },
      { key: 'SOCKET_CORE', val: 'Socket.io Event Gateway' },
      { key: 'SECURITY', val: 'JWT Auth + Bcrypt Hashing' },
      { key: 'PERSISTENCE', val: 'MongoDB Document Engine' },
    ],
    stack: ['React', 'Vite', 'Socket.io', 'PeerJS (WebRTC)', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Anish1302D/HeyLoApp',
  },
  {
    code: '04',
    category: 'SYS_GEOSPATIAL // OFFLINE EDGE PWA',
    awardTag: 'COMPLETED PRODUCTION BUILD',
    title: 'SMART TREK COMPANION',
    subtitle: 'Offline-First Progressive Web App for Trekkers',
    description:
      'Progressive Web App engineered for wilderness safety and offline navigation. Features offline Mapbox GL tile caching, real-time GPS tracking, a RAG-based AI trekking advisor, YOLOv8 on-device wildlife detection, automated emergency SOS fall detection triggered via device accelerometers, and PostGIS routing.',
    specs: [
      { key: 'MAP_RUNTIME', val: 'Offline Mapbox GL JS' },
      { key: 'EDGE_VISION', val: 'YOLOv8 On-Device Detection' },
      { key: 'SAFETY_SENSOR', val: 'Accelerometer Fall SOS' },
      { key: 'GEO_SPATIAL', val: 'PostgreSQL + PostGIS' },
    ],
    stack: ['React', 'Zustand', 'Mapbox GL', 'Tailwind CSS', 'FastAPI', 'PostgreSQL (PostGIS)', 'YOLOv8'],
    githubUrl: 'https://github.com/Anish1302D/smart-trek-companion',
  },
];

const labsProjects = [
  {
    title: 'MEDASSIST PRO',
    tag: 'LLM NLP TRIAGE',
    desc: 'AI symptom analyzer and clinical triage engine using NLP-based diagnosis suggestions and physician recommendation routing.',
    stack: ['Next.js', 'Python', 'LangChain', 'MongoDB'],
  },
  {
    title: 'DATAVIZ STUDIO',
    tag: 'REAL-TIME ANALYTICS',
    desc: 'High-frequency telemetry visualization platform with drag-and-drop chart builder, live REST/Socket feeds, and vector reports.',
    stack: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'LEARNFORGE',
    tag: 'SPACED REPETITION',
    desc: 'Adaptive learning system with AI-curated mastery tracks, spaced repetition algorithms, and collaborative student workspaces.',
    stack: ['Next.js', 'Firebase', 'Tailwind', 'OpenAI API'],
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.project-spec-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
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
      id="projects"
      ref={containerRef}
      style={{
        backgroundColor: 'var(--bg-canvas)',
        borderBottom: '1px solid var(--border-hairline)',
        padding: '7rem 0',
      }}
    >
      <div className="content-wrapper">
        {/* Technical Section Metadata */}
        <div className="section-meta-header">
          <div className="section-code">
            SECTION // [01] — SELECTED SYSTEMS &amp; ENGINEERING BUILDS
          </div>
          <div style={{ color: 'var(--text-tertiary)' }}>
            4 PRIMARY BUILDS // 3 ACTIVE LABS
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title-large">
            PRODUCTION SYSTEMS
          </h2>
          <p className="section-lead">
            Software architectures engineered with genuine technical constraints, robust APIs, 
            machine intelligence pipelines, and verified production deployments.
          </p>
        </div>

        {/* Primary Project Specification Sheets */}
        <div ref={cardsRef} style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '5rem' }}>
          {primaryProjects.map((proj) => (
            <div
              key={proj.code}
              className="project-spec-card"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-hairline)',
                padding: '3rem',
                position: 'relative',
              }}
            >
              {/* Card Meta Bar */}
              <div
                className="project-header-row"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '1rem',
                  marginBottom: '2rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ color: 'var(--signal-orange)', fontWeight: 700 }}>
                    [{proj.code}]
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>
                    {proj.category}
                  </span>
                </div>
                <div
                  style={{
                    color: 'var(--signal-orange)',
                    border: '1px solid var(--border-hairline)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-xs)',
                  }}
                >
                  {proj.awardTag}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {proj.title}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    color: 'var(--signal-orange)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {proj.subtitle}
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  maxWidth: '920px',
                  marginBottom: '2.5rem',
                }}
              >
                {proj.description}
              </p>

              {/* 4 Architectural Specifications Matrix */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-hairline)',
                  padding: '1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                {proj.specs.map((s) => (
                  <div key={s.key} style={{ fontFamily: 'var(--font-mono)' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>
                      {s.key}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      {s.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                {proj.stack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cadmium"
                  >
                    LIVE DEPLOYMENT ↗
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-technical"
                  >
                    SOURCE REPOSITORY ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Active Research & Development (Labs) */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--signal-orange)',
              letterSpacing: '0.08em',
              marginBottom: '1.5rem',
              borderBottom: '1px solid var(--border-hairline)',
              paddingBottom: '0.6rem',
            }}
          >
            // ACTIVE RESEARCH &amp; DEVELOPMENT // LABS REGISTRY
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {labsProjects.map((lab) => (
              <div
                key={lab.title}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-hairline)',
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    marginBottom: '1rem',
                  }}
                >
                  <span style={{ color: 'var(--signal-amber)' }}>{lab.tag}</span>
                  <span style={{ color: 'var(--text-tertiary)' }}>IN PROGRESS</span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {lab.title}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                  }}
                >
                  {lab.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {lab.stack.map((t) => (
                    <span key={t} className="tech-tag" style={{ fontSize: '0.68rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
