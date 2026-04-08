import { Link } from "react-router-dom";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const PRODUCT_LINKS = [
  { label: "Platform", to: "/platform" },
  { label: "Why Us", to: "/why-us" },
  { label: "Plans & Pricing", to: "/plans" },
  { label: "About", to: "/about" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "SaaS Terms", to: "/saas-terms-of-service" },
  { label: "Web Terms", to: "/web-terms-of-service" },
];

const COMPLIANCE_BADGES = [
  { icon: "🔒", label: "HIPAA Compliant" },
  { icon: "🛡️", label: "SOC2 In Progress" },
  { icon: "✅", label: "ONC Certified" },
  { icon: "🔐", label: "AES-256 Encrypted" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <span className="text-white font-extrabold text-base">M</span>
              </div>
              <span className="text-xl font-bold text-white">
                Medaea<span className="gradient-text">.ai</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs">
              The world's first truly AI-native EMR. Autonomous documentation, billing, and clinical intelligence — unified in one platform.
            </p>
            <p className="text-cyan-600 text-xs italic font-medium">
              "AI that cares so clinicians can care."
            </p>

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {COMPLIANCE_BADGES.map((b) => (
                <span key={b.label} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/4 border border-white/8 text-gray-400 text-xs">
                  <span>{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Product</h4>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-500 hover:text-cyan-300 text-sm transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Company</h4>
            <ul className="space-y-2.5">
              <li><a href={APP_URL} className="text-gray-500 hover:text-cyan-300 text-sm transition-colors duration-200">Login to EHR</a></li>
              <li><a href={APP_URL} className="text-gray-500 hover:text-cyan-300 text-sm transition-colors duration-200">Request a Demo</a></li>
              <li><a href="mailto:hello@medaea.ai" className="text-gray-500 hover:text-cyan-300 text-sm transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Legal</h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-500 hover:text-cyan-300 text-sm transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Get Started</h4>
            <p className="text-gray-500 text-xs mb-4 leading-relaxed">Join 200+ practices already transforming care with Medaea AI.</p>
            <a href={APP_URL} className="gradient-btn inline-block px-4 py-2.5 text-sm rounded-xl w-full text-center">
              Request Demo →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Medaea.ai. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/medaea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-gray-500 hover:text-cyan-300 hover:border-cyan-500/30 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/medaeaai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-gray-500 hover:text-cyan-300 hover:border-cyan-500/30 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="mailto:hello@medaea.ai"
              aria-label="Email"
              className="w-8 h-8 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-gray-500 hover:text-cyan-300 hover:border-cyan-500/30 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-gray-600 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span>Systems operational · 99.9% uptime SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
