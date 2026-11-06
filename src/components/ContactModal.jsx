import React, { useState, useEffect } from 'react';

export default function ContactModal({ isOpen, onClose, initialService, onToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Full Stack Web Systems');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    if (onToast) {
      onToast(`Thank you, ${name}! Your inquiry for "${service}" has been dispatched.`);
    }

    // Direct mailto dispatch
    const subject = encodeURIComponent(`Project Inquiry: ${service} — ${name}`);
    const body = encodeURIComponent(
      `Hello Anish,\n\nMy name is ${name} (${email}).\n\nI am inquiring about: ${service}.\n\nDetails:\n${message}\n\nBest regards,\n${name}`
    );
    window.open(`mailto:anishmogam@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative"
      >
        <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 font-mono">
              START A CONVERSATION
            </span>
            <h3 className="text-xl font-black uppercase text-neutral-900">
              LET'S BUILD SOMETHING
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-black hover:text-black cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Smith"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@company.com"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              Service / Discussion Area
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm bg-white"
            >
              <option value="AI & Telemetry Systems">AI & Telemetry Systems</option>
              <option value="Full Stack Web Systems">Full Stack Web Systems</option>
              <option value="UI/UX & Architecture">UI/UX & Architecture</option>
              <option value="High-Performance Landing Pages">High-Performance Landing Pages</option>
              <option value="Sphere Club Collaboration">Sphere Club Collaboration</option>
              <option value="Other Project / Hiring">Other / Hiring Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              Message
            </label>
            <textarea
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, engineering vision, and timeline..."
              className="w-full px-4 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition cursor-pointer shadow-md"
          >
            SEND MESSAGE ↗
          </button>
        </form>
      </div>
    </div>
  );
}
