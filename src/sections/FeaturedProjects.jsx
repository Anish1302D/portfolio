import React from 'react';
import FlexCarousel from '../components/FlexCarousel';

export const ANISH_PROJECTS = [
  {
    src: '/project-images/project-infraguard.png',
    alt: 'InfraGuard AI',
    title: 'InfraGuard AI',
    subtitle: 'Infrastructure Monitoring & Machine Learning Telemetry',
    description: 'An infrastructure failure prediction system built for AMD Slingshot 2025. Combines computer vision for road surface defect classification with predictive machine learning models and SHAP explainability.',
    link: 'https://infraguard-ai-ltxb.onrender.com',
    tools: ['Python', 'FastAPI', 'YOLOv8', 'PyTorch', 'ResNet', 'XGBoost', 'SHAP', 'React', 'Docker'],
    deliverables: ['Computer Vision Defect Detection', 'Predictive Failure Analysis', 'Explainable AI Dashboard (SHAP)'],
    stats: 'Multimodal prototype developed for AMD Slingshot 2025 competition.'
  },
  {
    src: '/project-images/project-smarttrek.png',
    alt: 'SP College Approval Hub',
    title: 'SP College Approval Hub',
    subtitle: 'Institutional Workflow & Procurement Management (ProcureFlow)',
    description: 'A structured workflow management system for institutional requests and department approvals. Features multi-tier approval routing, role-based access control (RBAC), document security, and request versioning.',
    link: 'https://github.com/Anish1302D',
    tools: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    deliverables: ['Role-Based Access Control (RBAC)', 'Multi-Tier Approval Stages', 'Document Security & Audit Logging'],
    stats: 'Workflow automation system for institutional and academic request approval.'
  },
  {
    src: '/project-images/project-kesslerx.png',
    alt: 'KesslerX',
    title: 'KesslerX',
    subtitle: 'Space Situational Awareness & Orbital Visualization',
    description: 'An orbital situational awareness interface exploring satellite ephemeris, orbital trajectory visualization, and collision-risk concepts built with CesiumJS 3D and Space-Track public telemetry.',
    link: 'https://kessler-x.vercel.app',
    tools: ['React', 'TypeScript', 'CesiumJS', 'FastAPI', 'Tailwind CSS'],
    deliverables: ['3D CesiumJS Orbital Globe', 'Space-Track API Integration', 'Orbital Conjunction Risk Visualizer'],
    stats: 'Interactive 3D visualization of satellites and orbital debris paths.'
  },
  {
    src: '/project-images/project-heylo.png',
    alt: "God's Eye View",
    title: "God's Eye View",
    subtitle: 'Geospatial Visualization & Virtual Globe',
    description: 'A geospatial exploration and mapping tool featuring interactive 3D globe visualization with public data layers and spatial coordinates using CesiumJS and modern web APIs.',
    link: 'https://github.com/Anish1302D',
    tools: ['CesiumJS', 'JavaScript', 'HTML5', 'CSS3', 'Web APIs'],
    deliverables: ['Interactive 3D Geospatial Globe', 'Public Data Layer Integration', 'Coordinate Controls & Camera Navigation'],
    stats: 'Geospatial web application exploring 3D coordinate mapping.'
  },
  {
    src: '/project-images/project-sphere.png',
    alt: 'Sphere Community',
    title: 'Sphere Community Platform',
    subtitle: 'Student Developer Community Hub & Showcase',
    description: 'Digital platform for Sphere Community, a peer-led student developer community in Pune founded by Anish Mogam. Facilitates student collaboration, peer code sessions, and project showcases.',
    link: 'https://sphere-club.vercel.app',
    tools: ['React', 'Tailwind CSS', 'Vercel', 'JavaScript'],
    deliverables: ['Community Directory & Onboarding', 'Project Collaboration Showcase', 'Resource Sharing Repository'],
    stats: 'Founder-led community connecting student developers across Pune.'
  },
  {
    src: '/project-images/project-atelier.png',
    alt: 'Personal Portfolio',
    title: 'Personal Portfolio',
    subtitle: 'React, Vite & GSAP Architecture',
    description: 'Modern component-based developer portfolio built from scratch with React, Vite, and GSAP. Features custom animation timelines, horizontal spatial canvas, and WebGL liquid shader integration.',
    link: 'https://github.com/Anish1302D/portfolio',
    tools: ['React', 'Vite', 'GSAP', 'Tailwind CSS', 'OGL / WebGL'],
    deliverables: ['Custom GSAP Scroll Timelines', 'Hardware-Accelerated WebGL Shaders', 'Clean Modular Component Architecture'],
    stats: 'Lightweight, responsive personal portfolio build.'
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
            FEATURED BUILDS &bull; SELECTED PROJECTS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
            FEATURED PROJECTS
          </h2>
        </div>
        <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
          CLICK CARD OR DRAG CAROUSEL TO VIEW DETAILS
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
