import React, { useEffect, useRef, useState } from 'react';
import { setupCursorListeners } from '../animations/cursorAnimations';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch / coarse pointer
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

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const animRing = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;

      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }

      animationFrameId = requestAnimationFrame(animRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(animRing);

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
    <>
      <div
        id="cursor"
        ref={cursorRef}
        className={isHovered ? 'hovered' : ''}
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      />
      <div
        id="cursor-ring"
        ref={ringRef}
        className={isHovered ? 'hovered' : ''}
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      />
    </>
  );
}

