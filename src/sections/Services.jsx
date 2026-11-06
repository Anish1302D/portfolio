import React, { useState } from 'react';

export default function Services({ onInquire }) {
  const [activeItem, setActiveItem] = useState(2); // AI & Telemetry active by default

  const services = [
    {
      id: 0,
      title: 'UI/UX & ARCHITECTURE',
      description: 'User research, wireframing, interactive prototyping, and usability validation. Transforming complex workflows into effortless, delightful digital experiences.',
      deliverables: 'DELIVERABLES: USER FLOWS, WIREFRAMES, DESIGN TOKENS, FIGMA SPECS',
      serviceKey: 'UI/UX & Architecture'
    },
    {
      id: 1,
      title: 'FULL STACK WEB SYSTEMS',
      description: 'Bespoke web aesthetics with flawless responsive layouts, typography hierarchy, high-contrast dark modes, and crisp interactive animations backed by robust Node.js and cloud infrastructure.',
      deliverables: 'DELIVERABLES: FULL RESPONSIVE WEB APPS, REACT/NEXT.JS, CLOUD APIS',
      serviceKey: 'Full Stack Web Systems'
    },
    {
      id: 2,
      title: 'AI & TELEMETRY SYSTEMS',
      description: 'Intelligent predictive modeling, real-time telemetry processing, and edge computer vision (YOLOv8, PyTorch, Slingshot anomaly detection). Engineered to automate mission-critical pipelines.',
      deliverables: 'DELIVERABLES: ML TELEMETRY PIPELINE, REAL-TIME DATA STREAMS, EDGE MODELS',
      serviceKey: 'AI & Telemetry Systems'
    },
    {
      id: 3,
      title: 'HIGH-PERFORMANCE LANDING PAGES',
      description: 'High-converting editorial landing pages tailored for startups, developer tools, and product launches. Engineered with GSAP motion and WebGL shaders to capture attention.',
      deliverables: 'DELIVERABLES: EDITORIAL LAYOUT SYSTEM, GSAP/WEBGL SHADERS, PERFORMANCE 100',
      serviceKey: 'Landing Page Design'
    }
  ];

  return (
    <section
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-20"
      data-purpose="services-section"
      id="services"
    >
      {/* Centered Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-4">
          THE SERVICES WE PROVIDE
        </h2>
        <p className="text-xs md:text-xs uppercase font-medium leading-relaxed tracking-wider text-neutral-500">
          CREATING VISUALLY APPEALING AND FUNCTIONAL WEBSITES TAILORED TO CLIENT AND RESEARCH GOALS. PROVIDING A CONSISTENT USER EXPERIENCE ACROSS PLATFORMS.
        </p>
      </div>

      {/* Service Pill Rows Accordion */}
      <div className="max-w-4xl mx-auto flex flex-col space-y-3.5">
        {services.map((item, idx) => {
          const isActive = activeItem === idx;

          return (
            <div
              key={item.id}
              onClick={() => setActiveItem(isActive ? -1 : idx)}
              className={`accordion-item w-full flex flex-col px-6 py-4 rounded-3xl transition-all cursor-pointer ${
                isActive
                  ? 'active bg-black text-white shadow-xl scale-[1.01]'
                  : 'bg-white text-neutral-800 border border-neutral-300 hover:border-black'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-medium transition-colors ${
                    isActive ? 'border-neutral-700 text-neutral-300' : 'border-neutral-300 text-neutral-700'
                  }`}
                >
                  {idx + 1}
                </span>

                <span
                  className={`text-xs md:text-sm font-bold tracking-widest uppercase transition-colors ${
                    isActive ? 'text-white' : 'text-neutral-800'
                  }`}
                >
                  {item.title}
                </span>

                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                    isActive ? 'border-neutral-700 rotate-90' : 'border-neutral-300 rotate-0'
                  }`}
                >
                  <svg
                    className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-neutral-700'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="accordion-content">
                <p
                  className={`text-xs leading-relaxed max-w-2xl mb-4 ${
                    isActive ? 'text-neutral-300' : 'text-neutral-500'
                  }`}
                >
                  {item.description}
                </p>
                <div
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between border-t pt-3 gap-2 ${
                    isActive ? 'border-neutral-800' : 'border-neutral-200'
                  }`}
                >
                  <span className="text-[11px] font-mono text-neutral-400">
                    {item.deliverables}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onInquire) onInquire(item.serviceKey);
                    }}
                    className={`text-xs font-bold underline cursor-pointer hover:opacity-80 ${
                      isActive ? 'text-white' : 'text-black'
                    }`}
                  >
                    INQUIRE ↗
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

