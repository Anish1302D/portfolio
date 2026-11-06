import React, { useEffect, useRef, useState } from 'react';

export default function About({ onOpenContact }) {
  const sectionRef = useRef(null);
  const mediaContainerRef = useRef(null);
  const mediaBlurRef = useRef(null);
  const bgImgRef = useRef(null);
  const mediaOverlayRef = useRef(null);
  const titleFirstRef = useRef(null);
  const titleRestRef = useRef(null);
  const dateTagRef = useRef(null);
  const scrollPromptRef = useRef(null);
  const mediaContentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ASPECT_RATIO = 1024 / 546;
    let isMobile = window.innerWidth < 768;

    const handleResize = () => {
      isMobile = window.innerWidth < 768;
      handleScroll();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    let rafScheduled = false;

    const applyFrame = (progress) => {
      const startW = isMobile ? 280 : 300;
      const startH = isMobile ? 360 : 400;

      const maxWByViewport = window.innerWidth * 0.94;
      const maxWByHeight = (window.innerHeight * 0.86) * ASPECT_RATIO;
      const endW = Math.min(maxWByViewport, maxWByHeight);
      const endH = endW / ASPECT_RATIO;

      const currentW = startW + progress * (endW - startW);
      const currentH = startH + progress * (endH - startH);
      const textTranslateX = (progress * (isMobile ? 180 : 150)).toFixed(1);

      // Hardware unblur
      if (mediaBlurRef.current) {
        if (progress < 0.45) {
          mediaBlurRef.current.style.visibility = 'visible';
          mediaBlurRef.current.style.opacity = Math.max(0, 1 - progress * 2.3).toFixed(3);
        } else {
          mediaBlurRef.current.style.opacity = '0';
          mediaBlurRef.current.style.visibility = 'hidden';
        }
      }

      // Container sizing
      if (mediaContainerRef.current) {
        mediaContainerRef.current.style.width = `${currentW.toFixed(1)}px`;
        mediaContainerRef.current.style.height = `${currentH.toFixed(1)}px`;
        const borderOpacity = (0.1 + (1 - progress) * 0.25).toFixed(2);
        mediaContainerRef.current.style.borderColor = `rgba(255, 255, 255, ${borderOpacity})`;
      }

      // Background ambient fade
      if (bgImgRef.current) {
        bgImgRef.current.style.opacity = Math.max(0, 1 - progress * 1.3).toFixed(3);
      }

      // Media overlay
      if (mediaOverlayRef.current) {
        mediaOverlayRef.current.style.opacity = Math.max(0.3, 0.8 - progress * 0.4).toFixed(3);
      }

      // Title words translate outward and fade
      const titleOpacity = Math.max(0, 1 - progress * 1.6).toFixed(3);
      if (titleFirstRef.current) {
        titleFirstRef.current.style.transform = `translateX(-${textTranslateX}vw) translateZ(0)`;
        titleFirstRef.current.style.opacity = titleOpacity;
      }
      if (titleRestRef.current) {
        titleRestRef.current.style.transform = `translateX(${textTranslateX}vw) translateZ(0)`;
        titleRestRef.current.style.opacity = titleOpacity;
      }

      // Subtitles fade
      const subOpacity = Math.max(0, 1 - progress * 2.8).toFixed(3);
      if (dateTagRef.current) {
        dateTagRef.current.style.transform = `translateX(-${textTranslateX}vw)`;
        dateTagRef.current.style.opacity = subOpacity;
      }
      if (scrollPromptRef.current) {
        scrollPromptRef.current.style.transform = `translateX(${textTranslateX}vw)`;
        scrollPromptRef.current.style.opacity = subOpacity;
      }

      // Content reveal
      if (mediaContentRef.current) {
        if (progress >= 0.85) {
          const contentFade = Math.min(1, (progress - 0.85) / 0.15);
          mediaContentRef.current.style.opacity = contentFade.toFixed(3);
          mediaContentRef.current.style.pointerEvents = contentFade > 0.5 ? 'auto' : 'none';
          mediaContentRef.current.style.transform = `translateY(${((1 - contentFade) * 12).toFixed(1)}px)`;
        } else {
          mediaContentRef.current.style.opacity = '0';
          mediaContentRef.current.style.pointerEvents = 'none';
          mediaContentRef.current.style.transform = 'translateY(14px)';
        }
      }
    };

    const handleScroll = () => {
      if (rafScheduled) return;
      rafScheduled = true;
      requestAnimationFrame(() => {
        rafScheduled = false;
        const rect = section.getBoundingClientRect();
        const scrollDistance = -rect.top;
        const totalDistance = section.offsetHeight - window.innerHeight;
        const progress = Math.min(Math.max(scrollDistance / (totalDistance || 1), 0), 1);
        applyFrame(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0D0D0D] text-white"
      id="about"
      style={{ minHeight: '200vh' }}
    >
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-start z-10">
        {/* Background Ambient with dynamic opacity: 1 - scrollProgress */}
        <div
          ref={bgImgRef}
          className="absolute inset-0 z-0 h-full w-full pointer-events-none transition-opacity duration-150 ease-out"
          style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
        >
          <img
            src="/assets/about_starry_castle_hq.jpg"
            alt="Starry Night Castle Monochromatic Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Centered Interactive Stage Container */}
        <div className="container mx-auto flex flex-col items-center justify-start relative z-10 w-full h-full">
          <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
            
            {/* Expanding Media Card */}
            <div
              ref={mediaContainerRef}
              className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-2xl transition-none bg-[#07090E]"
              style={{
                width: '300px',
                height: '400px',
                maxWidth: '95vw',
                maxHeight: '85vh',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(255,255,255,0.35)',
                willChange: 'width, height',
                backfaceVisibility: 'hidden',
              }}
            >
              {/* Media Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-xl flex items-center justify-center bg-[#07090E]">
                {/* Crisp Base Image */}
                <img
                  src="/assets/about_floating_light_hq.png"
                  alt="Anish Mogam - Engineering & Systemic Craft"
                  className="w-full h-full object-cover rounded-xl transition-none"
                  style={{ transform: 'scale(1.02) translateZ(0)', transformOrigin: 'center', backfaceVisibility: 'hidden' }}
                />

                {/* Pre-blurred Layer for 120 FPS GPU-accelerated Unblur */}
                <img
                  ref={mediaBlurRef}
                  src="/assets/about_floating_light_hq.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl transition-none pointer-events-none"
                  style={{
                    filter: 'blur(18px)',
                    transform: 'scale(1.08) translateZ(0)',
                    transformOrigin: 'center',
                    opacity: 1,
                    willChange: 'opacity',
                    backfaceVisibility: 'hidden',
                  }}
                />

                {/* Subtle Gradient Overlay */}
                <div
                  ref={mediaOverlayRef}
                  className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/85 rounded-xl transition-opacity duration-150 pointer-events-none"
                />

                {/* Minimal Aesthetic About Info - Perimeter Layout with Empty Center */}
                <div
                  ref={mediaContentRef}
                  className="absolute inset-0 z-20 flex flex-col justify-between p-5 sm:p-7 md:p-9 pointer-events-none opacity-0 select-none"
                >
                  {/* Top Perimeter */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                    <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-tight text-white max-w-xl">
                      COMPUTER SCIENCE STUDENT &bull; FULL-STACK &bull; APPLIED AI DEVELOPER
                    </h3>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 shrink-0">
                      PUNE, INDIA &bull; S.P. COLLEGE, SPPU &bull; SPHERE COMMUNITY
                    </span>
                  </div>

                  {/* Center Zone: COMPLETELY OPEN & EMPTY - 100% unobscured view of artwork */}
                  <div className="flex-1 pointer-events-none min-h-[140px] md:min-h-[200px]" />

                  {/* Bottom Perimeter: Disciplines, Bio & Action Buttons */}
                  <div className="pt-3 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="max-w-xl space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-300">DISCIPLINE &amp; CRAFT</span>
                        <div className="h-px bg-white/15 w-6" />
                        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                          REACT &bull; FASTAPI &bull; PYTORCH &bull; YOLOV8 &bull; POSTGRESQL &bull; GSAP
                        </span>
                      </div>
                      <p className="text-xs sm:text-[12px] font-medium leading-relaxed tracking-wider uppercase text-neutral-300">
                        I am a Computer Science student at S.P. College, Pune (affiliated with SPPU) and founder of Sphere Community. I focus on hands-on full-stack development and applied machine learning, engineering functional systems from workflow automation to computer vision. I enjoy building software that solves concrete problems, organizing collaborative sessions with peers, and I am actively seeking software development internships and collaborative opportunities.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 shrink-0 pt-1 md:pt-0">
                      <button
                        onClick={onOpenContact}
                        className="pointer-events-auto px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>GET IN TOUCH</span>
                        <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <a
                        href="#projects"
                        className="pointer-events-auto px-5 py-2.5 rounded-full border border-neutral-500 hover:border-white text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 inline-block text-center"
                      >
                        PROJECTS
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Subtitles (Translate Outward) */}
              <div className="flex flex-col items-center text-center relative z-10 mt-4 pointer-events-none">
                <p
                  ref={dateTagRef}
                  className="text-xl md:text-2xl text-neutral-300 font-semibold tracking-wider uppercase transition-none drop-shadow"
                >
                  BACKGROUND &amp; VISION
                </p>
                <p
                  ref={scrollPromptRef}
                  className="text-neutral-400 font-medium text-xs tracking-widest uppercase transition-none mt-1 drop-shadow"
                >
                  SCROLL TO EXPAND
                </p>
              </div>
            </div>

            {/* Splitting Title Header (ABOUT translates left, ME translates right) */}
            <div
              className="flex items-center justify-center text-center gap-2 sm:gap-4 w-full relative z-10 pointer-events-none flex-col"
              style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
            >
              <h2
                ref={titleFirstRef}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight transition-none drop-shadow-2xl"
                style={{ willChange: 'transform, opacity' }}
              >
                ABOUT
              </h2>
              <h2
                ref={titleRestRef}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight transition-none drop-shadow-2xl"
                style={{ willChange: 'transform, opacity' }}
              >
                ME
              </h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
