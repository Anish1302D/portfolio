import React from 'react';
import FlexCarousel from '../components/FlexCarousel';

export const ANISH_PROJECTS = [
  {
    src: '/project-images/project-infraguard.png',
    alt: 'InfraGuard AI',
    title: 'InfraGuard AI',
    subtitle: 'AMD Slingshot 2025 — Telemetry & Anomaly Detection',
    description: 'Automated infrastructure anomaly detection and autonomous remediation pipeline using machine learning telemetry and edge deployment for distributed cloud servers.',
    link: 'https://github.com/Anish1302D',
    tools: ['Python', 'FastAPI', 'PyTorch', 'React', 'Docker'],
    deliverables: ['Autonomous Remediation Engine', 'Telemetry Stream Pipeline', 'Edge Optimization Engine'],
    stats: 'Processes multi-node infrastructure telemetry with 99.4% anomaly precision.'
  },
  {
    src: '/project-images/project-kesslerx.png',
    alt: 'KesslerX',
    title: 'KesslerX',
    subtitle: 'Live Orbital Tracking & 3D Collision Avoidance',
    description: 'Live orbital traffic management, real-time collision prediction, and satellite tracking built with CesiumJS 3D and orbital mechanics algorithms.',
    link: 'https://github.com/Anish1302D',
    tools: ['CesiumJS', 'Three.js', 'React', 'TypeScript', 'Web Workers'],
    deliverables: ['3D Ephemeris Satellite Visualizer', 'Proximity Hazard Alert Matrix', 'Orbital Trajectory Calculator'],
    stats: 'Tracks 25,000+ orbital objects in real-time with sub-second collision forecast.'
  },
  {
    src: '/project-images/project-heylo.png',
    alt: 'HeyLo App',
    title: 'HeyLo App',
    subtitle: 'Decentralized WebRTC Communication Engine',
    description: 'Decentralized WebRTC peer-to-peer voice and real-time chat application with sub-50ms latency and end-to-end encryption.',
    link: 'https://github.com/Anish1302D',
    tools: ['WebRTC', 'Socket.io', 'Node.js', 'React', 'Tailwind'],
    deliverables: ['P2P Audio/Video Mesh', 'E2E Encrypted Signaling', 'Zero-Latency Presence Protocol'],
    stats: 'Sub-50ms glass-to-glass latency with zero intermediary media storage.'
  },
  {
    src: '/project-images/project-smarttrek.png',
    alt: 'Smart Trek Companion',
    title: 'Smart Trek Companion',
    subtitle: 'Offline Wilderness Navigation & YOLOv8 Hazard Detection',
    description: 'Offline-first Progressive Web App for wilderness navigation featuring Mapbox GL vector tiles, emergency beaconing, and YOLOv8 hazard identification.',
    link: 'https://github.com/Anish1302D',
    tools: ['PWA', 'Mapbox GL', 'YOLOv8', 'TensorFlow.js', 'IndexedDB'],
    deliverables: ['Offline Vector Map Tiles', 'Edge Hazard Detection (YOLOv8)', 'Emergency SOS Beacon'],
    stats: '100% offline functionality in remote terrain with 45ms computer vision inferencing.'
  },
  {
    src: '/project-images/project-sphere.png',
    alt: 'Sphere Club Portal',
    title: 'Sphere Club Portal',
    subtitle: 'Developer Community & Project Incubator',
    description: 'Official digital headquarters for the Sphere tech community (sphere-club.vercel.app). Facilitates collaborative sprints, project showcases, and student developer mentorship.',
    link: 'https://sphere-club.vercel.app',
    tools: ['Next.js', 'Tailwind CSS', 'Vercel', 'Supabase'],
    deliverables: ['Community Showcase System', 'Member Onboarding Portal', 'Project Sprints Hub'],
    stats: 'Engages active students and developers across Pune University.'
  },
  {
    src: '/project-images/project-atelier.png',
    alt: 'Atelier Portfolio Systems',
    title: 'Atelier Portfolio Systems',
    subtitle: 'Editorial Monochrome Architecture & Shaders',
    description: 'A high-performance portfolio crafted with modern typography, fluid interactions, WebGL shader bends, and curated engineering craft.',
    link: 'https://github.com/Anish1302D/portfolio',
    tools: ['React', 'Vite', 'GSAP', 'OGL', 'Tailwind'],
    deliverables: ['Editorial Design Architecture', 'WebGL Shader Bends', 'Fluid Scroll Kinetic Canvas'],
    stats: '100 Lighthouse performance score with 60/120 FPS hardware acceleration.'
  }
];

export default function FeaturedProjects({ onSelectProject }) {
  return (
    <section
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-16"
      data-purpose="featured-projects"
      id="projects"
    >
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
            SELECTED WORKS &bull; 2024–2026
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
            FEATURED PROJECT
          </h2>
        </div>
        <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
          DRAG OR CLICK CARD TO EXPLORE DETAILS
        </p>
      </div>

      {/* Dynamic Projects Content Area with FlexCarousel */}
      <div id="projects-content" className="w-full">
        <div
          id="flex-carousel-container"
          className="rounded-3xl border border-neutral-200 bg-[#EFEFEF] overflow-hidden shadow-inner"
          style={{ width: '100%', height: '560px', position: 'relative' }}
        >
          <FlexCarousel
            items={ANISH_PROJECTS}
            preset="liquid"
            intro="rise"
            cardHeight={0.5}
            gap={12}
            squeeze={0.2}
            focusOnClick={true}
            captions={true}
            onSelect={(index, item) => {
              if (onSelectProject) {
                onSelectProject(item);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}
