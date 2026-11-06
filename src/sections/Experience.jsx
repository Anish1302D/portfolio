import React, { useEffect, useRef } from 'react';

export default function Experience() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const hudProgressRef = useRef(null);
  const hudPhaseRef = useRef(null);
  const tickerTopRef = useRef(null);
  const tickerBottomRef = useRef(null);
  const dateBgsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    let currentTranslateX = 0;
    let targetTranslateX = 0;
    let currentProgress = 0;
    let targetProgress = 0;
    let isRunning = true;
    let frameId = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const getDimensions = () => {
      const totalDist = section.offsetHeight - window.innerHeight;
      const stageWidth = stage.scrollWidth;
      const maxTranslate = Math.max(0, stageWidth - window.innerWidth);
      return { totalDist, maxTranslate };
    };

    let { totalDist, maxTranslate } = getDimensions();

    const handleResize = () => {
      ({ totalDist, maxTranslate } = getDimensions());
      if (prefersReducedMotion) {
        stage.style.transform = 'none';
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      targetProgress = Math.min(Math.max(scrolled / (totalDist || 1), 0), 1);
      targetTranslateX = targetProgress * maxTranslate;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const render = () => {
      if (!isRunning) return;
      frameId = requestAnimationFrame(render);

      if (prefersReducedMotion) {
        stage.style.transform = 'none';
        return;
      }

      currentTranslateX += (targetTranslateX - currentTranslateX) * 0.12;
      currentProgress += (targetProgress - currentProgress) * 0.12;

      // Apply horizontal travel
      stage.style.transform = `translate3d(${-currentTranslateX}px, 0, 0)`;

      // Update HUD progress line
      if (hudProgressRef.current) {
        hudProgressRef.current.style.width = `${(currentProgress * 100).toFixed(1)}%`;
      }

      // Update Phase HUD text
      if (hudPhaseRef.current) {
        if (currentProgress < 0.28) {
          hudPhaseRef.current.textContent = 'FOUNDATION & ACADEMIC EXPEDITION';
        } else if (currentProgress < 0.65) {
          hudPhaseRef.current.textContent = 'SPPU CS & AI/ML RESEARCH';
        } else {
          hudPhaseRef.current.textContent = 'SPHERE CLUB FOUNDER & PRODUCTION SYSTEMS';
        }
      }

      // Parallax Tickers
      if (tickerTopRef.current) {
        tickerTopRef.current.style.transform = `translate3d(${-currentProgress * 180}px, 0, 0)`;
      }
      if (tickerBottomRef.current) {
        tickerBottomRef.current.style.transform = `translate3d(${currentProgress * 180}px, 0, 0)`;
      }

      // Parallax Background Dates
      dateBgsRef.current.forEach((el) => {
        if (el) {
          el.style.transform = `translate3d(${-currentProgress * 80}px, 0, 0)`;
        }
      });
    };

    frameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const jumpToProgress = (ratio) => {
    const section = sectionRef.current;
    if (!section) return;
    const totalDist = section.offsetHeight - window.innerHeight;
    const targetScroll = section.offsetTop + totalDist * ratio;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#070709] text-white overflow-visible"
      data-purpose="experience-section"
      id="experience"
      style={{ height: '280vh' }}
    >
      {/* Sticky 100vh Theater / Viewport Window */}
      <div
        id="exp-sticky-viewport"
        className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#070709] flex flex-col justify-between select-none"
      >
        {/* Layer 0: Background Cinematic Ambience & Atmospheric Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Layer 0B: Massive Ambient Horizontal Running Tickers */}
        <div className="absolute inset-0 flex flex-col justify-around pointer-events-none overflow-hidden opacity-[0.035]">
          <div
            ref={tickerTopRef}
            className="whitespace-nowrap font-black uppercase text-[14vw] tracking-tighter will-change-transform leading-none"
          >
            FULL STACK ARCHITECTURE &nbsp;&nbsp; AI TELEMETRY &nbsp;&nbsp; FULL STACK ARCHITECTURE &nbsp;&nbsp; AI TELEMETRY &nbsp;&nbsp;
          </div>
          <div
            ref={tickerBottomRef}
            className="whitespace-nowrap font-black uppercase text-[14vw] tracking-tighter will-change-transform leading-none"
          >
            2024 &nbsp;&nbsp; SPPU CS & AI &nbsp;&nbsp; 2026 &nbsp;&nbsp; SPHERE FOUNDER &nbsp;&nbsp; 2024 &nbsp;&nbsp; SPPU CS & AI &nbsp;&nbsp;
          </div>
        </div>

        {/* Top Minimalist Editorial HUD Bar */}
        <header className="relative z-30 w-full px-6 md:px-14 pt-6 pb-4 flex items-center justify-between border-b border-white/[0.08] backdrop-blur-md bg-[#070709]/80">
          <div className="flex items-center gap-4">
            <span
              ref={hudPhaseRef}
              className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 font-mono"
            >
              FOUNDATION & ACADEMIC EXPEDITION
            </span>
          </div>

          {/* Progress Tracker Bar */}
          <div className="flex items-center gap-3">
            <div className="w-24 sm:w-36 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div ref={hudProgressRef} className="h-full bg-white transition-all duration-75 w-0" />
            </div>
          </div>
        </header>

        {/* Center: Massive Horizontal Spatial Canvas */}
        <div className="relative z-20 flex-1 w-full overflow-hidden flex items-center">
          <div
            ref={stageRef}
            id="exp-horizontal-stage"
            className="flex items-center h-full will-change-transform transition-none"
            style={{ width: '290vw' }}
          >
            {/* ================= INTRO ENVIRONMENT (0vw - 90vw) ================= */}
            <div className="exp-panel flex-shrink-0 w-[95vw] md:w-[85vw] px-8 md:px-16 lg:px-24 flex flex-col justify-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] text-[10px] font-semibold tracking-widest uppercase text-neutral-300 mb-6">
                  <span>FOUNDATION & JOURNEY</span>
                </div>
                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.88] mb-8">
                  WHERE<br />I'VE BEEN
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl font-normal">
                  My journey through computer science at Savitribai Phule Pune University, engineering intelligent AI systems, and leading developer communities.
                </p>
              </div>
            </div>

            {/* ================= CHAPTER 01: ACADEMICS & AI (90vw - 190vw) ================= */}
            <div className="exp-panel relative flex-shrink-0 w-[105vw] md:w-[100vw] px-8 md:px-16 lg:px-24 flex flex-col justify-center">
              {/* Background Parallax Date Typography */}
              <div
                ref={(el) => (dateBgsRef.current[0] = el)}
                className="exp-date-bg absolute -top-8 right-12 md:right-28 text-[12vw] md:text-[14vw] font-black uppercase text-white/[0.04] tracking-tighter select-none pointer-events-none will-change-transform"
              >
                2024 — PRESENT
              </div>

              <div className="relative z-10 max-w-4xl">
                {/* Eyebrow & Date */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
                    2024 — PRESENT
                  </span>
                  <span className="h-[1px] w-12 bg-white/20" />
                  <span className="text-xs font-bold tracking-widest uppercase text-white">
                    SAVITRIBAI PHULE PUNE UNIVERSITY
                  </span>
                </div>

                {/* Oversized Typographic Role Title */}
                <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6">
                  COMPUTER SCIENCE<br />&amp; AI SYSTEMS
                </h3>

                {/* Narrative Summary */}
                <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
                  Rigorous academic curriculum coupled with intensive self-directed systems engineering. Specializing in machine learning telemetry, WebRTC protocols, and distributed architecture.
                </p>

                {/* Milestone Specifications (Hairline Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-3xl mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      FOUNDATION
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Completed 1000+ hours of full-stack development &amp; algorithmic problem solving
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      COMPETITION
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Engineered InfraGuard AI for AMD Slingshot 2025 anomaly detection
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      RESEARCH
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Built KesslerX orbital simulator &amp; HeyLo peer-to-peer audio protocol
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CHAPTER 02: SPHERE CLUB & LEADERSHIP (190vw - 290vw) ================= */}
            <div className="exp-panel relative flex-shrink-0 w-[105vw] md:w-[100vw] px-8 md:px-16 lg:px-24 flex flex-col justify-center">
              {/* Background Parallax Date Typography */}
              <div
                ref={(el) => (dateBgsRef.current[1] = el)}
                className="exp-date-bg absolute -top-8 right-12 md:right-28 text-[12vw] md:text-[14vw] font-black uppercase text-white/[0.04] tracking-tighter select-none pointer-events-none will-change-transform"
              >
                2024 — PRESENT
              </div>

              <div className="relative z-10 max-w-4xl">
                {/* Eyebrow & Date */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
                    2024 — PRESENT
                  </span>
                  <span className="h-[1px] w-12 bg-white/20" />
                  <span className="text-xs font-bold tracking-widest uppercase text-white">
                    COMMUNITY LEADERSHIP &amp; ENGINEERING
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] font-semibold uppercase text-neutral-300">
                    ACTIVE
                  </span>
                </div>

                {/* Oversized Typographic Role Title */}
                <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6">
                  FOUNDER,<br />SPHERE CLUB
                </h3>

                {/* Narrative Summary */}
                <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
                  Founded Sphere Club (sphere-club.vercel.app) to cultivate engineering excellence, collaborative hackathon teams, and modern software craftsmanship.
                </p>

                {/* Milestone Specifications (Hairline Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-3xl mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      LEADERSHIP
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Organized engineering hackathons, design sprints, and open-source bootcamps
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      ARCHITECTURE
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Architected full-stack web platforms with Next.js, Node.js, and cloud backends
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      IMPACT
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Shipped 15+ production repositories across university &amp; client initiatives
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Minimalist Editorial Navigation & Spatial Status Bar */}
        <footer className="relative z-30 w-full px-6 md:px-14 py-4 flex items-center justify-between border-t border-white/[0.08] backdrop-blur-md bg-[#070709]/80">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => jumpToProgress(0.35)}
              className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border border-white/20 text-white bg-white/10 transition-all hover:bg-white/20 cursor-pointer"
            >
              ACADEMICS &amp; AI
            </button>
            <button
              type="button"
              onClick={() => jumpToProgress(0.75)}
              className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border border-white/10 text-neutral-400 hover:text-white transition-all hover:border-white/30 cursor-pointer"
            >
              SPHERE CLUB
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

