import React, { useEffect } from 'react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const category = project.subtitle || project.category || 'FEATURED PROJECT';
  const title = project.title || 'PROJECT DETAILS';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto no-scrollbar p-6 sm:p-8 md:p-9 shadow-2xl border border-neutral-100 relative animate-scaleUp"
      >
        {/* Header */}
        <div className="relative text-center pb-4 mb-5 border-b border-neutral-100">
          <span className="block text-[11px] font-bold tracking-widest uppercase text-neutral-400 mb-1 font-mono">
            {category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-neutral-900 tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-black hover:text-black hover:bg-neutral-50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="space-y-5 text-sm text-neutral-700">
          {(project.src || project.image) && (
            <div className="w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-100 shadow-inner">
              <img
                src={project.src || project.image}
                alt={project.alt || title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}

          {project.description && (
            <p className="text-neutral-600 leading-relaxed font-normal text-sm sm:text-base text-center max-w-xl mx-auto">
              {project.description}
            </p>
          )}

          {project.stats && (
            <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-center">
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1 font-mono">
                Key Highlights
              </p>
              <p className="text-xs text-neutral-800 font-medium">
                {project.stats}
              </p>
            </div>
          )}

          {project.deliverables && project.deliverables.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2 text-center">
                Key Deliverables
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs text-neutral-600 max-w-md mx-auto">
                {project.deliverables.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          )}

          {project.tools && project.tools.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2 text-center">
                Technologies &amp; Architecture
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-800 text-[10px] font-semibold rounded-full uppercase font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.link && (
            <div className="pt-2 flex justify-center items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Visit Project / Repository ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
