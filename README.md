# ehr-medaea-website

Static marketing website for **Medaea.ai** — the AI-Powered EMR Platform.

Built with React 18 + Vite + Tailwind CSS. Compiles to a fully static site served by Nginx.

All page content is sourced directly from the live medaea.ai WordPress site.

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, features, metrics, founders, CTA |
| `/platform` | Platform capabilities and AI agents |
| `/why-us` | Comparison, outcomes, responsible AI, compliance |
| `/plans` | Pricing plans |
| `/about` | Company story, leadership, vision |
| `/privacy-policy` | Privacy Policy |
| `/disclaimer` | Disclaimer |
| `/saas-terms-of-service` | SaaS Terms of Service |
| `/web-terms-of-service` | Web Terms of Service |

All pages include a **Login** button and **Get Started** CTA that link to the Medaea EHR application at `VITE_APP_URL`.

---

## Quick start — Local dev

```bash
# Install dependencies
npm install

# Copy env file and set your EHR app URL
cp .env.example .env
# Edit VITE_APP_URL to point to your EHR frontend (default: http://https://fix-integrating-website-backend.d32ldxvpx3i29m.amplifyapp.com)

# Start dev server (port 4000)
npm run dev
```

Website runs at **http://localhost:4000**  
The Login and Get Started buttons link to `VITE_APP_URL` (your EHR app).

---

## Quick start — Docker

```bash
# Build with correct EHR URL
docker build \
  --build-arg VITE_APP_URL=https://app.medaea.ai \
  -t medaea-website .

# Run on port 80
docker run -p 80:80 medaea-website
```

---

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `VITE_APP_URL` | `http://https://fix-integrating-website-backend.d32ldxvpx3i29m.amplifyapp.com` | URL of the Medaea EHR React application |
| `VITE_APP_NAME` | `Medaea EHR` | App name label |

> **Important:** `VITE_APP_URL` is **baked into the JS bundle at build time**. Changing it requires a full rebuild.

---

## Project structure

```
ehr-medaea-website/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        Fixed top navbar with Login + Get Started buttons
│   │   └── Footer.jsx        Site-wide footer with links
│   ├── pages/
│   │   ├── Home.jsx          Full landing page (hero, features, agents, metrics, CTA)
│   │   ├── About.jsx         Company story, founders, vision/mission
│   │   ├── Platform.jsx      Platform features and AI agent details
│   │   ├── WhyUs.jsx         Comparison, outcomes, responsible AI, compliance
│   │   ├── Plans.jsx         Pricing plans + FAQ
│   │   └── Legal.jsx         Privacy Policy, Disclaimer, SaaS Terms, Web Terms
│   ├── App.jsx               React Router route tree
│   ├── main.jsx              Entry point
│   └── index.css             Tailwind base + custom utilities
│
├── Dockerfile                Multi-stage: Node builder → Nginx
├── nginx.conf                SPA routing + gzip + cache headers
├── vite.config.js            Vite build + dev server config
├── tailwind.config.js        Design tokens (navy, brand colors)
├── .env.example              Documented environment variables
└── package.json
```

---

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server on port 4000 with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |

---

## How the EHR login flow works

1. User visits the marketing website
2. Clicks **"Login"** or **"Get Started"** in the navbar or any CTA
3. Browser navigates to `VITE_APP_URL` (the EHR React app)
4. EHR app handles authentication (JWT login form)
5. After login, provider lands in the EHR dashboard

No authentication happens on the marketing website — it is a pure static site.

---

## Branching strategy

```
main ────────────────────────── production (marketing site)
  └── develop ─────────────── staging
        ├── feature/TICKET-hero-redesign
        └── feature/TICKET-pricing-update
```

| Branch | Purpose |
|---|---|
| `main` | Production-ready |
| `develop` | Staging |
| `feature/*` | Feature work |
| `hotfix/*` | Critical fixes |
