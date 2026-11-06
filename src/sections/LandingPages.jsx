import React from 'react';
import WorksWheel from '../components/WorksWheel';

export const CONCEPT_STUDIES = [
  {
    title: 'Aether AI (Concept)',
    subtitle: 'Independent UI Concept &bull; Workspace Layout',
    description: 'An independent exploratory design prototype investigating minimalist dark-mode interfaces, modular panel layouts, and typography for data-heavy applications. (Self-directed design study).',
    image: '/landing-assets/landing-05-aether-ai.png',
    src: '/landing-assets/landing-05-aether-ai.png',
    stats: 'Self-directed conceptual design study exploring dark editorial typography.',
    tools: ['Figma', 'React', 'Tailwind CSS', 'UI Architecture'],
    deliverables: ['Interface Concept Mockup', 'Typography Hierarchy System', 'Component Layout Study']
  },
  {
    title: 'Aether Protocol (Concept)',
    subtitle: 'Independent UI Concept &bull; Technical Portal',
    description: 'A conceptual dark-mode landing page study focusing on high-contrast technical documentation aesthetics, monospace accents, and clean layout grids. (Self-directed design study).',
    image: '/landing-assets/landing-06-aether-protocol.png',
    src: '/landing-assets/landing-06-aether-protocol.png',
    stats: 'Exploratory web interface studying technical portal typography.',
    tools: ['Figma', 'Next.js', 'Tailwind CSS'],
    deliverables: ['Editorial Page Layout', 'Monospace Typographic Grid', 'Component Structure']
  },
  {
    title: 'Afterform S01 (Concept)',
    subtitle: 'Independent UI Concept &bull; Brutalist Editorial',
    description: 'An exploratory design study testing brutalist editorial layout, high-contrast imagery, and asymmetric typography grids for modern visual storytelling. (Self-directed design study).',
    image: '/landing-assets/landing-03-afterform-s01.png',
    src: '/landing-assets/landing-03-afterform-s01.png',
    stats: 'Self-directed editorial concept testing brutalist layout asymmetry.',
    tools: ['Figma', 'HTML/CSS', 'Typography Design'],
    deliverables: ['Editorial Lookbook Grid', 'Asymmetric Composition Study', 'Typography Scale']
  },
  {
    title: 'Afterform System (Concept)',
    subtitle: 'Independent UI Concept &bull; Minimalist Grid',
    description: 'An independent concept exploration focusing on pure typographic hierarchy, restrained monochrome palette, and content-first layout structures. (Self-directed design study).',
    image: '/landing-assets/landing-04-afterform-system.png',
    src: '/landing-assets/landing-04-afterform-system.png',
    stats: 'Visual design exploration studying volume, spacing, and minimalism.',
    tools: ['Figma', 'React', 'Tailwind CSS'],
    deliverables: ['Minimalist Web Layout', 'Grid System Exploration', 'Typography Styling']
  },
  {
    title: 'Maison Éléara (Concept)',
    subtitle: 'Independent UI Concept &bull; Editorial Showcase',
    description: 'An exploratory e-commerce concept examining serif typography pairing, luxury editorial margins, and minimal product showcases. (Self-directed design study).',
    image: '/landing-assets/landing-01-eleara.png',
    src: '/landing-assets/landing-01-eleara.png',
    stats: 'Exploratory luxury editorial concept studying micro-interactions.',
    tools: ['Figma', 'React', 'Tailwind CSS'],
    deliverables: ['Editorial Showcase Layout', 'Product Detail Mockup', 'Typography Pairing']
  },
  {
    title: 'Éléara Campaign (Concept)',
    subtitle: 'Independent UI Concept &bull; Texture & Layout',
    description: 'A conceptual campaign page design exploring organic textural backgrounds, subtle earthy color palettes, and editorial whitespace. (Self-directed design study).',
    image: '/landing-assets/landing-02-eleara-campaign.png',
    src: '/landing-assets/landing-02-eleara-campaign.png',
    stats: 'Self-directed visual study testing organic texture and typography.',
    tools: ['Figma', 'Three.js', 'Tailwind CSS'],
    deliverables: ['Visual Campaign Mockup', 'Background Integration Study', 'Responsive Typography']
  }
];

export default function LandingPages({ onSelectProject }) {
  return (
    <section
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-16"
      data-purpose="ui-experiments-concepts"
      id="concepts"
    >
      {/* Header with Title */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
            INDEPENDENT VISUAL &amp; INTERFACE STUDIES
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
            UI EXPERIMENTS &amp; CONCEPTS
          </h2>
        </div>
        <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider max-w-md text-left md:text-right">
          SELF-DIRECTED INTERFACE EXPERIMENTS EXPLORING EDITORIAL TYPOGRAPHY AND 3D CYLINDRICAL PRESENTATION.
        </p>
      </div>

      {/* Transparency Note */}
      <div className="mb-6 px-4 py-3 rounded-xl bg-neutral-100 border border-neutral-200 text-[11px] text-neutral-600 font-mono">
        <strong>NOTE:</strong> The entries below are self-directed design experiments and UI concept studies exploring editorial aesthetics and layout structures. They are independent concept explorations, not commercial client projects or production deployments.
      </div>

      {/* WorksWheel 3D Container */}
      <div className="w-full relative overflow-hidden rounded-3xl border border-neutral-200 bg-white" style={{ height: '640px', minHeight: '520px' }}>
        <WorksWheel
          items={CONCEPT_STUDIES}
          label="Concepts"
          action="Inspect"
          onSelect={(_idx, item) => {
            if (onSelectProject) onSelectProject(item);
          }}
        />
      </div>
    </section>
  );
}
