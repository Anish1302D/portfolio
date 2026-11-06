import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Contact() {
  const containerRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  const reducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.fromTo(
        [infoRef.current, formRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMsg('⚠ ERROR: All transmission parameters are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('⚠ ERROR: Invalid transmitter return address.');
      return;
    }

    setIsSubmitting(true);
    setSuccessMsg(true);

    const body = `Hi Anish,\n\n${message.trim()}\n\n---\nTransmitter: ${name.trim()}\nReturn Address: ${email.trim()}`;
    const mailtoLink = `mailto:anishmogam@gmail.com?subject=${encodeURIComponent(
      subject.trim()
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setSuccessMsg(false);
    }, 3500);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{
        backgroundColor: 'var(--bg-canvas)',
        padding: '7rem 0',
      }}
    >
      <div className="content-wrapper">
        {/* Technical Header */}
        <div className="section-meta-header">
          <div className="section-code">
            SECTION // [07] — DIRECT TRANSMISSION &amp; CONTACT TERMINAL
          </div>
          <div style={{ color: 'var(--text-tertiary)' }}>
            INTERNATIONALLY MONITORED // ENCRYPTED INBOX
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title-large">
            INITIATE DIRECT TRANSMISSION
          </h2>
          <p className="section-lead">
            Available for software engineering internships, technical co-founding, 
            research initiatives, and ambitious hackathon collaborations.
          </p>
        </div>

        {/* Transmit Grid */}
        <div
          className="transmit-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Communication Vectors */}
          <div ref={infoRef}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--signal-orange)',
                letterSpacing: '0.08em',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--border-hairline)',
                paddingBottom: '0.6rem',
              }}
            >
              // DIRECT PROTOCOL ENDPOINTS
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontFamily: 'var(--font-mono)' }}>
              {/* Email */}
              <a
                href="mailto:anishmogam@gmail.com"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-hairline)',
                  padding: '1.4rem 1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', marginBottom: '0.2rem' }}>
                    VECTOR_01 // ELECTRONIC MAIL
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    anishmogam@gmail.com
                  </div>
                </div>
                <span style={{ color: 'var(--signal-orange)' }}>↗</span>
              </a>

              {/* Telephone */}
              <a
                href="tel:+918605104120"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-hairline)',
                  padding: '1.4rem 1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', marginBottom: '0.2rem' }}>
                    VECTOR_02 // TELEPHONY &amp; SMS
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    +91 86051 04120
                  </div>
                </div>
                <span style={{ color: 'var(--signal-orange)' }}>↗</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/anish-mogam-33a2b6218/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-hairline)',
                  padding: '1.4rem 1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', marginBottom: '0.2rem' }}>
                    VECTOR_03 // PROFESSIONAL NETWORK
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    linkedin.com/in/anish-mogam
                  </div>
                </div>
                <span style={{ color: 'var(--signal-orange)' }}>↗</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Anish1302D"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-hairline)',
                  padding: '1.4rem 1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', marginBottom: '0.2rem' }}>
                    VECTOR_04 // VERSION CONTROL REGISTRY
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    github.com/Anish1302D
                  </div>
                </div>
                <span style={{ color: 'var(--signal-orange)' }}>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Terminal Transmission Form */}
          <div
            ref={formRef}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              padding: '2.5rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--signal-orange)',
                letterSpacing: '0.08em',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--border-hairline)',
                paddingBottom: '0.6rem',
              }}
            >
              // TRANSMISSION TERMINAL INTERFACE
            </div>

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  [PARAM: TRANSMITTER_IDENTITY]
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Elena Rostova / Senior Staff Engineer"
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-xs)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    padding: '0.85rem 1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  [PARAM: RETURN_ADDRESS_EMAIL]
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. name@organization.com"
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-xs)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    padding: '0.85rem 1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  [PARAM: TRANSMISSION_SUBJECT]
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Systems Engineering Role / Project Collaboration"
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-xs)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    padding: '0.85rem 1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  [PARAM: TRANSMISSION_PAYLOAD]
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter message payload, project scope, or opportunity details..."
                  required
                  style={{
                    width: '100%',
                    minHeight: '140px',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-xs)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    padding: '0.85rem 1rem',
                    outline: 'none',
                    resize: 'vertical',
                    lineHeight: 1.6,
                    transition: 'border-color 0.2s',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-cadmium"
                disabled={isSubmitting}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {isSubmitting ? 'DISPATCHING PAYLOAD TO CLIENT...' : 'TRANSMIT MESSAGE →'}
              </button>

              {errorMsg && (
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#EF4444',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    padding: '0.6rem 1rem',
                  }}
                >
                  {errorMsg}
                </div>
              )}

              {successMsg && (
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--signal-green)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    padding: '0.6rem 1rem',
                  }}
                >
                  ✓ SUCCESS: Opening default mail transport client...
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
