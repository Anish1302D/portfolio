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
          hudPhaseRef.current.textContent = 'ACADEMIC FOUNDATION &bull; S.P. COLLEGE';
        } else if (currentProgress < 0.65) {
          hudPhaseRef.current.textContent = 'B.SC. COMPUTER SCIENCE &bull; SPPU';
        } else {
          hudPhaseRef.current.textContent = 'COMMUNITY LEADERSHIP &bull; SPHERE COMMUNITY';
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
      data-purpose="background-section"
      id="background"
      style={{ height: '280vh' }}
    >
      {/* Sticky 100vh Theater / Viewport Window */}
      <div
        id="exp-sticky-viewport"
        className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#070709] flex flex-col justify-between select-none"
      >
        {/* Layer 0: Background Ambient Atmospheric Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Layer 0B: Ambient Horizontal Running Tickers */}
        <div className="absolute inset-0 flex flex-col justify-around pointer-events-none overflow-hidden opacity-[0.035]">
          <div
            ref={tickerTopRef}
            className="whitespace-nowrap font-black uppercase text-[14vw] tracking-tighter will-change-transform leading-none"
          >
            B.SC. COMPUTER SCIENCE &nbsp;&nbsp; FULL-STACK &nbsp;&nbsp; APPLIED AI &nbsp;&nbsp; SPHERE COMMUNITY &nbsp;&nbsp;
          </div>
          <div
            ref={tickerBottomRef}
            className="whitespace-nowrap font-black uppercase text-[14vw] tracking-tighter will-change-transform leading-none"
          >
            S.P. COLLEGE PUNE &nbsp;&nbsp; SPPU &nbsp;&nbsp; SPHERE COMMUNITY FOUNDER &nbsp;&nbsp; S.P. COLLEGE PUNE &nbsp;&nbsp;
          </div>
        </div>

        {/* Top Minimalist Editorial HUD Bar */}
        <header className="relative z-30 w-full px-6 md:px-14 pt-6 pb-4 flex items-center justify-between border-b border-white/[0.08] backdrop-blur-md bg-[#070709]/80">
          <div className="flex items-center gap-4">
            <span
              ref={hudPhaseRef}
              className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 font-mono"
            >
              ACADEMIC FOUNDATION &bull; S.P. COLLEGE
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
                  <span>ACADEMIC &amp; LEADERSHIP JOURNEY</span>
                </div>
                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.88] mb-8">
                  MY<br />BACKGROUND
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl font-normal">
                  Computer Science education at S.P. College, Pune (affiliated with SPPU) and community leadership founding Sphere Community.
                </p>
              </div>
            </div>

            {/* ================= CHAPTER 01: EDUCATION (90vw - 190vw) ================= */}
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
                    EDUCATION &bull; S.P. COLLEGE, PUNE (SPPU)
                  </span>
                </div>

                {/* Oversized Typographic Role Title */}
                <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6">
                  B.SC. COMPUTER<br />SCIENCE
                </h3>

                {/* Narrative Summary */}
                <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
                  Pursuing Bachelor of Science in Computer Science at Sir Parashurambhau (S.P.) College, Pune, affiliated with Savitribai Phule Pune University. Focusing on computational theory, algorithmic problem solving, data structures, and hands-on software development.
                </p>

                {/* Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-3xl mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      CURRICULUM
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Data Structures, Algorithms, DBMS, OOP, Computer Networks, and OS.
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      APPLIED STACK
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Building projects using Python, React, FastAPI, Node.js, and SQL.
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      COMPETITIONS
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Participant in AMD Slingshot 2025 developing InfraGuard AI.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CHAPTER 02: COMMUNITY LEADERSHIP (190vw - 290vw) ================= */}
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
                    COMMUNITY LEADERSHIP
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] font-semibold uppercase text-neutral-300">
                    ACTIVE
                  </span>
                </div>

                {/* Oversized Typographic Role Title */}
                <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6">
                  FOUNDER,<br />SPHERE COMMUNITY
                </h3>

                {/* Narrative Summary */}
                <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
                  Founded Sphere Community (sphere-club.vercel.app) to bring student developers and tech peers together in Pune for collaborative project development, peer learning, and shared technical growth.
                </p>

                {/* Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-3xl mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      COORDINATION
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Organized recruitment, onboarding, and structured project study groups.
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      COLLABORATION
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Conducted peer code reviews, collaborative sprints, and developer workshops.
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                      PROJECT BUILDS
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Supported student peers in building functional web apps and hackathon projects.
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
              EDUCATION
            </button>
            <button
              type="button"
              onClick={() => jumpToProgress(0.75)}
              className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border border-white/10 text-neutral-400 hover:text-white transition-all hover:border-white/30 cursor-pointer"
            >
              SPHERE COMMUNITY
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
