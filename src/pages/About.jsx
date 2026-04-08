import { useState, useEffect, useRef } from "react";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const STATS = [
  { value: 45, suffix: "%", label: "Reduced admin time", icon: "⏱️" },
  { value: 62, suffix: "%", label: "Fewer claim denials", icon: "🚫" },
  { value: 40, suffix: "%", label: "Higher productivity", icon: "📈" },
  { value: 30, suffix: "%", label: "Cost savings", icon: "💰" },
];

function AnimatedStat({ value, suffix, label, icon, inView }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div className="text-center card-dark gradient-border p-8 rounded-2xl glow-card">
      <div className="text-3xl mb-3">{icon}</div>
      <div className="text-5xl font-extrabold stat-shine mb-2 tabular-nums">
        {count}{suffix}
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {STATS.map((s) => (
        <AnimatedStat key={s.label} {...s} inView={inView} />
      ))}
    </div>
  );
}

const DIFFERENTIATORS = [
  { icon: "🔗", text: "Unified EMR + Billing + AI Agents — no bolt-ons, no integrations to manage" },
  { icon: "🎙️", text: "Real-time documentation + coding at point of care, not after the fact" },
  { icon: "👤", text: "Human-in-loop AI for safety, transparency, and full clinical control" },
  { icon: "🚀", text: "Rapid deployment — go live in under 7 days with full onboarding support" },
  { icon: "💰", text: "Measurable ROI from month one: revenue lift, admin reduction, fewer denials" },
  { icon: "❤️", text: "Built with People Before Profit — clinicians and patients always come first" },
];

const VALUES = [
  {
    icon: "🧠",
    title: "Intelligence First",
    desc: "Every feature is powered by AI — not as an add-on, but as the foundation. We built the EMR around AI, not the other way around.",
  },
  {
    icon: "❤️",
    title: "People Before Profit",
    desc: "We exist to serve clinicians and patients. Revenue is a result of doing that well — never the goal that compromises care.",
  },
  {
    icon: "🔍",
    title: "Radical Transparency",
    desc: "Every AI decision is explainable, auditable, and reviewable. Healthcare AI must be a tool clinicians trust, not a black box.",
  },
  {
    icon: "⚡",
    title: "Speed & Impact",
    desc: "Go live in 7 days. Show ROI in 30. We build for measurable outcomes, not vanity metrics.",
  },
];

const VISION_ITEMS = [
  {
    label: "Our Vision",
    text: "To build the most intelligent autonomous healthcare operating system — where administrative burden disappears, documentation writes itself, and revenue flows accurately and instantly.",
  },
  {
    label: "Our Mission",
    text: "To empower every clinician with AI that handles documentation, billing, and compliance — so they can focus entirely on what they trained for: patient care.",
  },
  {
    label: "Our Belief",
    text: "Healthcare should run intelligently in the background so clinicians can practice at the top of their license. The future of medicine is one where the EHR is invisible, the AI handles the burden, and care is the only priority.",
  },
];

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-teal mb-6 inline-block">About Medaea.ai</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            The World's First Truly{" "}
            <span className="gradient-text">AI-Native EMR</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-4">
            A unified clinical + revenue + administrative operating system — powered by intelligent AI agents working alongside your team in real-time.
          </p>
          <p className="text-gray-500 italic text-sm mb-10 max-w-2xl mx-auto">
            Epic's records + Robin AI's scribe + a full RCM engine + a compliance copilot — all in one system built for specialty practices, ambulatory clinics, and modern provider groups.
          </p>
          <a href={APP_URL} className="gradient-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold">
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Animated Stats bar ── */}
      <section className="py-14 border-y border-cyan-500/8" style={{ background: "rgba(6,182,212,0.025)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection />
        </div>
      </section>

      {/* ── Clinical AI Engine ── */}
      <section className="section-pad bg-navy-950">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge-teal mb-4 inline-block">Why We're Different</span>
              <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                Clinical AI Engine —{" "}
                <span className="gradient-text">Why Medaea Outpaces Legacy Solutions</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Unlike platforms that focus only on billing or only on records, Medaea unites them. Unlike legacy EMRs repurposed with bolt-on AI, Medaea is AI-native from day one — built to eliminate administrative burden permanently, not patch it.
              </p>
              <ul className="space-y-4">
                {DIFFERENTIATORS.map((d) => (
                  <li key={d.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{d.icon}</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{d.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual panel */}
            <div className="card-glass gradient-border p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white font-extrabold">M</div>
                <div>
                  <div className="text-white font-bold text-sm">Medaea AI Platform</div>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    All agents active
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Clinical Scribe", pct: 100, status: "Live" },
                  { label: "Revenue Cycle", pct: 95, status: "Processing" },
                  { label: "Compliance Engine", pct: 100, status: "Monitoring" },
                  { label: "Claims Integrity", pct: 88, status: "Reviewing" },
                  { label: "Scheduling Agent", pct: 92, status: "Active" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-gray-400 text-xs">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600 text-xs">{item.pct}%</span>
                        <span className="text-cyan-500 text-xs">{item.status}</span>
                      </div>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-teal-500"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/15 text-xs text-gray-400">
                ✓ 847 encounters processed today · $1.2M revenue protected · 0 compliance flags
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-pad bg-navy-900">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Our Values</span>
            <h2 className="text-4xl font-extrabold text-white">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="card-dark gradient-border glow-card p-8 rounded-2xl">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="section-pad-sm bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-teal mb-4 inline-block">Leadership</span>
            <h2 className="text-3xl font-extrabold text-white">Meet the <span className="gradient-text">Founders</span></h2>
            <p className="text-gray-500 mt-2 text-sm">The team building the world's first truly AI-native EMR.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { name: "Mehul Makwana", role: "Co-Founder & CEO", initials: "MM", bio: "Visionary behind Medaea's AI-first architecture and product strategy." },
              { name: "Ami Agrawal", role: "Co-Founder & COO", initials: "AA", bio: "Driving operational excellence and go-to-market across 200+ practice deployments." },
            ].map((f) => (
              <div key={f.name} className="card-dark gradient-border glow-card p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-2xl font-extrabold text-white mb-5 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                  {f.initials}
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{f.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{f.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision / Mission ── */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="text-center mb-10">
            <span className="badge-teal mb-4 inline-block">Our North Star</span>
            <h2 className="text-3xl font-extrabold text-white">Vision, Mission & <span className="gradient-text">Belief</span></h2>
          </div>
          {VISION_ITEMS.map((item) => (
            <div key={item.label} className="card-dark gradient-border glow-card p-8 rounded-2xl">
              <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-3">{item.label}</p>
              <p className="text-gray-200 text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 to-teal-600/6" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Join the <span className="gradient-text">AI Healthcare Revolution</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">200+ practices have already made the switch. Go live in under 7 days.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="gradient-btn inline-block px-10 py-4 rounded-xl text-base font-bold">
              Get Started Free →
            </a>
            <a href={APP_URL} className="btn-outline inline-block px-10 py-4 rounded-xl text-base">
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
