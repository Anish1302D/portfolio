import React from 'react';

export default function Footer({ onOpenContact }) {
  return (
    <footer
      className="w-full bg-[#0D0D0D] text-white pt-20 pb-12 mt-12"
      data-purpose="footer-section"
      id="contact"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 flex flex-col items-center">
        
        {/* Metallic Callout Headline */}
        <div className="w-full text-center py-6 md:py-10">
          <h2
            className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black uppercase leading-none tracking-tight footer-metallic-title select-none cursor-pointer"
            onClick={onOpenContact}
          >
            LET'S TALK
          </h2>
        </div>

        {/* Action Button Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8 mb-20">
          <a
            className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white"
            href="https://www.linkedin.com/in/anish-mogam-33a2b6218"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
            className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white"
            href="https://github.com/Anish1302D"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white"
            href="https://sphere-club.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            SPHERE CLUB
          </a>
          <a
            className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white"
            href="/anish-mogam-resume.html?print=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME ↗
          </a>
          <button
            onClick={onOpenContact}
            className="px-7 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase transition transform hover:scale-105 cursor-pointer shadow-lg"
          >
            CONTACT ME
          </button>
        </div>

        {/* Bottom Credits Bar */}
        <div className="w-full pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-widest uppercase text-neutral-500 font-semibold gap-4 font-mono">
          <div>PORTFOLIO &bull; ALL RIGHTS RESERVED</div>
          <div>ENGINEERED BY ANISH MOGAM &bull; PUNE, INDIA</div>
        </div>

      </div>
    </footer>
  );
}

