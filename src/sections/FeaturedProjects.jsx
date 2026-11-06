import React from 'react';
import FlexCarousel from '../components/FlexCarousel';

export const ANISH_PROJECTS = [
  {
    src: '/project-images/thumb-infraguard.jpg',
    alt: 'InfraGuard AI',
    title: 'InfraGuard AI',
    subtitle: 'AI-Powered Infrastructure Monitoring & Road Defect Telemetry',
    description: 'An infrastructure failure prediction system built for AMD Slingshot. Combines computer vision for pothole and defect detection (98% confidence) with traffic flow analysis, weather telemetry, and predictive machine learning models with SHAP explainability.',
    link: 'https://infraguard-ai-ltxb.onrender.com',
    tools: ['Python', 'FastAPI', 'YOLOv8', 'PyTorch', 'ResNet', 'XGBoost', 'SHAP', 'React', 'Docker'],
    deliverables: ['Computer Vision Pothole & Defect Detection', 'Traffic Analysis & Weather Insights', 'Explainable AI Dashboard (SHAP)'],
    stats: 'Multimodal prototype developed for AMD Slingshot competition.'
  },
  {
    src: '/project-images/thumb-procureflow.jpg',
    alt: 'ProcureFlow',
    title: 'ProcureFlow',
    subtitle: 'Smart Procurement & Institutional Approval System (SP College)',
    description: 'A structured workflow management and procurement system developed for S.P. College, Pune. Features multi-tier approval routing, role-based access control (RBAC), document management, request versioning, and real-time tracking.',
    link: 'https://github.com/Anish1302D',
    tools: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    deliverables: ['Multi-Level Institutional Approvals', 'Role-Based Access Control (RBAC)', 'Document Management & Audit Tracking'],
    stats: 'Workflow automation system for institutional and academic request approval.'
  },
  {
    src: '/project-images/thumb-kesslerx.jpg',
    alt: 'KesslerX',
    title: 'KesslerX',
    subtitle: 'Real-Time Space Debris Tracking & Collision Risk Prediction',
    description: 'An orbital situational awareness interface exploring satellite ephemeris, real-time tracking of 36,000+ objects, orbital trajectory prediction, and collision-risk alerts built with CesiumJS 3D and Space-Track public telemetry.',
    link: 'https://kessler-x.vercel.app',
    tools: ['React', 'TypeScript', 'CesiumJS', 'FastAPI', 'Tailwind CSS'],
    deliverables: ['Real-Time Space Debris Tracking (36k+ Objects)', 'Automated Collision Risk Alerts', '3D Orbit Trajectory Prediction & Analytics'],
    stats: 'Interactive 3D visualization of satellites and orbital debris paths.'
  },
  {
    src: '/project-images/thumb-gods-eye-view.jpg',
    alt: "God's Eye View",
    title: "God's Eye View",
    subtitle: 'Aerial Geospatial Visualization & Virtual Drone Telemetry',
    description: 'A geospatial exploration and virtual aerial surveillance interface featuring interactive 3D globe visualization, drone camera perspectives, public data overlays, and high-precision spatial coordinate mapping.',
    link: 'https://github.com/Anish1302D',
    tools: ['CesiumJS', 'JavaScript', 'HTML5', 'CSS3', 'Web APIs'],
    deliverables: ['Virtual Drone Aerial Mapping Interface', 'Interactive 3D Geospatial Globe', 'Coordinate Controls & Camera Navigation'],
    stats: 'Geospatial web application exploring 3D coordinate mapping.'
  },
  {
    src: '/project-images/thumb-portfolio.jpg',
    alt: 'Personal Portfolio',
    title: 'Personal Portfolio',
    subtitle: 'React, Vite & GSAP Architecture',
    description: 'Modern developer portfolio built from scratch with React, Vite, and GSAP. Features 3D cylindrical drum certification showcase, fluid WebGL OGL liquid shaders, editorial typography, and modular component architecture.',
    link: 'https://github.com/Anish1302D/portfolio',
    tools: ['React', 'Vite', 'GSAP', 'Tailwind CSS', 'OGL / WebGL'],
    deliverables: ['Custom 3D Cylindrical Drum Showcase', 'Hardware-Accelerated WebGL Shaders', 'Clean Modular Component Architecture'],
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
