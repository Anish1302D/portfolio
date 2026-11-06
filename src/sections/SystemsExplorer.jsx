import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const architectures = [
  {
    id: 'infraguard',
    systemCode: 'SYS_ARCH // 01',
    name: 'INFRAGUARD AI — MULTIMODAL INGESTION & SHAP PIPELINE',
    projectRef: 'AMD Slingshot Participant (2025)',
    description:
      'High-throughput multimodal infrastructure failure prediction system that unifies heterogeneous geospatial, environmental, and structural data into an ensemble model with explainable AI attribution.',
    stages: [
      {
        step: '01',
        label: 'DATA INGESTION',
        sub: 'Heterogeneous Multi-Source',
        nodes: ['Satellite Imagery (High-Res)', 'AQI Sensor Network', 'Traffic Density Matrices', 'Historical Flood Records'],
        details: 'Captures spatial, temporal, and atmospheric telemetry from disparate endpoints into standardized tensors.',
      },
      {
        step: '02',
        label: 'NEURAL PROCESSING',
        sub: 'ResNet-50 + XGBoost',
        nodes: ['ResNet CNN (Visual Extraction)', 'XGBoost Feature Tree', 'Cross-Modal Concat Layer', 'Spatial Geo-Index'],
        details: 'Combines deep visual representations of physical surfaces with tabular environmental vectors.',
      },
      {
        step: '03',
        label: 'EXPLAINABLE INFERENCE',
        sub: 'SHAP Attribution Layer',
        nodes: ['SHAP Value Extractor', 'Feature Importance Weights', 'Anomaly Threshold Gate', 'FastAPI Microservice'],
        details: 'Computes Shapley values per prediction so municipal engineers understand exact failure drivers.',
      },
      {
        step: '04',
        label: 'TELEMETRY DISPATCH',
        sub: '4-City Monitoring Deck',
        nodes: ['WebSocket Alert Stream', 'Automated Critical Dispatch', 'React Live Dashboard', 'Audit Log Storage'],
        details: 'Dispatches real-time risk scores across 4 monitored cities with automated critical mitigation triggers.',
      },
    ],
  },
  {
    id: 'kesslerx',
    systemCode: 'SYS_ARCH // 02',
    name: 'KESSLERX — ORBITAL CONJUNCTION & TELEMETRY ENGINE',
    projectRef: 'Live Deployment (kessler-x.vercel.app)',
    description:
      'Space Situational Awareness platform engineered to track orbital debris, forecast space weather disruptions, and stream real-time collision probability alerts via high-frequency WebSockets.',
    stages: [
      {
        step: '01',
        label: 'SPACE-TRACK INGEST',
        sub: 'NORAD Ephemeris Feed',
        nodes: ['Space-Track REST API', 'Two-Line Element (TLE) Parser', 'Orbital Velocity Vectors', 'Debris Catalog Sync'],
        details: 'Fetches and parses continuous satellite and space debris ephemeris vectors from official catalogs.',
      },
      {
        step: '02',
        label: 'RESILIENCE LAYER',
        sub: 'FastAPI Rate-Limiting',
        nodes: ['In-Memory Cache (Redis)', 'Rate-Limit Throttler', 'Failure Circuit Breaker', 'Fallback Ephemeris Mirror'],
        details: 'Protects against third-party API quotas and ensures zero-downtime availability for telemetry clients.',
      },
      {
        step: '03',
        label: 'CONJUNCTION ANALYSIS',
        sub: 'Proximity Risk Algorithms',
        nodes: ['Ellipsoidal Miss Distance', 'Covariance Matrix Math', 'Space Weather Perturbation', 'Event Risk Scoring'],
        details: 'Computes closest approach distances between high-value operational satellites and uncontrolled space debris.',
      },
      {
        step: '04',
        label: '3D SPATIAL CLIENT',
        sub: 'CesiumJS WebGL Engine',
        nodes: ['CesiumJS 3D Globe', 'WebSocket Conjunction Stream', 'Ephemeris Propagation', 'Tailwind HUD Layer'],
        details: 'Renders orbital trajectories in 3D WebGL space with low-latency event alerts pushed via sockets.',
      },
    ],
  },
  {
    id: 'sphere',
    systemCode: 'SYS_ARCH // 03',
    name: 'SPHERE COMMUNITY — COLLABORATIVE BUILDER ECOSYSTEM',
    projectRef: 'Founder & Community Architecture',
    description:
      'Student-led technology organization connecting engineers, hackathon competitors, and researchers to incubate production-grade open source software.',
    stages: [
      {
        step: '01',
        label: 'TALENT INGESTION',
        sub: 'SPPU Engineering Mesh',
        nodes: ['University Outreach (SPPU)', 'Skill Matrix Assessment', 'Domain Pod Allocation', 'Code Onboarding'],
        details: 'Identifies driven engineers across algorithms, artificial intelligence, and full-stack development.',
      },
      {
        step: '02',
        label: 'HACKATHON PIPELINE',
        sub: 'Rapid Prototyping War Room',
        nodes: ['Problem Decomposition', '24-48hr Sprint Cadence', 'Architectural Audits', 'MVP Stress Testing'],
        details: 'Structures competitive hackathon teams with disciplined version control, API contracts, and velocity.',
      },
      {
        step: '03',
        label: 'PROJECT INCUBATION',
        sub: 'Open Source Standards',
        nodes: ['Git Workflow Enforcers', 'CI/CD Automated Testing', 'Containerization (Docker)', 'Security Best Practices'],
        details: 'Transitions successful competition prototypes into maintainable, production-ready open source repositories.',
      },
      {
        step: '04',
        label: 'DEPLOYMENT & DEMO',
        sub: 'Production Edge Delivery',
        nodes: ['Vercel & Cloud Runtimes', 'Public Beta Testing', 'Technical Documentation', 'Ecosystem Showcase'],
        details: 'Ships verified platforms with live domains, structured documentation, and real public utility.',
      },
    ],
  },
];

