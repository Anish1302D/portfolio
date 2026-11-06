import React from 'react';
import WorksWheel from '../components/WorksWheel';

export const CERTIFICATIONS_DATA = [
  {
    id: 'amd-slingshot-2026',
    isCertificate: true,
    title: 'AMD Slingshot 2026',
    subtitle: 'AMD • Hackathon Milestone',
    issuer: 'AMD',
    issueDate: 'Apr 2026',
    credentialId: '2026H2SAMDPUN-P00144',
    verificationUrl: 'https://certificate.hack2skill.com/verify/2026H2SAMDPUN-P00144',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-amd-slingshot.jpg',
    src: '/assets/certificates/cert-amd-slingshot.jpg',
    description: 'AMD Slingshot Campus Days Ideathon 2026 – Certificate of Participation. Awarded for developing InfraGuard AI, an intelligent multimodal computer vision and predictive infrastructure maintenance system.',
    stats: 'Verified Ideathon Milestone • AMD Slingshot',
    tools: ['Agentic Workflows', 'Vibe Coding', 'Multimodal AI', 'PyTorch', 'FastAPI'],
    deliverables: [
      'Engineered multimodal predictive model for infrastructure failure prevention',
      'Implemented agentic workflows and computer vision inspection pipelines',
      'Containerized high-throughput inference API on FastAPI'
    ]
  },
  {
    id: 'far-away-2026',
    isCertificate: true,
    title: 'FAR AWAY 2026 – International Hackathon',
    subtitle: 'Zuup • International Competition',
    issuer: 'Zuup',
    issueDate: 'Aug 2026',
    credentialId: 'FA26-U3Y1LK67-03',
    verificationUrl: 'https://www.linkedin.com/in/anish-mogam/',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-faraway.jpg',
    src: '/assets/certificates/cert-faraway.jpg',
    description: 'Participated as a Round 2 contestant in the FAR AWAY 2026 – International Hackathon, representing Team ProtonEdge. Demonstrated competitive machine learning and software engineering capabilities.',
    stats: 'International Round 2 Contestant • Team ProtonEdge',
    tools: ['Python', 'Machine Learning', 'Team Collaboration', 'API Systems'],
    deliverables: [
      'Advanced to Round 2 in international hackathon competition',
      'Collaborated on machine learning model development and evaluation',
      'Engineered data processing pipelines for high-dimensional problem sets'
    ]
  },
  {
    id: 'solution-challenge-2026',
    isCertificate: true,
    title: 'Solution Challenge 2026: Build with AI',
    subtitle: 'GDG Pune • Prototype Submission',
    issuer: 'GDG Pune',
    issueDate: 'Jul 2026',
    credentialId: '2026H2S07SCBWAI-PS11418',
    verificationUrl: 'https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS11418',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-02-google-solution-challenge.png',
    src: '/assets/certificates/cert-02-google-solution-challenge.png',
    description: 'Awarded for successfully submitting a prototype in the Solution Challenge 2026: Build with AI. Recognized for contributing to technical innovation and practical problem-solving using modern AI development tools.',
    stats: 'Verified Prototype Submission • GDG Pune',
    tools: ['Artificial Intelligence (AI)', 'Machine Learning', 'Google Cloud', 'React'],
    deliverables: [
      'Designed and deployed working AI solution prototype addressing community challenges',
      'Integrated machine learning models into intuitive user interfaces',
      'Validated end-to-end user workflows and model accuracy'
    ]
  },
  {
    id: 'google-build-with-ai-bootcamp',
    isCertificate: true,
    title: 'Google Build with AI Bootcamp',
    subtitle: 'GDG Pune • Developer Bootcamp',
    issuer: 'GDG Pune',
    issueDate: 'Jun 2026',
    credentialId: '2026H2S04BWAIPN-P00035',
    verificationUrl: 'https://certificate.hack2skill.com/verify/2026H2S04BWAIPN-P00035',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-04-ai-ml-specialization.png',
    src: '/assets/certificates/cert-04-ai-ml-specialization.png',
    description: 'Successfully participated in the Build with AI Bootcamp, Pune, organized under the Google for Developers – Build with AI initiative. Gained hands-on experience in building autonomous AI Agents and workflow orchestration.',
    stats: 'Verified Developer Bootcamp • Google for Developers Initiative',
    tools: ['AI Agents', 'Architect workflow', 'LLM Pipelines', 'Python'],
    deliverables: [
      'Implemented agentic decision-making and tool-calling architectures',
      'Engineered structured prompt templates and response validators',
      'Collaborated on scalable workflow automation patterns'
    ]
  },
  {
    id: 'amd-ai-agents-101',
    isCertificate: true,
    title: 'AI Agents 101: Building AI Agents with MCP and Open-Source Inference',
    subtitle: 'AMD • AMD AI Academy',
    issuer: 'AMD',
    issueDate: 'Jun 2026',
    credentialId: 'AMD-AI-AGENTS-101',
    verificationUrl: 'https://www.linkedin.com/in/anish-mogam/',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-amd-ai-agents.jpg',
    src: '/assets/certificates/cert-amd-ai-agents.jpg',
    description: 'Successfully completed the AI Agents 101: Building AI Agents with MCP and Open-Source Inference course offered by AMD AI Academy. Covered core paradigms of Model Context Protocol (MCP), tool integration, and running local/open-source inference.',
    stats: 'AMD AI Academy Certification • Agentic Systems',
    tools: ['AI Agents', 'Agentic AI Development', 'MCP (Model Context Protocol)', 'Open-Source Inference'],
    deliverables: [
      'Mastered Model Context Protocol (MCP) server and client integration',
      'Configured local and open-source model inference pipelines',
      'Engineered multi-step autonomous tool-using agentic workflows'
    ]
  },
  {
    id: 'amd-diffusion-models',
    isCertificate: true,
    title: 'Diffusion Models: From Prompts to Images and Video',
    subtitle: 'AMD • AMD AI Academy',
    issuer: 'AMD',
    issueDate: 'May 2026',
    credentialId: 'AMD-DIFFUSION-MODELS',
    verificationUrl: 'https://www.linkedin.com/in/anish-mogam/',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-amd-diffusion-models.jpg',
    src: '/assets/certificates/cert-amd-diffusion-models.jpg',
    description: 'Successfully completed the Diffusion Models: From Prompts to Images and Video course offered by AMD AI Academy. Covered fundamentals of diffusion probabilistic models, denoising score matching, latent diffusion, and generative media synthesis.',
    stats: 'AMD AI Academy Certification • Generative AI & Vision',
    tools: ['Diffusion Models', 'Computer Vision', 'Generative AI', 'Latent Space'],
    deliverables: [
      'Analyzed mathematical foundations of forward and reverse diffusion processes',
      'Explored text-to-image and text-to-video pipeline optimizations',
      'Implemented conditioning mechanisms and classifier-free guidance'
    ]
  },
  {
    id: 'nptel-c-programming',
    isCertificate: true,
    title: 'Problem Solving Through C Programming',
    subtitle: 'IIT Kharagpur • NPTEL / SWAYAM',
    issuer: 'Indian Institute of Technology, Kharagpur',
    issueDate: 'Apr 2025',
    credentialId: 'NPTEL25CS56S655200902',
    verificationUrl: 'https://www.linkedin.com/in/anish-mogam/',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-nptel.jpg',
    src: '/assets/certificates/cert-nptel.jpg',
    description: 'Successfully completed the rigorous 12-week NPTEL Online Certification course, Problem Solving Through Programming in C, offered through SWAYAM by IIT Kharagpur. Verified in algorithms, memory management, pointers, and data structures.',
    stats: '12-Week Rigorous Proctored Certification • IIT Kharagpur',
    tools: ['C (Programming Language)', 'Problem Solving', 'Data Structures', 'Memory Management'],
    deliverables: [
      'Proctored examination passing score across complex algorithmic challenges',
      'Pointer arithmetic, dynamic memory allocation, and data structures',
      'System-level computational logic and structured programming'
    ]
  },
  {
    id: 'hack-the-flame-2025',
    isCertificate: true,
    title: 'Certificate of Participation in Hack The Flame 2025',
    subtitle: 'Unstop • VPP CoEVA, Mumbai',
    issuer: 'Unstop',
    issueDate: 'Dec 2025',
    credentialId: '0845c7e5-6dca-4c2e-ae70-a4930c005ddf',
    verificationUrl: 'https://unstop.com/certificate-preview/0845c7e5-6dca-4c2e-ae70-a4930c005ddf',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-hack-the-flame.jpg',
    src: '/assets/certificates/cert-hack-the-flame.jpg',
    description: 'Participated in Hack The Flame 2025, a hackathon organized by Vasantdada Patil Pratishthan\'s College of Engineering and Visual Arts (VPP CoEVA), Mumbai, verified through Unstop.',
    stats: 'Verified Hackathon Participation • Unstop Platform',
    tools: ['Full-Stack Development', 'AI Agents', 'Fast Prototyping', 'Team Sprints'],
    deliverables: [
      'Built multi-tier application prototype within hackathon sprint timeline',
      'Integrated autonomous AI agents into user interaction flows',
      'Delivered full architecture review and competitive presentation'
    ]
  },
  {
    id: 'brain-bytes',
    isCertificate: true,
    title: 'Brain Bytes Technical Challenge',
    subtitle: 'Technical Competition & Innovation Milestone',
    issuer: 'Brain Bytes Competition Committee',
    issueDate: '2025 — 2026',
    credentialId: 'BRAIN-BYTES-AM-2026',
    verificationUrl: 'https://www.linkedin.com/in/anish-mogam/',
    linkedinUrl: 'https://www.linkedin.com/in/anish-mogam/',
    image: '/assets/certificates/cert-brain-bytes.jpg',
    src: '/assets/certificates/cert-brain-bytes.jpg',
    description: 'Official certificate awarded for participating in the Brain Bytes technical challenge. Validates problem solving, rapid engineering, and analytical thinking.',
    stats: 'Technical Competition Milestone • Brain Bytes',
    tools: ['Problem Solving', 'Algorithmic Thinking', 'Computer Science', 'Analytical Logic'],
    deliverables: [
      'Competed in timed algorithmic and computational reasoning challenge',
      'Developed creative technical solutions under competition constraints',
      'Recognized for analytical excellence and structured engineering'
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
