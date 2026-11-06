import React from 'react';

export default function Hero({ onSelectFocus }) {
  return (
    <main
      className="relative max-w-[1400px] mx-auto px-6 md:px-14 pt-6 md:pt-10 pb-20 overflow-hidden"
      data-purpose="hero-section"
      id="home"
    >
      {/* Editorial Role Tagline */}
      <div className="text-center w-full mb-3">
        <span className="inline-block text-[11px] md:text-xs font-mono font-semibold tracking-widest uppercase text-neutral-500">
          Computer Science Student &bull; Full-Stack Developer &bull; Applied AI Developer
        </span>
      </div>

      {/* Big Title Header with Persona Statement */}
      <div className="text-center w-full mb-4 md:mb-6 relative z-0 select-none">
        <h1
          id="hero-title"
          className="text-[9.5vw] md:text-[8rem] lg:text-[9.5rem] font-extrabold uppercase leading-[0.85] tracking-tight"
        >
          <span className="block">
            <span className="text-[#121212]">EXPLORE MY</span>
          </span>
          <span className="block">
            <span className="metallic-title">PORTFOLIO</span>
          </span>
        </h1>
        <p className="mt-3 md:mt-4 text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-800">
          Building software that turns ideas into reality.
        </p>
      </div>

      {/* Center Headshot & Symmetrical Content Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 items-center mt-2 md:-mt-6">
        
        {/* Left Column: Academic Affiliation & Arrow */}
        <div className="md:col-span-3 flex flex-col items-start md:items-start pl-2 md:pl-6 order-2 md:order-1 pt-6 md:pt-0">
          <span className="text-[11px] md:text-xs font-bold tracking-wider uppercase text-neutral-800 mb-2">
            B.Sc. Computer Science
          </span>
          <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-500 mb-6">
            S.P. College &bull; SPPU
          </span>
          <a
            className="circle-btn w-14 h-14 md:w-16 md:h-16 border-neutral-300"
            href="#about"
            aria-label="Scroll to About Section"
          >
            <svg
              className="w-5 h-5 text-neutral-800 transform rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>
        </div>

        {/* Center Column: Headshot (in front of text) */}
        <div className="md:col-span-6 flex justify-center order-1 md:order-2 relative z-10 -mt-16 md:-mt-36">
          <div className="relative w-[320px] h-[400px] md:w-[480px] md:h-[580px] flex items-end justify-center hero-portrait-mask">
            <img
              src="/assets/hero_portrait.png"
              alt="Anish Mogam — Computer Science Student & Developer"
              className="w-full h-full object-contain object-bottom pointer-events-none select-none transition-transform duration-700 hover:scale-[1.02]"
              onError={(e) => {
                e.currentTarget.src = '/assets/original_template_silhouette.png';
              }}
            />
          </div>
        </div>

        {/* Right Column: Supporting Pitch and Focus Areas */}
        <div className="md:col-span-3 flex flex-col items-start md:items-end text-left order-3 pt-6 md:pt-0 pr-2 md:pr-6 space-y-8">
          {/* Supporting Statement per Content Brief */}
          <p className="text-[11px] md:text-xs uppercase font-medium leading-relaxed tracking-wider text-neutral-700 max-w-[240px] text-left">
            I'm Anish Mogam, a Computer Science student and developer from Pune, India. I enjoy building web applications, exploring AI-powered solutions and turning interesting ideas into working software.
          </p>

          {/* Quick Focus Links */}
          <div className="flex flex-col space-y-2.5 text-[11px] md:text-xs font-semibold tracking-widest text-neutral-600 uppercase">
            <a
              href="#projects"
              className="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5"
            >
              <span>FULL-STACK DEVELOPMENT</span>
            </a>
            <a
              href="#projects"
              className="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5 font-bold text-black"
            >
              <span>APPLIED AI &amp; ML</span>
            </a>
            <a
              href="#background"
              className="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5"
            >
              <span>SPHERE COMMUNITY</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
