# Changelog — ehr-medaea-website

  All notable changes to the Medaea marketing website.

  ## [1.1.0] — 2026-04-03

  ### Added
  - `.env.example` — environment variable template for VITE_APP_URL configuration
  - Port mapping documentation — Replit maps local:3000 → external:3002, local:5000 → external:80
  - Login button now reads VITE_APP_URL from environment (no hardcoded localhost)

  ### Fixed
  - Login/Get Started buttons now correctly redirect to EHR application in all environments
  - Vite server configured with allowedHosts: true for Replit proxy compatibility

  ## [1.0.0] — 2026-03-20

  ### Added
  - Initial marketing website — React 18 + Vite + Tailwind CSS
  - 6 pages: Home, Platform, Why Us, Plans, About, Legal
  - Dark navy design matching medaea.ai brand
  - Responsive navbar with Login and Get Started CTAs
  - Hero section, stats bar, features grid, testimonials, footer
  - Dockerized with nginx.conf for production
  - HIPAA / ONC certification badges
  