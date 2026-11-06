import React from 'react';
import WorksWheel from '../components/WorksWheel';

export const CERTIFICATIONS_DATA = [
  {
    id: 'amd-slingshot-2026',
    isCertificate: true,
    title: 'AMD Slingshot 2026',
    subtitle: 'Competitive Milestone • AMD & Hack2skill',
    issuer: 'AMD & Hack2skill Platform',
    issueDate: 'June 2026',
    credentialId: '2026H2SAMDPUN-P00144',
    verificationUrl: 'https://certificate.hack2skill.com/verify/2026H2SAMDPUN-P00144',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-amd-slingshot.jpg',
    src: '/assets/certificates/cert-amd-slingshot.jpg',
    description: 'Official verified participation and prototype completion certificate for AMD Slingshot 2025–2026. Recognizes engineering leadership in designing and deploying InfraGuard AI — an intelligent multimodal computer vision and predictive infrastructure maintenance system.',
    stats: 'Verified Competitive Milestone • Multi-phase Hackathon Submission',
    tools: ['PyTorch', 'FastAPI', 'YOLOv8', 'ResNet', 'XGBoost', 'SHAP', 'Docker', 'React'],
    deliverables: [
      'Multimodal AI infrastructure failure prediction architecture',
      'YOLOv8 & ResNet computer vision defect classification',
      'Explainable AI feature impact scoring using SHAP',
      'Containerized high-throughput FastAPI inference service'
    ]
  },
  {
    id: 'solution-challenge-2026',
    isCertificate: true,
    title: 'GDSC Solution Challenge 2026',
    subtitle: 'Global Prototype • Google Developer Student Clubs',
    issuer: 'Google Developer Student Clubs & Hack2skill',
    issueDate: 'July 2026',
    credentialId: '2026H2S07SCBWAI-PS11418',
    verificationUrl: 'https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS11418',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-02-google-solution-challenge.png',
    src: '/assets/certificates/cert-02-google-solution-challenge.png',
    description: 'Official Prototype Submission Certificate for Google Developer Student Clubs Solution Challenge 2026 (Build with AI). Validates technical prototyping of software systems addressing United Nations Sustainable Development Goals using modern AI architectures.',
    stats: 'Verified Global Prototype Milestone • Google Developer Student Clubs',
    tools: ['Applied AI', 'Full-Stack Architecture', 'Google Cloud Platform', 'REST APIs', 'React'],
    deliverables: [
      'Architected end-to-end AI prototype targeting community-scale impact',
      'Integrated real-time predictive models with modern web interfaces',
      'Implemented responsive client design and resilient API endpoints'
    ]
  },
  {
    id: 'build-with-ai-pune-2026',
    isCertificate: true,
    title: 'Build with AI — Pune',
    subtitle: 'AI Engineering Milestone • Google Developer Community',
    issuer: 'Google Developer Community & Hack2skill',
    issueDate: '2026',
    credentialId: '2026H2S04BWAIPN-P00035',
    verificationUrl: 'https://certificate.hack2skill.com/verify/2026H2S04BWAIPN-P00035',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-04-ai-ml-specialization.png',
    src: '/assets/certificates/cert-04-ai-ml-specialization.png',
    description: 'Verified milestone certificate for Build with AI Pune edition, focused on engineering generative AI applications, model integration, and scalable API pipelines.',
    stats: 'Verified Regional Developer Milestone • Hack2skill Platform',
    tools: ['Generative AI', 'Python', 'FastAPI', 'LLM Integrations', 'Prompt Engineering'],
    deliverables: [
      'Built and evaluated localized AI workflows for production scenarios',
      'Engineered structured prompting pipelines and context management',
      'Collaborated with regional AI developers on system architectures'
    ]
  },
  {
    id: 'nptel-certification',
    isCertificate: true,
    title: 'NPTEL Technical Certification',
    subtitle: 'Academic & Industry Specialization • IIT / SWAYAM',
    issuer: 'NPTEL & Ministry of Education, Govt of India',
    issueDate: '2024 — 2025',
    credentialId: 'NPTEL-AM-2025-CS',
    verificationUrl: 'https://www.linkedin.com/in/anish-mogam/',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-nptel.jpg',
    src: '/assets/certificates/cert-nptel.jpg',
    description: 'Official verified NPTEL / SWAYAM certificate validating foundational computer science rigor, programming competencies, and data structures under academic evaluation from premier institutes.',
    stats: 'National Academic Certification • Government of India',
    tools: ['Computer Science Theory', 'Data Structures', 'Algorithms', 'System Design'],
    deliverables: [
      'Comprehensive coursework examination in core computer science disciplines',
      'Algorithmic complexity analysis and computational logic',
      'Structured academic evaluations and proctored certification examination'
    ]
  },
  {
    id: 'hack-the-flame',
    isCertificate: true,
    title: 'Hack The Flame Hackathon',
    subtitle: 'Competitive Engineering • Flame University',
    issuer: 'Flame University & Hackathon Committee',
    issueDate: '2024 — 2025',
    credentialId: 'HTF-AM-PUN-2025',
    verificationUrl: 'https://www.linkedin.com/in/anish-mogam/',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-hack-the-flame.jpg',
    src: '/assets/certificates/cert-hack-the-flame.jpg',
    description: 'Official certificate of participation and sprint achievement at Hack The Flame hackathon. Built innovative web solutions and collaborated with cross-functional developer teams during an intensive 36-hour build sprint.',
    stats: 'Competitive Hackathon Milestone • Rapid Prototyping',
    tools: ['Full-Stack Prototyping', 'React', 'FastAPI', 'Team Collaboration', 'Git Sprints'],
    deliverables: [
      'Developed high-velocity product prototype under hackathon constraints',
      'Implemented real-time client state and responsive interfaces',
      'Presented technical demo and architecture pitch to industry jury'
    ]
  },
  {
    id: 'faraway-milestone',
    isCertificate: true,
    title: 'Faraway Creative Technology',
    subtitle: 'Spatial & Interactive Systems Milestone',
    issuer: 'Faraway Developer Ecosystem',
    issueDate: '2025',
    credentialId: 'FARAWAY-AM-2025',
    verificationUrl: 'https://www.linkedin.com/in/anish-mogam/',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-faraway.jpg',
    src: '/assets/certificates/cert-faraway.jpg',
    description: 'Technical milestone credential recognizing creative frontend engineering, spatial UI paradigms, and real-time interactive experiences within the Faraway ecosystem.',
    stats: 'Interactive Systems & Creative Engineering Milestone',
    tools: ['Interactive WebGL', 'Three.js', 'Creative Frontend', 'Animation Loops'],
    deliverables: [
      'Engineered interactive 3D elements and spatial canvas graphics',
      'Optimized 60 FPS animation pipelines and render loops',
      'Implemented seamless physics-based user interactions'
    ]
  },
  {
    id: 'fullstack-web-systems',
    isCertificate: true,
    title: 'Full Stack Web Systems',
    subtitle: 'Engineering Specialization • Industry Track',
    issuer: 'Verified Curriculum & Applied Engineering',
    issueDate: '2024 — 2025',
    credentialId: 'AM-FSWD-SPPU-2025',
    verificationUrl: 'https://www.linkedin.com/in/anish-mogam/',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-03-fullstack-dev.png',
    src: '/assets/certificates/cert-03-fullstack-dev.png',
    description: 'Comprehensive industry-aligned specialization credential in full-stack web architecture. Covers component-driven client architecture, scalable REST and WebSocket microservices, relational database modeling, role-based access control, and production CI/CD deployments.',
    stats: 'Industry Specialization • End-to-End Web Engineering',
    tools: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'Git'],
    deliverables: [
      'Scalable component architectures using modern React and Vite',
      'Robust backend RESTful APIs with Node.js and Express',
      'Relational schema design and query optimization in PostgreSQL',
      'Production deployment workflows, state management, and authentication'
    ]
  },
  {
    id: 'sphere-community-founder',
    isCertificate: true,
    title: 'Sphere Community Founder',
    subtitle: 'Leadership & Ecosystem • Founder Credential',
    issuer: 'Sphere Community Platform (sphere-club.vercel.app)',
    issueDate: '2024 — Present',
    credentialId: 'SPHERE-FOUNDER-PUN-01',
    verificationUrl: 'https://sphere-club.vercel.app/',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-06-sphere-leadership.png',
    src: '/assets/certificates/cert-06-sphere-leadership.png',
    description: 'Leadership credential awarded for founding and stewarding Sphere Community — a student developer network and collaborative engineering ecosystem in Pune. Recognizes member recruitment, curriculum design, developer sprint facilitation, and hackathon project mentoring.',
    stats: 'Founder & Community Leadership • Active Stewardship',
    tools: ['Community Leadership', 'Technical Onboarding', 'Peer Code Review', 'Agile Sprints', 'React'],
    deliverables: [
      'Founded and organized developer community for university engineering peers',
      'Structured technical workshops, onboarding paths, and study groups',
      'Conducted collaborative code reviews and architecture retrospectives',
      'Mentored multiple student teams to hackathon prototype submissions'
    ]
  }
];