export default function SystemsExplorer() {
  const containerRef = useRef(null);
  const [activeArchIndex, setActiveArchIndex] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const reducedMotion = useReducedMotion();
  const currentArch = architectures[activeArchIndex];
  const currentStage = currentArch.stages[activeStageIndex];

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      id="architecture"
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
            SECTION // [02] — SYSTEM ARCHITECTURE SPECIFICATIONS
          </div>
          <div style={{ color: 'var(--text-tertiary)' }}>
            INTERACTIVE SCHEMATIC EXPLORER
          </div>
        </div>

        <div style={{ marginBottom: '3.5rem' }}>
          <h2 className="section-title-large">
            ENGINEERING SCHEMATICS
          </h2>
          <p className="section-lead">
            Interactive system architecture breakdowns of flagship production platforms. 
            Inspect real ingestion pipelines, neural models, resilience layers, and client telemetries.
          </p>
        </div>

        {/* System Selector Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border-hairline)',
            paddingBottom: '1rem',
          }}
        >
          {architectures.map((arch, index) => {
            const isSelected = activeArchIndex === index;
            return (
              <button
                key={arch.id}
                type="button"
                onClick={() => {
                  setActiveArchIndex(index);
                  setActiveStageIndex(0);
                }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.05em',
                  padding: '0.65rem 1.2rem',
                  borderRadius: 'var(--radius-xs)',
                  border: isSelected ? '1px solid var(--signal-orange)' : '1px solid var(--border-hairline)',
                  backgroundColor: isSelected ? 'var(--signal-orange-dim)' : 'var(--bg-surface)',
                  color: isSelected ? 'var(--signal-orange)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ opacity: 0.6 }}>[{arch.systemCode.split('//')[1].trim()}]</span>
                <span style={{ fontWeight: isSelected ? 700 : 500 }}>{arch.name.split('—')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Architecture Header */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-hairline)',
            padding: '2rem',
            marginBottom: '1.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
            }}
          >
            <span style={{ color: 'var(--signal-orange)', fontWeight: 700 }}>
              {currentArch.systemCode}
            </span>
            <span style={{ color: 'var(--text-tertiary)', border: '1px solid var(--border-hairline)', padding: '0.2rem 0.5rem' }}>
              {currentArch.projectRef}
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
              marginBottom: '0.75rem',
            }}
          >
            {currentArch.name}
          </h3>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {currentArch.description}
          </p>
        </div>

        {/* 4-Stage Interactive Pipeline Flow */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          {currentArch.stages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <div
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                style={{
                  backgroundColor: isActive ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)',
                  border: isActive ? '1px solid var(--signal-orange)' : '1px solid var(--border-hairline)',
                  padding: '1.4rem',
                  cursor: 'none',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
              >
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--signal-orange)',
                    }}
                  />
                )}

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: isActive ? 'var(--signal-orange)' : 'var(--text-tertiary)',
                    marginBottom: '0.6rem',
                  }}
                >
                  <span>STAGE // {stage.step}</span>
                  {isActive && <span>ACTIVE</span>}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    letterSpacing: '0.02em',
                    marginBottom: '0.2rem',
                  }}
                >
                  {stage.label}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {stage.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Inspection Terminal */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-hairline)',
            padding: '2rem',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-hairline)',
              paddingBottom: '0.75rem',
              marginBottom: '1.25rem',
              fontSize: '0.75rem',
            }}
          >
            <div style={{ color: 'var(--signal-orange)' }}>
              // STAGE_{currentStage.step}_SUBSYSTEM_INSPECTION
            </div>
            <div style={{ color: 'var(--text-tertiary)' }}>
              CLICK STAGE CARD TO SWITCH VIEW
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'start',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                ACTIVE NODE PREREQUISITES &amp; MODULES:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {currentStage.nodes.map((node) => (
                  <span
                    key={node}
                    className="tech-tag active"
                  >
                    ↳ {node}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                ARCHITECTURAL SPECIFICATION &amp; PURPOSE:
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {currentStage.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

