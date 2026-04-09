import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const NAV_ITEMS = [
  {
    label: "Platform",
    to: "/platform",
    mega: [
      { icon: "🎙️", title: "AI Clinical Scribe", desc: "Real-time ambient documentation", to: "/platform" },
      { icon: "💊", title: "Billing & RCM", desc: "Autonomous revenue cycle management", to: "/platform" },
      { icon: "✅", title: "Eligibility & Auth", desc: "Pre-visit insurance verification", to: "/platform" },
      { icon: "🛡️", title: "Claims Integrity", desc: "Denial prevention & scrubbing", to: "/platform" },
      { icon: "📊", title: "Analytics Dashboard", desc: "Real-time revenue intelligence", to: "/platform" },
      { icon: "📅", title: "Smart Scheduling", desc: "AI-powered appointment management", to: "/platform" },
    ],
  },
  { label: "Why Us", to: "/why-us" },
  { label: "Plans", to: "/plans" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [megaOpen, setMegaOpen]   = useState(null);
  const [megaMob, setMegaMob]     = useState(null);
  const location = useLocation();
  const megaRef  = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setMegaOpen(null); }, [location]);

  // Close mega on outside click
  useEffect(() => {
    function handler(e) {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(null);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      {/* ── Top bar ── */}
      <div className="hidden lg:block bg-medical-800 text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6 text-medical-200">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              1-800-MEDAEA-1
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              hello@medaea.ai
            </span>
          </div>
          <div className="flex items-center gap-4 text-medical-200">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              HIPAA Compliant
            </span>
            <span>|</span>
            <span>ONC Certified</span>
            <span>|</span>
            <a href={APP_URL} className="text-white font-semibold hover:text-medical-200 transition-colors">
              Provider Portal →
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-nav border-b border-slate-100"
            : "bg-white border-b border-slate-100"
        }`}
        ref={megaRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-medical-700 to-teal-600 flex items-center justify-center shadow-blue-glow">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-teal-500 border-2 border-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-medical-900 tracking-tight leading-none">
                  Medaea
                </span>
                <span className="block text-[10px] font-medium text-teal-600 tracking-widest uppercase leading-none mt-0.5">AI-Native EHR</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  {item.mega ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(item.to)
                          ? "text-medical-700 bg-medical-50"
                          : "text-slate-700 hover:text-medical-700 hover:bg-slate-50"
                      }`}
                      onMouseEnter={() => setMegaOpen(item.label)}
                      onClick={() => setMegaOpen(megaOpen === item.label ? null : item.label)}
                    >
                      {item.label}
                      <svg className={`w-3.5 h-3.5 transition-transform ${megaOpen === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={item.to}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(item.to)
                          ? "text-medical-700 bg-medical-50"
                          : "text-slate-700 hover:text-medical-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mega dropdown */}
                  {item.mega && megaOpen === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl nav-dropdown p-5"
                      onMouseLeave={() => setMegaOpen(null)}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {item.mega.map((sub) => (
                          <Link
                            key={sub.title}
                            to={sub.to}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-medical-50 transition-colors group"
                          >
                            <div className="w-9 h-9 rounded-xl bg-medical-100 flex items-center justify-center flex-shrink-0 text-lg group-hover:bg-medical-200 transition-colors">
                              {sub.icon}
                            </div>
                            <div>
                              <div className="text-slate-800 font-semibold text-sm">{sub.title}</div>
                              <div className="text-slate-500 text-xs mt-0.5">{sub.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-slate-500 text-xs">7 AI agents · 10+ specialties</span>
                        <Link to="/platform" className="text-medical-700 text-xs font-semibold hover:text-medical-600">
                          View Full Platform →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={APP_URL} className="text-sm font-medium text-slate-600 hover:text-medical-700 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50">
                Login
              </a>
              <a href={APP_URL} className="btn-outline px-4 py-2 text-sm rounded-xl border-medical-200 text-medical-700">
                Book a Demo
              </a>
              <a href={APP_URL} className="btn-primary px-5 py-2.5 text-sm rounded-xl font-bold inline-flex items-center gap-1.5">
                Get Started Free
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <div className="px-4 py-5 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.mega ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
                        onClick={() => setMegaMob(megaMob === item.label ? null : item.label)}
                      >
                        {item.label}
                        <svg className={`w-4 h-4 transition-transform ${megaMob === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                        </svg>
                      </button>
                      {megaMob === item.label && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.mega.map((sub) => (
                            <Link key={sub.title} to={sub.to} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-medical-50 hover:text-medical-700">
                              <span>{sub.icon}</span> {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive(item.to) ? "text-medical-700 bg-medical-50" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <a href={APP_URL} className="block text-center text-sm font-medium text-slate-600 hover:text-medical-700 py-2.5 rounded-xl hover:bg-slate-50">Login</a>
                <a href={APP_URL} className="block btn-outline text-center px-5 py-3 text-sm rounded-xl">Book a Demo</a>
                <a href={APP_URL} className="block btn-primary text-center px-5 py-3 text-sm rounded-xl font-bold">Get Started Free →</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
