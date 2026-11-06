import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../animations/transitionAnimations';

const navItems = [
  { code: '01', name: 'SYSTEMS', id: 'projects' },
  { code: '02', name: 'ARCHITECTURE', id: 'architecture' },
  { code: '03', name: 'ABOUT', id: 'about' },
  { code: '04', name: 'ARSENAL', id: 'skills' },
  { code: '05', name: 'LOGS', id: 'achievements' },
  { code: '06', name: 'DOSSIER', id: 'resume' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentTime, setCurrentTime] = useState('');

  // Live telemetry clock in IST (UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(`${timeStr} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'projects', 'architecture', 'about', 'skills', 'achievements', 'resume', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(targetId);
  };

  return (
    <>
      <header
        id="navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--header-height)',
          backgroundColor: isScrolled ? 'rgba(7, 8, 11, 0.92)' : 'rgba(7, 8, 11, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-hairline)',
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
          display: 'flex',
          alignItems: 'center',
          padding: '0 2rem',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand & System Identifier */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontFamily: 'var(--font-mono)',
              textDecoration: 'none',
            }}
            aria-label="Anish Mogam — Origin"
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.05rem',
                letterSpacing: '-0.01em',
                color: 'var(--text-primary)',
              }}
            >
              ANISH MOGAM
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                color: 'var(--signal-orange)',
                border: '1px solid var(--border-hairline)',
                padding: '0.15rem 0.45rem',
                borderRadius: 'var(--radius-xs)',
                letterSpacing: '0.08em',
              }}
            >
              SYS_REF: AM-26
            </span>
          </a>

          {/* Center Telemetry Readout */}
          <div
            className="nav-desktop-index"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-secondary)',
              borderLeft: '1px solid var(--border-hairline)',
              borderRight: '1px solid var(--border-hairline)',
              padding: '0 1.25rem',
            }}
          >
            <div className="status-pulse-dot" style={{ backgroundColor: 'var(--signal-green)' }} />
            <span>PUNE_IN // {currentTime || 'UTC+5:30'}</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="nav-desktop-index"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.4rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{
                    color: isActive ? 'var(--signal-orange)' : 'var(--text-secondary)',
                    letterSpacing: '0.05em',
                    transition: 'color var(--duration-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <span style={{ opacity: 0.5 }}>[{item.code}]</span>
                  <span>{item.name}</span>
                </a>
              );
            })}

            {/* Direct CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="btn-cadmium"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.72rem',
                marginLeft: '0.5rem',
              }}
            >
              TRANSMIT ↗
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--signal-orange)',
              border: '1px solid var(--border-hairline)',
              padding: '0.4rem 0.8rem',
              borderRadius: 'var(--radius-xs)',
              background: 'var(--bg-surface)',
            }}
            aria-label="Toggle Navigation Index"
            aria-expanded={mobileMenuOpen}
          >
            <span>{mobileMenuOpen ? 'CLOSE ✕' : 'INDEX ≡'}</span>
          </button>
        </div>
      </header>

      {/* Mobile Editorial Drawer */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          backgroundColor: 'rgba(7, 8, 11, 0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '6rem 2rem 3rem',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s var(--ease-out-expo)',
        }}
        aria-hidden={!mobileMenuOpen}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--signal-orange)',
              letterSpacing: '0.1em',
              marginBottom: '0.5rem',
            }}
          >
            // SYSTEM NAVIGATION INDEX
          </div>

          {navItems.map((item) => (
            <a
              key={`mob-${item.id}`}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: activeSection === item.id ? 'var(--signal-orange)' : 'var(--text-primary)',
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border-hairline)',
                paddingBottom: '0.75rem',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                {item.code}
              </span>
              <span>{item.name}</span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn-cadmium"
            style={{ marginTop: '1rem', width: '100%' }}
          >
            TRANSMIT MESSAGE ↗
          </a>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--text-tertiary)',
            borderTop: '1px solid var(--border-hairline)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>18.5204° N, 73.8567° E</span>
          <span>{currentTime}</span>
        </div>
      </div>
    </>
  );
}
