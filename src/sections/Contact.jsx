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
    message: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.to([infoRef.current, formRef.current], {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true
          }
        });
        return;
      }

      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: -35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            once: true
          }
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
      setErrorMsg('⚠ Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('⚠ Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSuccessMsg(true);

    const body = `Hi Anish,\n\n${message.trim()}\n\n---\nFrom: ${name.trim()}\nEmail: ${email.trim()}`;
    const mailtoLink = `mailto:anishmogam@gmail.com?subject=${encodeURIComponent(
      subject.trim()
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setSuccessMsg(false);
    }, 3000);
  };

  return (
    <section id="contact" ref={containerRef}>
      <div className="contact-inner">
        <div className="contact-info" ref={infoRef}>
          <div className="section-label">Get in Touch</div>
          <h2 className="section-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <p className="section-desc">
            Open to internships, hackathon collaborations, freelance projects, and exciting conversations. 
            Don't hesitate to reach out.
          </p>

          <div className="contact-links">
            <a href="mailto:anishmogam@gmail.com" className="contact-link">
              <div className="contact-link-icon" style={{ background: 'rgba(0, 229, 255, 0.1)' }}>
                📧
              </div>
              <div className="contact-link-text">
                <div className="label">EMAIL</div>
                <div className="value">anishmogam@gmail.com</div>
              </div>
            </a>

            <a href="tel:+918605104120" className="contact-link">
              <div className="contact-link-icon" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                📱
              </div>
              <div className="contact-link-text">
                <div className="label">PHONE</div>
                <div className="value">+91 86051 04120</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/anish-mogam-33a2b6218/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                💼
              </div>
              <div className="contact-link-text">
                <div className="label">LINKEDIN</div>
                <div className="value">linkedin.com/in/anish-mogam</div>
              </div>
            </a>

            <a
              href="https://github.com/Anish1302D"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon" style={{ background: 'rgba(124, 58, 237, 0.1)' }}>
                ⌥
              </div>
              <div className="contact-link-text">
                <div className="label">GITHUB</div>
                <div className="value">github.com/Anish1302D</div>
              </div>
            </a>
          </div>
        </div>

        <div ref={formRef}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem' }}>
                Send a Message
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray)', marginTop: '0.3rem' }}>
                I typically reply within 24 hours.
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">SUBJECT</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
              />
            </div>

            <button
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Opening email...' : 'Send Message →'}
            </button>

            {errorMsg && (
              <p style={{ color: '#FCA5A5', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.5rem' }}>
                {errorMsg}
              </p>
            )}

            {successMsg && (
              <p style={{ color: '#6EE7B7', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.5rem' }}>
                ✓ Opening your email client...
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