// Alias for backwards compatibility
export const CONCEPT_STUDIES = CERTIFICATIONS_DATA;

export default function LandingPages({ onSelectProject }) {
  return (
    <section
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-16 relative"
      data-purpose="certifications-licensing"
      id="certifications"
    >
      {/* Anchor alias for #concepts to preserve backwards compatibility */}
      <span id="concepts" className="absolute -top-24" />

      {/* Header with Title */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
            ACCREDITATIONS &bull; VERIFIED CREDENTIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
            CERTIFICATIONS &amp; LICENSES
          </h2>
        </div>
        <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider max-w-md text-left md:text-right">
          VERIFIED TECHNICAL CREDENTIALS, COMPETITIVE HACKATHON MILESTONES, AND SPECIALIZED ENGINEERING ACCREDITATIONS.
        </p>
      </div>

      {/* Credential Interaction Note */}
      <div className="mb-6 px-5 py-3.5 rounded-2xl bg-neutral-100 border border-neutral-200/90 text-[11px] text-neutral-700 font-mono flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>
            <strong>INTERACTIVE SHOWCASE:</strong> Drag or swipe the 3D cylinder to rotate credentials. Click any certificate to inspect issuing authority, credential ID, completion dates, and access instant third-party verification.
          </span>
        </div>
        <a
          href="https://www.linkedin.com/in/anish-mogam/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-black font-bold uppercase text-[10px] hover:underline shrink-0"
        >
          <span>LinkedIn Licenses &bull; Anish Mogam</span>
          <svg className="w-3 h-3 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
        </a>
      </div>

      {/* WorksWheel 3D Container */}
      <div className="w-full relative overflow-hidden rounded-3xl border border-neutral-200 bg-white" style={{ height: '640px', minHeight: '520px' }}>
        <WorksWheel
          items={CERTIFICATIONS_DATA}
          label="Licenses"
          action="Verify"
          onSelect={(_idx, item) => {
            if (onSelectProject) onSelectProject(item);
          }}
        />
      </div>
    </section>
  );
}
