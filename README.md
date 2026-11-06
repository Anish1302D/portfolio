# Anish Mogam — Portfolio

> Futuristic developer portfolio migrated to **React + Vite + GSAP**, featuring interactive canvas particles, high-performance scroll triggers, glassmorphic UI, and full responsiveness.

🌐 **Live URL:** [anish-mogam-portfolio.vercel.app](https://anish-mogam-portfolio.vercel.app/)  
📄 **Resume URL:** [anish-mogam-portfolio.vercel.app/anish-mogam-resume.html](https://anish-mogam-portfolio.vercel.app/anish-mogam-resume.html)

---

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler & Dev Server:** [Vite 6](https://vitejs.dev/)
- **Animation Engine:** [GSAP 3](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/) & [SplitText](https://greensock.com/splittext/)
- **React Animation Lifecycle:** [@gsap/react](https://www.npmjs.com/package/@gsap/react) (`useGSAP` hook)
- **Styling:** Modular CSS3 with CSS variables, Glassmorphism & GPU-accelerated keyframes
- **Canvas / 2D Engine:** Interactive particle network with physics & proximity connections
- **SEO & Meta:** OpenGraph, Twitter Cards, Semantic HTML5, Schema.org Person JSON-LD

---

## 📁 Project Architecture

```text
portfolio/
├── public/
│   ├── anish-mogam-portfolio.html  # Preserved original standalone portfolio
│   ├── anish-mogam-resume.html     # Dedicated printable resume page
│   ├── googlea0f6eda44daf4245.html # Google Search Console verification
│   ├── robots.txt                  # Search crawler directives
│   └── sitemap.xml                 # Search index sitemap
├── src/
│   ├── animations/
│   │   ├── cursorAnimations.js     # Cursor proximity & hover bindings
│   │   ├── gsapConfig.js           # Central GSAP plugin registration
│   │   ├── heroAnimations.js       # Hero entrance timeline orchestration
│   │   ├── scrollAnimations.js     # Reusable ScrollTrigger reveal helpers
│   │   ├── textAnimations.js       # Split text & character stagger animation
│   │   └── transitionAnimations.js # Smooth scroll & trigger refresh utilities
│   ├── components/
│   │   ├── BackToTop.jsx           # Floating scroll-to-top button
│   │   ├── CustomCursor.jsx        # Dual-layer lerping cursor with interactive hover
│   │   ├── Footer.jsx              # Footer branding & quick navigation
│   │   ├── Navbar.jsx              # Responsive header, active spy & mobile overlay
│   │   └── ScrollProgress.jsx      # Top reading progress indicator
│   ├── hooks/
│   │   └── useReducedMotion.js     # Accessible prefers-reduced-motion hook
│   ├── sections/
│   │   ├── About.jsx               # Bio, founder badge, vision & pillars
│   │   ├── Achievements.jsx        # Hackathon & milestone timeline
│   │   ├── Contact.jsx             # Direct contact cards & mailto form
│   │   ├── Hero.jsx                # Interactive particle canvas, typing text, stats
│   │   ├── Projects.jsx            # Featured project & showcase grid
│   │   ├── Resume.jsx              # In-page CV summary with download button
│   │   └── Skills.jsx              # 6 technical category cards
│   ├── styles/
│   │   ├── animations.css          # CSS keyframe effects & accessibility fallbacks
│   │   ├── global.css              # Base resets, body typography & component rules
│   │   ├── responsive.css          # Tablet, mobile, touch & micro-screen breakpoints
│   │   └── variables.css           # Design tokens, color palette & typography
│   ├── App.jsx                     # Root application container & trigger manager
│   └── main.jsx                    # React entry point
├── dist/                           # Production build output (deployed to Vercel)
├── index.html                      # Vite HTML shell with SEO & Schema.org LD-JSON
├── package.json                    # Project dependencies & scripts
├── vite.config.js                  # Vite configuration with chunk splitting
└── README.md
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates production-ready, minified and chunked assets into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```
Runs Vite's local static web server serving the `dist/` bundle.

---

## ☁️ Vercel Deployment

This project is pre-configured for zero-config Vercel deployment:

| Setting | Value |
|---|---|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

All static files in `public/` (`robots.txt`, `sitemap.xml`, `googlea0f6eda44daf4245.html`, and `anish-mogam-resume.html`) are automatically copied into `dist/` upon build, maintaining all legacy URLs and search indexing.

---

## ♿ Accessibility & Performance

- **Reduced Motion Support:** All GSAP timelines and CSS animations check `prefers-reduced-motion: reduce`. Users with motion sensitivities receive clean, instant or opacity-only transitions without parallax or large translations.
- **Touch Screen Optimization:** Custom cursor and ring elements are automatically disabled on coarse pointer/touch devices (`@media (hover: none), (pointer: coarse)`), preserving native mobile touch interactions.
- **Code Splitting:** Configured Rollup vendor and GSAP chunk separation in `vite.config.js` for optimal caching and fast First Contentful Paint (FCP).
