import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const matrixDisciplines = [
  {
    code: '01',
    name: 'CLIENT RUNTIMES & INTERFACES',
    category: 'FRONTEND ARCHITECTURE',
    desc: 'High-performance interactive interfaces, state coordination, component lifecycles, and responsive design systems.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Framer Motion', 'shadcn/ui'],
  },
  {
    code: '02',
    name: 'BACKEND ARCHITECTURES & APIS',
    category: 'CORE SERVICES',
    desc: 'Resilient asynchronous microservices, rate-limiting layers, RESTful endpoints, and cryptographic JWT authentication.',
    tags: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'Flask', 'REST APIs', 'JWT Auth'],
  },
  {
    code: '03',
    name: 'MACHINE INTELLIGENCE & VISION',
    category: 'AI / ML PIPELINES',
    desc: 'Multimodal neural networks, convolutional vision extractors, gradient-boosted trees, and Shapley explainability.',
    tags: ['TensorFlow', 'ResNet CNN', 'XGBoost', 'SHAP / XAI', 'OpenCV', 'LangChain', 'Hugging Face', 'YOLOv8'],
  },
  {
    code: '04',
    name: 'CLOUD ORCHESTRATION & DEVOPS',
    category: 'DEPLOYMENT INFRASTRUCTURE',
    desc: 'Containerized environments, automated continuous integration, cloud edge runtimes, and distributed asset delivery.',
    tags: ['Docker', 'Vercel Edge', 'Firebase', 'GitHub Actions', 'Google Cloud', 'AWS (basics)'],
  },
  {
    code: '05',
    name: 'PERSISTENT STORAGE & GEO-INDEXES',
    category: 'DATA STORAGE',
    desc: 'Relational databases, spatial PostGIS queries, document stores, key-value in-memory caches, and NoSQL clusters.',
    tags: ['PostgreSQL (PostGIS)', 'MongoDB', 'MySQL', 'Redis', 'Firestore'],
  },
  {
    code: '06',
    name: 'ENGINEERING WORKBENCH & TOOLING',
    category: 'DEVELOPER WORKFLOW',
    desc: 'Version control, UNIX environments, interface prototyping, API test suites, and data science notebooks.',
    tags: ['Git / GitHub', 'Linux', 'Figma', 'Postman', 'VS Code', 'Jupyter'],
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      if (gridRef.current) {
        const blocks = gridRef.current.querySelectorAll('.matrix-block');
        gsap.fromTo(
          blocks,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="skills"
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
            SECTION // [04] — TECHNICAL ARSENAL &amp; CAPABILITIES
          </div>
          <div style={{ color: 'var(--text-tertiary)' }}>
            6 SUBSYSTEM DISCIPLINES // PRODUCTION STACK
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title-large">
            CAPABILITY SPECIFICATION MATRIX
          </h2>
          <p className="section-lead">
            Structured inventory of production languages, runtime frameworks, neural modeling toolkits, 
            and infrastructure platforms actively deployed across systems.
          </p>
        </div>

        {/* Matrix Grid */}
        <div
          ref={gridRef}
          className="matrix-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {matrixDisciplines.map((d) => (
            <div
              key={d.code}
              className="matrix-block"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-hairline)',
                padding: '2.2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  marginBottom: '1rem',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '0.6rem',
                }}
              >
                <span style={{ color: 'var(--signal-orange)', fontWeight: 700 }}>
                  SUBSYS_{d.code}
                </span>
                <span style={{ color: 'var(--text-tertiary)' }}>
                  {d.category}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                {d.name}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '1.8rem',
                }}
              >
                {d.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {d.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
