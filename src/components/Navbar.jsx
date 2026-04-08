import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const NAV_LINKS = [
  { label: "Platform", to: "/platform" },
  { label: "Why Us", to: "/why-us" },
  { label: "Plans", to: "/plans" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <span className="text-white font-extrabold text-base">M</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Medaea<span className="gradient-text">.ai</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? "text-cyan-300 bg-cyan-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={APP_URL}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 px-3 py-2"
            >
              Login
            </a>
            <a
              href={APP_URL}
              className="gradient-btn px-5 py-2.5 text-sm rounded-xl inline-flex items-center gap-1.5"
            >
              Get Started
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-navy-900/98 backdrop-blur-xl">
          <div className="px-4 py-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-cyan-300 bg-cyan-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/5 flex flex-col gap-2.5 mt-2">
              <a href={APP_URL} className="text-center text-sm font-medium text-gray-300 hover:text-white py-2.5 rounded-xl hover:bg-white/5 transition-colors">
                Login
              </a>
              <a href={APP_URL} className="gradient-btn text-center px-5 py-3 text-sm rounded-xl">
                Get Started →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
