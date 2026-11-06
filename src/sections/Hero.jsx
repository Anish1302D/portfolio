import React, { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { initHeroAnimations } from '../animations/heroAnimations';
import { scrollToSection } from '../animations/transitionAnimations';
import { useReducedMotion } from '../hooks/useReducedMotion';

const phrases = [
  'Building Beyond Limits',
  'Engineering the Future',
  'Crafting Intelligent Systems',
  'Competing to Win',
  'Solving Hard Problems'
];

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const badgeRef = useRef(null);
  const nameRef = useRef(null);
  const nameGlowRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const scrollRef = useRef(null);

  const reducedMotion = useReducedMotion();
  const [typedText, setTypedText] = useState('Building Beyond Limits');

  // Typing animation effect
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = true;
    let timeoutId;

    const tick = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        charIndex++;
        setTypedText(currentPhrase.slice(0, charIndex));
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, 1800);
          return;
        }
      } else {
        charIndex--;
        setTypedText(currentPhrase.slice(0, charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      timeoutId = setTimeout(tick, isDeleting ? 50 : 80);
    };

    // Initial pause before deleting
    timeoutId = setTimeout(tick, 1800);
    return () => clearTimeout(timeoutId);
  }, []);

  // Canvas particle network background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let W, H;
    let particles = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.max(25, Math.floor((W * H) / 12000));
      for (let i = 0; i < count; i++) {
        const isGlowing = Math.random() < 0.15;
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: isGlowing ? Math.random() * 2 + 1 : Math.random() * 1 + 0.3,
          alpha: Math.random() * 0.6 + 0.1,
          glow: isGlowing,
          color: Math.random() < 0.5 ? '0,229,255' : '124,58,237'
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120 && dist > 0) {
          p.vx += (dx / dist) * 0.01;
          p.vy += (dy / dist) * 0.01;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        if (p.glow) {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
          g.addColorStop(0, `rgba(${p.color},${p.alpha})`);
          g.addColorStop(1, `rgba(${p.color},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p = particles[i];
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,229,255,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // GSAP entrance animation
  useGSAP(
    () => {
      initHeroAnimations(
        {
          badgeRef: badgeRef.current,
          nameRef: nameRef.current,
          nameGlowRef: nameGlowRef.current,
          subtitleRef: subtitleRef.current,
          taglineRef: taglineRef.current,
          descRef: descRef.current,
          ctaRef: ctaRef.current,
          statsRef: statsRef.current,
          scrollRef: scrollRef.current
        },
        reducedMotion
      );
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  const downloadResume = () => {
    window.open('/anish-mogam-resume.html?print=true', '_blank');
  };

  return (
    <section id="hero" ref={containerRef}>
      <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-badge" ref={badgeRef}>
          <span></span> Available for Internships &amp; Hackathons
        </div>

        <div style={{ position: 'relative', display: 'inline-block' }}>
          <h1 className="hero-name" ref={nameRef}>
            ANISH MOGAM
          </h1>
          <div className="hero-name-glow" ref={nameGlowRef} aria-hidden="true">
            ANISH MOGAM
          </div>
        </div>

        <p className="hero-subtitle" ref={subtitleRef}>
          Computer Science Student &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; AI &amp; Hackathon Enthusiast
        </p>

        <h2 className="hero-tagline" ref={taglineRef}>
          <span className="typing-text" id="typingText">
            {typedText}
          </span>
        </h2>

        <p className="hero-desc" ref={descRef}>
          Crafting intelligent systems at the intersection of software engineering and AI — 
          turning ambitious ideas into production-grade products.
        </p>

        <div className="hero-cta" ref={ctaRef}>
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            View Projects →
          </a>
          <button
            type="button"
            onClick={downloadResume}
            className="btn-secondary"
          >
            ⬇ Download Resume
          </button>
          <a
            href="#contact"
            className="btn-ghost"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact Me
          </a>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-num">5+</div>
            <div className="stat-label">Hackathons</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">10+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">2</div>
            <div className="stat-label">Years Exp</div>
          </div>
        </div>
      </div>

      <div
        className="hero-scroll"
        ref={scrollRef}
        onClick={() => scrollToSection('about')}
        role="button"
        tabIndex={0}
        aria-label="Scroll to About section"
      >
        <span>SCROLL</span>
        <div className="scroll-arrow" aria-hidden="true" />
      </div>
    </section>
  );
}
