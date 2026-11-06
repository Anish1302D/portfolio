import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

const skillCategories = [
  {
    name: 'Frontend Development',
    icon: '⚛️',
    iconBg: 'rgba(0, 229, 255, 0.1)',
    colorClass: 'cyan',
    tags: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'HTML5 / CSS3',
      'Framer Motion',
      'shadcn/ui'
    ]
  },
  {
    name: 'Backend Development',
    icon: '⚙️',
    iconBg: 'rgba(124, 58, 237, 0.1)',
    colorClass: 'purple',
    tags: [
      'Node.js',
      'Express.js',
      'Python',
      'Flask',
      'FastAPI',
      'REST APIs',
      'JWT Auth'
    ]
  },
  {
    name: 'AI / Machine Learning',
    icon: '🤖',
    iconBg: 'rgba(59, 130, 246, 0.1)',
    colorClass: 'blue',
    tags: [
      'TensorFlow',
      'ResNet CNN',
      'XGBoost',
      'SHAP / XAI',
      'OpenCV',
      'LangChain',
      'Hugging Face'
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    iconBg: 'rgba(16, 185, 129, 0.1)',
    colorClass: 'green',
    tags: [
      'Firebase',
      'Vercel',
      'Docker',
      'GitHub Actions',
      'Google Cloud',
      'AWS (basics)'
    ]
  },
  {
    name: 'Databases',
    icon: '🗄️',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    customTagStyle: {
      background: 'rgba(245, 158, 11, 0.08)',
      color: '#FCD34D',
      borderColor: 'rgba(245, 158, 11, 0.2)'
    },
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firestore', 'Redis']
  },
  {
    name: 'Tools & Others',
    icon: '📱',
    iconBg: 'rgba(239, 68, 68, 0.1)',
    customTagStyle: {
      background: 'rgba(239, 68, 68, 0.08)',
      color: '#FCA5A5',
      borderColor: 'rgba(239, 68, 68, 0.2)'
    },
    tags: ['Git / GitHub', 'Figma', 'Postman', 'VS Code', 'Linux', 'Jupyter']
  }
];

export default function Skills() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.to([headerRef.current, gridRef.current], {
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

      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      // Staggered categories entrance
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.skill-category');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  return (
    <section id="skills" ref={containerRef}>
      <div className="skills-inner">
        <div className="skills-header" ref={headerRef}>
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">
            My <span className="highlight">Arsenal</span>
          </h2>
          <p className="section-desc">
            A curated stack of technologies I use to build intelligent, scalable, and beautiful products.
          </p>
        </div>

        <div className="skills-grid" ref={gridRef}>
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.name}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon" style={{ background: category.iconBg }}>
                  {category.icon}
                </div>
                <span className="skill-cat-name">{category.name}</span>
              </div>
              <div className="skill-tags">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`skill-tag ${category.colorClass ? category.colorClass : ''}`}
                    style={category.customTagStyle || {}}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
