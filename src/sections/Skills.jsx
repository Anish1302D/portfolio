import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'LANGUAGES',
      description: 'Core programming and database query languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL']
    },
    {
      category: 'FRONTEND',
      description: 'Component architecture, styling, and modern build tooling',
      items: ['React', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'BACKEND',
      description: 'API services, microframeworks, and real-time communication',
      items: ['FastAPI', 'Node.js', 'Express', 'REST APIs', 'WebSockets']
    },
    {
      category: 'AI / MACHINE LEARNING',
      description: 'Computer vision, deep learning classifiers, and explainable AI',
      items: ['PyTorch', 'YOLOv8', 'OpenCV', 'CNNs (ResNet)', 'XGBoost', 'SHAP']
    },
    {
      category: 'INFRASTRUCTURE & DATABASES',
      description: 'Data storage engines, containerization, and version control',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'GitHub', 'Linux']
    },
    {
      category: 'INTERACTIVE & SPATIAL',
      description: 'Timeline animations, 3D visualization, and geospatial canvas',
      items: ['GSAP (ScrollTrigger)', 'Three.js', 'CesiumJS']
    }
  ];

  return (
    <section
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-16 border-t border-neutral-200"
      data-purpose="skills-section"
      id="skills"
    >
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
            TECHNICAL TOOLBOX &bull; TECHNOLOGIES WORKED WITH
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
            SKILLS &amp; STACK
          </h2>
        </div>
        <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider max-w-md text-left md:text-right">
          PRACTICAL TECHNOLOGIES WORKED WITH ACROSS ACADEMIC COURSEWORK, INDEPENDENT PROJECTS, AND APPLIED AI INITIATIVES.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-black transition-colors duration-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold tracking-widest uppercase text-neutral-900 font-mono">
                  {cat.category}
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  0{idx + 1}
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 mb-4 leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
              {cat.items.map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 text-[11px] font-mono font-medium tracking-tight hover:bg-black hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
