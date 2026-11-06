import React, { useState } from 'react';

export default function Services({ onInquire }) {
  const [activeItem, setActiveItem] = useState(0);

  const focusAreas = [
    {
      id: 0,
      title: 'FULL-STACK DEVELOPMENT',
      description: 'Building responsive frontend interfaces using React, Vite, and Tailwind CSS, coupled with robust backend APIs in FastAPI or Node.js/Express. Focused on modular component design, RESTful protocols, and relational (PostgreSQL) or document (MongoDB) database architectures.',
      capabilities: 'CAPABILITIES: REACT, VITE, FASTAPI, NODE.JS, RESTFUL APIS, POSTGRESQL',
      focusKey: 'Full-Stack Development'
    },
    {
      id: 1,
      title: 'APPLIED AI & MACHINE LEARNING',
      description: 'Implementing practical machine learning and computer vision solutions. Experience integrating YOLOv8 for object and defect detection, PyTorch/ResNet for visual classification, and XGBoost with SHAP explainability for interpretable predictive systems.',
      capabilities: 'CAPABILITIES: PYTORCH, YOLOV8, OPENCV, RESNET, XGBOOST, SHAP (EXPLAINABLE AI)',
      focusKey: 'Applied AI & Machine Learning'
    },
    {
      id: 2,
      title: 'INTERACTIVE WEB EXPERIENCES',
      description: 'Designing fluid, modern web animations and spatial interactions using GSAP ScrollTrigger timelines, responsive editorial layouts, and 3D canvas rendering using CesiumJS and Three.js.',
      capabilities: 'CAPABILITIES: GSAP MOTION, SCROLLTRIGGER, THREE.JS, CESIUMJS 3D GLOBE',
      focusKey: 'Interactive Web Experiences'
    },
    {
      id: 3,
      title: 'COMMUNITY & COLLABORATION',
      description: 'Founder of Sphere Community, facilitating collaborative technical discussions, code sessions, and project sprints for student developers in Pune. Enthusiastic about open-source contributions, peer learning, and hackathon teamwork.',
      capabilities: 'CAPABILITIES: SPHERE COMMUNITY LEADERSHIP, PEER ONBOARDING, TECHNICAL COLLABORATION',
      focusKey: 'Community & Collaboration'
    }
  ];

  return (
    <section
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-20"
      data-purpose="areas-of-focus-section"
      id="areas-of-focus"
    >
      {/* Centered Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
          CAPABILITIES &bull; TECHNICAL INTERESTS
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-4">
          AREAS OF FOCUS
        </h2>
        <p className="text-xs md:text-xs uppercase font-medium leading-relaxed tracking-wider text-neutral-500">
          TECHNICAL INTERESTS, CORE COMPETENCIES AND AREAS OF ACTIVE STUDY AS A COMPUTER SCIENCE UNDERGRADUATE AND SOFTWARE DEVELOPER.
        </p>
      </div>

      {/* Accordion Rows */}
      <div className="max-w-4xl mx-auto flex flex-col space-y-3.5">
        {focusAreas.map((item, idx) => {
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
                    {item.capabilities}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onInquire) onInquire(item.focusKey);
                    }}
                    className={`text-xs font-bold underline cursor-pointer hover:opacity-80 ${
                      isActive ? 'text-white' : 'text-black'
                    }`}
                  >
                    CONNECT / DISCUSS ↗
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
