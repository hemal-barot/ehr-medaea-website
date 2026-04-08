import { Link } from "react-router-dom";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const FOOTER_LINKS = {
  Product: [
    { label: "Platform Overview", to: "/platform" },
    { label: "AI Clinical Scribe", to: "/platform" },
    { label: "Revenue Cycle", to: "/platform" },
    { label: "Eligibility & Auth", to: "/platform" },
    { label: "Claims Integrity", to: "/platform" },
    { label: "Smart Scheduling", to: "/platform" },
  ],
  Company: [
    { label: "About Medaea", to: "/about" },
    { label: "Why Choose Us", to: "/why-us" },
    { label: "Plans & Pricing", to: "/plans" },
    { label: "Request Demo", href: APP_URL },
    { label: "Login to EHR", href: APP_URL },
    { label: "Contact Us", href: "mailto:hello@medaea.ai" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Disclaimer", to: "/disclaimer" },
    { label: "SaaS Terms", to: "/saas-terms-of-service" },
    { label: "Web Terms", to: "/web-terms-of-service" },
    { label: "HIPAA Notice", to: "/privacy-policy" },
    { label: "BAA Agreement", href: "mailto:legal@medaea.ai" },
  ],
  Support: [
    { label: "Help Center", href: "mailto:support@medaea.ai" },
    { label: "Documentation", href: "mailto:support@medaea.ai" },
    { label: "Training Portal", href: APP_URL },
    { label: "System Status", href: "https://status.medaea.ai" },
    { label: "1-800-MEDAEA-1", href: "tel:18006332311" },
    { label: "hello@medaea.ai", href: "mailto:hello@medaea.ai" },
  ],
};

const COMPLIANCE = [
  { icon: "🔒", label: "HIPAA Compliant" },
  { icon: "✅", label: "ONC Certified" },
  { icon: "🛡️", label: "SOC2 In Progress" },
  { icon: "🔐", label: "AES-256 Encrypted" },
  { icon: "📋", label: "Audit-Ready AI" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/medaea",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/medaeaai",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@medaeaai",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@medaea.ai",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
];

function FooterLink({ item }) {
  if (item.href) {
    return (
      <a
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-slate-500 hover:text-medical-700 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
      >
        <svg className="w-3 h-3 text-slate-300 group-hover:text-medical-400 transition-colors" fill="currentColor" viewBox="0 0 6 6">
          <circle cx="3" cy="3" r="2"/>
        </svg>
        {item.label}
      </a>
    );
  }
  return (
    <Link
      to={item.to}
      className="text-slate-500 hover:text-medical-700 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
    >
      <svg className="w-3 h-3 text-slate-300 group-hover:text-medical-400 transition-colors" fill="currentColor" viewBox="0 0 6 6">
        <circle cx="3" cy="3" r="2"/>
      </svg>
      {item.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-3">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-medical-600 to-teal-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">Medaea</span>
                <span className="block text-[10px] font-medium text-teal-400 tracking-widest uppercase">AI-Native EHR</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              The world's first truly AI-native EMR — unifying clinical documentation, revenue cycle, and practice intelligence in one intelligent platform.
            </p>

            <p className="text-teal-400 text-xs italic font-medium mb-6">
              "AI that cares so clinicians can care."
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2 mb-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-medical-700 hover:border-medical-600 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-2">
              {COMPLIANCE.map((b) => (
                <span key={b.label} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-400 text-xs">
                  <span>{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((item) => (
                    <li key={item.label}>
                      <FooterLink item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-medical-800 to-teal-800 border border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-lg mb-1">Ready to transform your practice?</p>
              <p className="text-medical-200 text-sm">Join 200+ practices using Medaea AI. Go live in under 7 days.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href={APP_URL} className="btn-outline-white px-5 py-2.5 text-sm rounded-xl">Book a Demo</a>
              <a href={APP_URL} className="px-6 py-2.5 rounded-xl text-sm font-bold text-medical-900 bg-white hover:bg-medical-50 transition-colors shadow-btn">
                Get Started Free
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Medaea.ai, Inc. All rights reserved. Not a substitute for clinical judgment.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </div>
            <span>·</span>
            <span>99.9% uptime SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
