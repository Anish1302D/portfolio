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

  const isCert = Boolean(project.isCertificate || project.credentialId || project.issuer);
  const category = isCert
    ? (project.subtitle || 'VERIFIED CERTIFICATION')
    : (project.subtitle || project.category || 'FEATURED PROJECT');
  const title = project.title || (isCert ? 'CERTIFICATE DETAILS' : 'PROJECT DETAILS');

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
          <div className="flex items-center justify-center gap-1.5 mb-1.5">
            {isCert && (
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            )}
            <span className="block text-[11px] font-bold tracking-widest uppercase text-neutral-400 font-mono">
              {category}
            </span>
          </div>
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
          {/* Certificate Metadata Grid (if Certificate) */}
          {isCert && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 font-mono text-left">
              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                  ISSUING BODY
                </span>
                <span className="text-xs font-semibold text-neutral-900 leading-tight block">
                  {project.issuer || 'Industry Platform'}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                  DATE ISSUED
                </span>
                <span className="text-xs font-semibold text-neutral-900 leading-tight block">
                  {project.issueDate || project.date || '2024 — Present'}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                  CREDENTIAL ID
                </span>
                <span className="text-xs font-bold text-neutral-900 truncate block bg-white px-2 py-0.5 rounded border border-neutral-200">
                  {project.credentialId || 'VERIFIED'}
                </span>
              </div>
            </div>
          )}

          {(project.src || project.image) && (
            <div className={`w-full rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-100 shadow-inner flex items-center justify-center ${isCert ? 'p-2 sm:p-3 bg-neutral-50' : 'aspect-video bg-neutral-900/5'}`}>
              <img
                src={project.src || project.image}
                alt={project.alt || title}
                className={`w-full transition-transform ${isCert ? 'max-h-[380px] object-contain rounded-xl shadow-sm' : 'w-full h-full object-cover object-center'}`}
              />
            </div>
          )}

          {project.description && (
            <p className="text-neutral-600 leading-relaxed font-normal text-sm sm:text-base text-center max-w-xl mx-auto">
              {project.description}
            </p>
          )}

          {project.stats && !isCert && (
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
                {isCert ? 'Verified Competencies' : 'Key Deliverables'}
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
                {isCert ? 'Technologies & Domains' : 'Technologies & Architecture'}
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

          {/* Action & Verification Buttons */}
          {isCert ? (
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              {project.verificationUrl && (
                <a
                  href={project.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  <span>Verify Credential</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              <a
                href={project.linkedinUrl || "https://www.linkedin.com/in/anish-mogam/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-neutral-800 hover:text-black hover:border-black text-xs font-bold uppercase tracking-wider transition-all hover:bg-neutral-50"
              >
                <span>View on LinkedIn</span>
                <svg className="w-3.5 h-3.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          ) : (
            project.link && (
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
            )
          )}
        </div>
      </div>
    </div>
  );
}

