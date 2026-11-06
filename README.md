# Anish Mogam — Engineering Portfolio & Systems Monograph

> Original, professionally art-directed developer portfolio engineered with **React 19, Vite 6, and GSAP 3**. Built on the principles of **Swiss International Typographic Style**, **Digital Systems Engineering**, and **Restrained Interactive Architecture**.

🌐 **Live URL:** [anish-mogam-portfolio.vercel.app](https://anish-mogam-portfolio.vercel.app/)  
📄 **Resume URL:** [anish-mogam-portfolio.vercel.app/anish-mogam-resume.html](https://anish-mogam-portfolio.vercel.app/anish-mogam-resume.html)

---

## 📐 Art Direction & Design Language

- **Visual Concept:** *The Systems Monograph* — Swiss editorial design meeting digital aerospace telemetry and technical architecture documentation.
- **Color System:** Monolithic obsidian (`#07080B`), studio charcoal (`#0E1015`), structural hairline guides (`rgba(255,255,255,0.08)`), high-contrast warm white typography (`#F4F5F8`), and International Safety Cadmium accents (`#FF4B26`).
- **Typography:** Architectural headings in *Syne*, telemetry readouts and coordinate stamps in *Space Mono*, and high-legibility body in *DM Sans*.
- **Signature Feature:** **Interactive Systems Architecture Explorer** — a multi-stage interactive pipeline schematic exposing the real architectures behind *InfraGuard AI* (Multimodal Satellite + AQI + ResNet + XGBoost + SHAP), *KesslerX* (CesiumJS 3D Orbital Conjunction Engine), and *Sphere Community Mesh*.
- **Precision Reticle Cursor:** Viewfinder reticle with tactile corner brackets that expand and orient upon hovering interactive elements. Dormant on touch screens.
- **Live Telemetry Bar:** Real-time clock operating in IST (`UTC+5:30`) with live location coordinates (`18.5204° N, 73.8567° E // PUNE, IN`).

---

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler & Build Tool:** [Vite 6](https://vitejs.dev/)
- **Animation Engine:** [GSAP 3](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/) & [SplitText](https://greensock.com/splittext/)
- **Lifecycle Integration:** [@gsap/react](https://www.npmjs.com/package/@gsap/react) (`useGSAP` hook)
- **Styling Architecture:** Swiss Modular CSS tokens, hairline borders, and zero generic neon clichés
- **SEO & Structured Data:** OpenGraph, Twitter Cards, Semantic HTML5, Schema.org `Person` JSON-LD

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
│   │   ├── cursorAnimations.js     # Precision reticle hover listeners
│   │   ├── gsapConfig.js           # Central GSAP plugin registration
│   │   ├── heroAnimations.js       # Editorial entrance timeline orchestration
│   │   ├── scrollAnimations.js     # Reusable ScrollTrigger reveal helpers
│   │   ├── textAnimations.js       # SplitText & character reveal helpers
│   │   └── transitionAnimations.js # Smooth scroll & trigger refresh utilities
│   ├── components/
│   │   ├── BackToTop.jsx           # Floating origin return button [↑ ORIGIN]
│   │   ├── CustomCursor.jsx        # Precision technical reticle viewfinder
│   │   ├── Footer.jsx              # System colophon & architecture disclosures
│   │   ├── Navbar.jsx              # Telemetry header, live clock & mobile drawer
│   │   └── ScrollProgress.jsx      # Top reading telemetry line
│   ├── hooks/
│   │   └── useReducedMotion.js     # Accessible prefers-reduced-motion hook
│   ├── sections/
│   │   ├── Hero.jsx                # Architectural grid canvas, manifest, stats
│   │   ├── Projects.jsx            # [01] Production system specification sheets
│   │   ├── SystemsExplorer.jsx     # [02] Signature: Interactive Architecture Schematics
│   │   ├── About.jsx               # [03] Identity, dossier & 4 operational doctrines
│   │   ├── Skills.jsx              # [04] Technical capability specification matrix
│   │   ├── Achievements.jsx        # [05] Chronological expedition & milestone logs
│   │   ├── Resume.jsx              # [06] Formal ATS dossier & verified credentials
│   │   └── Contact.jsx             # [07] Direct transmission terminal & mailto link
│   ├── styles/
│   │   ├── animations.css          # Keyframes & reduced-motion accessibility rules
│   │   ├── global.css              # Baseline resets, typography & buttons
│   │   ├── responsive.css          # Editorial tablet, mobile & touch adaptations
│   │   └── variables.css           # Design tokens, color palette & typography
│   ├── App.jsx                     # Root application container & trigger manager
│   └── main.jsx                    # React entry point
├── dist/                           # Production build output (deployed to Vercel)
├── index.html                      # HTML shell with Google Fonts & Schema.org JSON-LD
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
Generates production-ready, minified, and code-split assets into the `dist/` directory.

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

All static assets in `public/` (`robots.txt`, `sitemap.xml`, `googlea0f6eda44daf4245.html`, and `anish-mogam-resume.html`) are automatically copied into `dist/` upon build, maintaining all legacy URLs and search indexing.
