import { useState, useEffect, useRef } from "react";

const APP_URL = import.meta.env.VITE_APP_URL || "http://https://fix-integrating-website-backend.d32ldxvpx3i29m.amplifyapp.com";

const STATS = [
  { value: 45, suffix: "%", label: "Reduced administrative time", icon: "⏱️", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { value: 62, suffix: "%", label: "Fewer claim denials", icon: "🚫", color: "bg-teal-50 text-teal-700 border-teal-100" },
  { value: 40, suffix: "%", label: "Higher clinician productivity", icon: "📈", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { value: 30, suffix: "%", label: "Cost savings across the practice", icon: "💰", color: "bg-violet-50 text-violet-700 border-violet-100" },
];

const DIFFERENTIATORS = [
  { icon: "🔗", text: "Unified EMR + Billing + AI Agents — no bolt-ons, no integrations to configure" },
  { icon: "🎙️", text: "Real-time documentation + coding at the point of care, not hours later" },
  { icon: "👤", text: "Human-in-loop AI for safety, transparency, and full clinical control always" },
  { icon: "🚀", text: "Rapid deployment — go live in under 7 days with dedicated onboarding support" },
  { icon: "💰", text: "Measurable ROI from month one: revenue lift, admin reduction, fewer denials" },
  { icon: "❤️", text: "Built with People Before Profit — clinicians and patients always come first" },
];

const VALUES = [
  { icon: "🧠", title: "Intelligence First", desc: "Every feature is powered by AI — not as an add-on, but as the core foundation. We built the EMR around AI, not the other way around. This means deeper automation and more meaningful outcomes.", color: "bg-blue-50 border-blue-100" },
  { icon: "❤️", title: "People Before Profit", desc: "We exist to serve clinicians and patients. Revenue is a result of doing that exceptionally well — never the goal that compromises the quality or integrity of care.", color: "bg-rose-50 border-rose-100" },
  { icon: "🔍", title: "Radical Transparency", desc: "Every AI decision is explainable, auditable, and reviewable. Healthcare AI must be a tool clinicians trust completely — not a black box making decisions no one understands.", color: "bg-teal-50 border-teal-100" },
  { icon: "⚡", title: "Speed & Measurable Impact", desc: "Go live in 7 days. Show ROI in 30. We build for outcomes that you can measure, not vanity metrics or vague promises about 'improving workflows'.", color: "bg-emerald-50 border-emerald-100" },
];

const VISION_ITEMS = [
  {
    icon: "🌟",
    label: "Our Vision",
    text: "To build the most intelligent autonomous healthcare operating system — where administrative burden disappears, documentation writes itself, and revenue flows accurately and instantly. A future where physicians practice at the top of their license.",
  },
  {
    icon: "🎯",
    label: "Our Mission",
    text: "To empower every clinician with AI that handles documentation, billing, and compliance automatically — so they can focus entirely on what they trained for: delivering exceptional patient care.",
  },
  {
    icon: "💡",
    label: "Our Belief",
    text: "Healthcare should run intelligently in the background so clinicians can practice at the top of their license. The future of medicine is one where the EHR is invisible, the AI handles the burden, and care is the only priority.",
  },
];

function AnimatedStat({ value, suffix, label, icon, color, inView }) {
  const [count, setCount] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;
    const steps = 60;
    const inc = value / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= value) { setCount(value); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, 1800 / steps);
    return () => clearInterval(t);
  }, [inView, value]);

  return (
    <div className={`${color} rounded-2xl border p-8 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}>
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-5xl font-extrabold mb-2 tabular-nums">{count}{suffix}</div>
      <p className="text-sm leading-snug opacity-80">{label}</p>
    </div>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {STATS.map((s) => <AnimatedStat key={s.label} {...s} inView={inView} />)}
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 hero-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-primary mb-5 inline-block">About Medaea.ai</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
            The World's First Truly{" "}
            <span className="gradient-text">AI-Native EMR</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-4">
            A unified clinical + revenue + administrative operating system — powered by intelligent AI agents working alongside your team in real-time, without adding any complexity.
          </p>
          <p className="text-slate-400 italic text-sm mb-10 max-w-2xl mx-auto">
            Combining the best of Epic's records, Robin AI's scribe, a complete RCM engine, and a compliance copilot — in one AI-native system built for specialty practices and modern provider groups.
          </p>
          <a href={APP_URL} className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold">
            Get Started Today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </a>
        </div>
      </section>

      {/* ── Animated Stats ── */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection />
        </div>
      </section>

      {/* ── Platform overview ── */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge-primary mb-4 inline-block">Why We're Different</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Why Medaea Outpaces Every{" "}
                <span className="gradient-text">Legacy EHR Solution</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 text-lg">
                Unlike platforms that focus only on billing or only on records, Medaea unites them all. Unlike legacy EMRs repurposed with bolt-on AI, Medaea is AI-native from day one — built to permanently eliminate administrative burden, not patch it over.
              </p>
              <ul className="space-y-4">
                {DIFFERENTIATORS.map((d) => (
                  <li key={d.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{d.icon}</span>
                    <span className="text-slate-600 text-sm leading-relaxed">{d.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual panel */}
            <div className="bg-white rounded-3xl shadow-card-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-medical-600 to-teal-600 flex items-center justify-center text-white font-extrabold shadow-blue-glow">M</div>
                <div>
                  <div className="text-slate-800 font-bold text-sm">Medaea AI Platform</div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    All agents active — processing now
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Clinical Scribe Agent", pct: 100, status: "Live", color: "bg-blue-500" },
                  { label: "Revenue Cycle Agent", pct: 95, status: "Processing", color: "bg-teal-500" },
                  { label: "Compliance Engine", pct: 100, status: "Monitoring", color: "bg-emerald-500" },
                  { label: "Claims Integrity Agent", pct: 88, status: "Reviewing", color: "bg-violet-500" },
                  { label: "Scheduling Agent", pct: 92, status: "Active", color: "bg-rose-500" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-600 text-xs font-medium">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-xs">{item.pct}%</span>
                        <span className="text-emerald-600 text-xs font-semibold">{item.status}</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-700 font-medium">
                ✓ 847 encounters processed today · $1.2M revenue protected · 0 compliance flags
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-block">Our Core Values</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className={`${v.color} rounded-2xl border p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}>
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-slate-800 font-extrabold text-xl mb-3">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision / Mission ── */}
      <section className="section-pad section-blue-top">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-primary mb-4 inline-block">Our North Star</span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Vision, Mission & <span className="gradient-text">Belief</span>
            </h2>
          </div>
          <div className="space-y-5">
            {VISION_ITEMS.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl border border-slate-200 shadow-card p-8 hover:border-medical-200 hover:shadow-card-hover transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-medical-700 font-extrabold uppercase tracking-widest text-xs">{item.label}</p>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad bg-gradient-to-r from-medical-700 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4">
            Join the <span className="text-teal-300">AI Healthcare Revolution</span>
          </h2>
          <p className="text-blue-100 text-lg mb-8">200+ practices have already made the switch. Go live in under 7 days with full onboarding support.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="px-10 py-4 rounded-xl text-base font-bold text-medical-900 bg-white hover:bg-medical-50 transition-colors shadow-btn">Get Started Free →</a>
            <a href={APP_URL} className="btn-outline-white px-10 py-4 rounded-xl text-base font-bold">Schedule a Demo</a>
          </div>
        </div>
      </section>
    </>
  );
}
