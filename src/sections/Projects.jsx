import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const featuredProject = {
  label: '⭐ FEATURED',
  visual: '🛡️',
  type: 'AI · Infrastructure · Real-time',
  title: 'InfraGuard AI',
  desc: 'A multimodal infrastructure failure prediction system combining satellite imagery, traffic data, AQI, weather, and flood history through ResNet + XGBoost. Features a real-time monitoring dashboard across 4 cities, explainable AI via SHAP, and an automated critical alert system.',
  stack: ['Python', 'ResNet CNN', 'XGBoost', 'SHAP', 'React', 'FastAPI', 'OpenCV'],
  liveUrl: 'https://infraguard-ai-ltxb.onrender.com/dashboard',
  githubUrl: 'https://github.com/Anish1302D/infraguard-ai'
};

const gridProjects = [
  {
    visual: '🛰️',
    bg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(30, 58, 138, 0.1))',
    glowColor: 'rgba(6, 182, 212, 0.5)',
    type: 'Full Stack · AI · Aerospace',
    badge: { type: 'live', text: 'Live' },
    title: 'KesslerX',
    desc: 'AI-powered Orbital Traffic Management and Space Situational Awareness platform. Features a 3D CesiumJS globe tracking live satellite and debris data, orbital risk analysis, space weather forecasting, and real-time WebSocket conjunction alerts.',
    stack: ['React', 'TypeScript', 'CesiumJS', 'Tailwind CSS', 'FastAPI', 'Space-Track API', 'WebSockets'],
    liveUrl: 'https://kessler-x.vercel.app',
    githubUrl: 'https://github.com/Anish1302D/KesslerX'
  },
  {
    visual: '💬',
    bg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(245, 158, 11, 0.1))',
    glowColor: 'rgba(239, 68, 68, 0.5)',
    type: 'Full Stack · Real-time Chat',
    badge: { type: 'completed', text: 'Completed' },
    title: 'HeyLo App',
    desc: 'A real-time messaging and productivity application built with a custom liquid glass UI. Supports instant messaging, typing indicators, read receipts, and peer-to-peer WebRTC voice calling.',
    stack: ['React', 'Vite', 'Socket.io', 'PeerJS (WebRTC)', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Anish1302D/HeyLoApp',
    fullWidthGithub: true
  },
  {
    visual: '🏔️',
    bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(4, 120, 87, 0.1))',
    glowColor: 'rgba(16, 185, 129, 0.5)',
    type: 'PWA · AI · GIS',
    badge: { type: 'completed', text: 'Completed' },
    title: 'Smart Trek Companion',
    desc: 'AI-powered offline-first progressive web app for trekkers and outdoor enthusiasts. Features offline Mapbox navigation, real-time GPS tracking, RAG-based AI trekking guide, and automated SOS fall detection.',
    stack: ['React', 'Zustand', 'Mapbox GL', 'Tailwind CSS', 'FastAPI', 'Postgres + PostGIS', 'YOLOv8'],
    githubUrl: 'https://github.com/Anish1302D/smart-trek-companion',
    fullWidthGithub: true
  },
  {
    visual: '🧬',
    bg: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(59, 130, 246, 0.1))',
    glowColor: 'rgba(124, 58, 237, 0.5)',
    type: 'Full Stack · AI',
    badge: { type: 'dev', text: 'Under Development' },
    title: 'MedAssist Pro',
    desc: 'AI-powered symptom analyzer and triage assistant with NLP-based diagnosis suggestions and doctor recommendation engine.',
    stack: ['Next.js', 'Python', 'LangChain', 'MongoDB'],
    comingSoon: true
  },
  {
    visual: '📊',
    bg: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(16, 185, 129, 0.1))',
    glowColor: 'rgba(0, 229, 255, 0.5)',
    type: 'Dashboard · Analytics',
    badge: { type: 'dev', text: 'Under Development' },
    title: 'DataViz Studio',
    desc: 'Real-time data visualization platform with drag-and-drop chart builder, live API feeds, and exportable report generation.',
    stack: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    comingSoon: true
  },
  {
    visual: '🎓',
    bg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1))',
    glowColor: 'rgba(245, 158, 11, 0.5)',
    type: 'EdTech · Full Stack',
    badge: { type: 'dev', text: 'Under Development' },
    title: 'LearnForge',
    desc: 'Adaptive learning platform with AI-curated study paths, progress tracking, spaced repetition, and collaborative workspaces.',
    stack: ['Next.js', 'Firebase', 'Tailwind', 'OpenAI API'],
    comingSoon: true
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);

  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.to([headerRef.current, featuredRef.current, gridRef.current], {
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

      // Featured Project entrance
      gsap.fromTo(
        featuredRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      // Grid items stagger
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.project-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section id="projects" ref={containerRef}>
      <div className="projects-inner">
        <div className="projects-header" ref={headerRef}>
          <div className="section-label">Work</div>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-desc">
            Products built with precision, purpose, and a relentless drive to push boundaries.
          </p>
        </div>

        {/* Featured Project */}
        <div className="featured-project" ref={featuredRef}>
          <div className="featured-thumb">
            <div className="featured-thumb-bg" />
            <div className="featured-thumb-label">{featuredProject.label}</div>
            <div className="featured-thumb-visual">{featuredProject.visual}</div>
          </div>
          <div className="featured-info">
            <div className="project-type">{featuredProject.type}</div>
            <h3 className="project-title">{featuredProject.title}</h3>
            <p className="project-desc">{featuredProject.desc}</p>
            <div className="project-stack">
              {featuredProject.stack.map((item) => (
                <span className="stack-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn primary"
              >
                🔗 Live Demo
              </a>
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn secondary"
              >
                ⌥ GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="projects-grid" ref={gridRef}>
          {gridProjects.map((project) => (
            <div className="project-card" key={project.title}>
              <div
                className="project-card-thumb"
                style={{ background: project.bg }}
              >
                <span
                  style={{
                    fontSize: '3.5rem',
                    filter: `drop-shadow(0 0 20px ${project.glowColor})`
                  }}
                >
                  {project.visual}
                </span>
              </div>
              <div className="project-card-info">
                <div
                  className="project-type"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
                >
                  {project.type}
                  {project.badge && project.badge.type === 'live' && (
                    <span className="live-badge">{project.badge.text}</span>
                  )}
                  {project.badge && project.badge.type === 'completed' && (
                    <span className="completed-badge">{project.badge.text}</span>
                  )}
                  {project.badge && project.badge.type === 'dev' && (
                    <span className="dev-badge">{project.badge.text}</span>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span className="stack-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.comingSoon ? (
                    <span
                      className="proj-btn secondary"
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.5rem 1rem',
                        opacity: 0.5,
                        cursor: 'default'
                      }}
                    >
                      🚧 Coming Soon
                    </span>
                  ) : project.fullWidthGithub ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn secondary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      ⌥ GitHub Repository
                    </a>
                  ) : (
                    <>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="proj-btn primary"
                        >
                          🔗 Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="proj-btn secondary"
                        >
                          ⌥ GitHub
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
