import React from 'react';
import WorksWheel from '../components/WorksWheel';

export const LANDING_PAGES_DATA = [
  {
    title: 'Aether AI',
    subtitle: 'Cognitive Workspace & Deep Reasoning',
    description: 'A cognitive workspace engineered for deep systemic research, disciplined reasoning, and structural synthesis with real-time active node synthesis.',
    image: '/landing-assets/landing-05-aether-ai.png',
    src: '/landing-assets/landing-05-aether-ai.png',
    link: 'https://github.com/Anish1302D',
    stats: 'Active Node Engine • Systemic Synthesis • Structural Research',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'AI Engine'],
    deliverables: ['Cognitive Workspace UI', 'Active Node Telemetry', 'Interactive Reasoning Canvas']
  },
  {
    title: 'Aether Protocol',
    subtitle: 'Private Preview & Monolithic Deployment',
    description: 'Exclusive onboarding portal and architectural briefing interface engineered for research scientists, architectural principals, and technical executives.',
    image: '/landing-assets/landing-06-aether-protocol.png',
    src: '/landing-assets/landing-06-aether-protocol.png',
    link: 'https://github.com/Anish1302D',
    stats: 'Version 4.5.2 • Monolithic Core Stability • Immediate Deployment',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
    deliverables: ['Briefing Reservation Portal', 'Monolithic Design System', 'Executive Onboarding Flow']
  },
  {
    title: 'Afterform S01',
    subtitle: 'Brutalist Campaign & Visual Monograph',
    description: 'A seasonal fashion campaign and visual monograph capturing structural streetwear silhouettes framed against raw monolithic concrete architecture.',
    image: '/landing-assets/landing-03-afterform-s01.png',
    src: '/landing-assets/landing-03-afterform-s01.png',
    link: 'https://github.com/Anish1302D',
    stats: 'Campaign S01 • Frame Ref: 35mm_Exp_09 • Visual Monograph',
    tools: ['Next.js', 'Tailwind CSS', 'Figma', 'Lenis Scroll'],
    deliverables: ['Visual Monograph Experience', 'High-Resolution Lookbook', 'Seasonal Campaign Direction']
  },
  {
    title: 'Afterform System',
    subtitle: 'Brutalist Apparel & Brand Manifesto',
    description: 'A monolithic architectural apparel manifesto stripping garments of emblems and logos, focusing on pure volume, silhouette, and human-concrete alignment.',
    image: '/landing-assets/landing-04-afterform-system.png',
    src: '/landing-assets/landing-04-afterform-system.png',
    link: 'https://github.com/Anish1302D',
    stats: 'Tokyo Studio • Berlin Lab • Seoul Showroom',
    tools: ['React', 'Tailwind CSS', 'Figma', 'GSAP'],
    deliverables: ['Brand Manifesto Landing Page', 'Brutalist Lookbook System', 'E-Commerce Catalog Layout']
  },
  {
    title: 'Maison Éléara',
    subtitle: 'Fine Jewellery & Parisian Atelier',
    description: 'An haute jewellery boutique celebrating sculpted contours in heavy fairmined gold born from geological stillness, crafted in Paris Place Vendôme.',
    image: '/landing-assets/landing-01-eleara.png',
    src: '/landing-assets/landing-01-eleara.png',
    link: 'https://github.com/Anish1302D',
    stats: 'Place Vendôme Atelier • 18k Recycled Gold • Aurelia Torc & Drops',
    tools: ['Figma', 'React', 'Tailwind CSS', 'High-Precision Typography'],
    deliverables: ['Fine Jewellery Boutique', 'Atelier Concierge Interface', 'Artisanal Archive Showcase']
  },
  {
    title: 'Éléara Campaign',
    subtitle: 'Campaign Edition Vol. IX — Sandstone Edit',
    description: 'An organic editorial campaign highlighting sculpted gold signet jewellery set against raw geological sandstone formations, with private salon concierge booking.',
    image: '/landing-assets/landing-02-eleara-campaign.png',
    src: '/landing-assets/landing-02-eleara-campaign.png',
    link: 'https://github.com/Anish1302D',
    stats: 'Campaign Edition Vol. IX • Sandstone Geology • Atelier Concierge',
    tools: ['WebGL', 'Three.js', 'Tailwind CSS', 'Smooth Scroll'],
    deliverables: ['Campaign Lookbook Experience', 'Private Salon Reservation Portal', 'Sensory Art Direction']
  }
];

export default function LandingPages({ onSelectProject }) {
  return (
    <section
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-16"
      data-purpose="landing-pages-featured-projects"
      id="landing-pages"
    >
      {/* Header with Title */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
            CREATIVE SITES &bull; 3D DRUM REEL
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
            LANDING PAGES
          </h2>
        </div>
        <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
          CYLINDRICAL 3D CAROUSEL &bull; CLICK TO INSPECT
        </p>
      </div>

      {/* WorksWheel 3D Container */}
      <div className="w-full relative overflow-hidden rounded-3xl border border-neutral-200 bg-white" style={{ height: '640px', minHeight: '520px' }}>
        <WorksWheel
          items={LANDING_PAGES_DATA}
          label="Works '26"
          action="View"
          onSelect={(_idx, item) => {
            if (onSelectProject) onSelectProject(item);
          }}
        />
      </div>
    </section>
  );
}
