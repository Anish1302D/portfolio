import React, { useEffect, useRef, useState } from 'react';
import { setupCursorListeners } from '../animations/cursorAnimations';

export default function CustomCursor() {
  const reticleRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for touch / coarse pointer
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) {
      return;
    }

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const animReticle = () => {
      // Crisp, responsive lerp
      rx += (mx - rx) * 0.22;
      ry += (my - ry) * 0.22;

      if (reticleRef.current) {
        reticleRef.current.style.left = `${rx}px`;
        reticleRef.current.style.top = `${ry}px`;
      }

      animationFrameId = requestAnimationFrame(animReticle);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(animReticle);

    const cleanupListeners = setupCursorListeners(
      () => setIsHovered(true),
      () => setIsHovered(false)
    );

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
      cleanupListeners();
    };
  }, [isVisible]);

  return (
    <div
      id="cursor-reticle"
      ref={reticleRef}
      className={isHovered ? 'hovered' : ''}
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div className="reticle-brackets" />
      <div className="reticle-dot" />
    </div>
  );
}
