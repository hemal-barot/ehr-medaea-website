import { Link } from "react-router-dom";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const STATS = [
  { value: "95%+", label: "Clean claim rate" },
  { value: "45%", label: "Less admin burden" },
  { value: "62%", label: "Fewer denials" },
  { value: "30–40%", label: "Revenue lift" },
];

const PARTNERS = [
  "Butterfly", "Keplr Health", "BHW Group", "MEI Research",
  "Easterseals", "Proliance", "EliteDNA", "Axis Health",
];

const AGENTS = [
  {
    icon: "🎙️",
    name: "Clinical Scribe",
    desc: "Ambient listening → structured SOAP notes → ICD/CPT codes. Instant, accurate, compliant.",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
  },
  {
    icon: "💊",
    name: "Billing & Coding",
    desc: "600+ payer rules engine. HCC, NCCI edits, zero compliance risk, maximum revenue capture.",
    color: "from-teal-500/20 to-teal-600/5",
    border: "border-teal-500/20",
  },
  {
    icon: "✅",
    name: "Eligibility Agent",
    desc: "Pre-visit insurance verification and prior auth — fully automated before the patient arrives.",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
  },
  {
    icon: "🛡️",
    name: "Claims Integrity",
    desc: "Scrubs every claim, predicts denials, applies payer-specific rules before submission.",
    color: "from-cyan-500/20 to-blue-600/5",
    border: "border-cyan-500/20",
  },
  {
    icon: "📅",
    name: "Scheduling Agent",
    desc: "Auto-detects follow-ups, books appointments, sends patient reminders. Zero admin touch.",
    color: "from-teal-500/20 to-cyan-600/5",
    border: "border-teal-500/20",
  },
];

const SOLUTIONS = [
  {
    badge: "Documentation",
    title: "Real-Time Clinical Documentation",
    desc: "Your AI scribe listens to every encounter, understands specialty terminology, drafts structured SOAP notes, and proposes precise ICD/CPT codes — all before you leave the room. Clinician reviews, signs, done.",
    stats: [{ v: "4+ hrs", l: "Saved per day" }, { v: "< 30s", l: "Note generation" }],
  },
  {
    badge: "Revenue Cycle",
    title: "Autonomous Revenue Cycle Management",
    desc: "From eligibility to claims submission to denial prevention — Medaea's AI agents automate your entire RCM while keeping your team in control of key decisions. No more manual coding errors.",
    stats: [{ v: "95%+", l: "First-pass rate" }, { v: "62%", l: "Fewer denials" }],
  },
  {
    badge: "Workflows",
    title: "Intelligent Specialty Workflows",
    desc: "Pre-built for 10+ specialties — orthopedics, dermatology, behavioral health, ambulatory surgery, and more. Tailored templates, specialty-specific coding rules, and compliance guardrails out of the box.",
    stats: [{ v: "10+", l: "Specialties" }, { v: "< 7 days", l: "Go-live time" }],
  },
];

const TESTIMONIALS = [
  {
    quote: "Medaea gave our clinicians back 2 hours every day. Our revenue increased 35% in the first quarter.",
    author: "Practice Administrator",
    role: "Multi-specialty Clinic, 12 Providers",
    stars: 5,
  },
  {
    quote: "The AI scribe paid for itself in the first month. Documentation went from a nightmare to invisible.",
    author: "Dr. K. Thompson",
    role: "Behavioral Health Practice",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-bg">
        {/* Animated data points */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: "15%", left: "10%", delay: "0s", size: "6px" },
            { top: "30%", right: "8%", delay: "1.5s", size: "4px" },
            { top: "65%", left: "5%", delay: "3s", size: "5px" },
            { top: "80%", right: "15%", delay: "0.8s", size: "3px" },
            { top: "45%", left: "88%", delay: "2s", size: "6px" },
          ].map((p, i) => (
            <div
              key={i}
              className="data-point"
              style={{
                top: p.top, left: p.left, right: p.right,
                width: p.size, height: p.size,
                animationDelay: p.delay,
              }}
            />
          ))}
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 badge-teal mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                200+ practices already transforming care
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                The AI-Native{" "}
                <span className="gradient-text-warm">EHR</span>{" "}
                That Works as Hard{" "}
                <span className="gradient-text">as You Do</span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
                Medaea unifies ambient documentation, autonomous billing, and intelligent clinical workflows into one AI-powered platform. Stop charting. Start caring.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href={APP_URL} className="gradient-btn px-8 py-4 text-base rounded-xl inline-flex items-center gap-2 font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Started Free
                </a>
                <a href={APP_URL} className="btn-outline px-8 py-4 text-base rounded-xl inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center gap-4">
                {["HIPAA Compliant", "ONC Certified", "< 7 Day Setup"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <svg className="w-3.5 h-3.5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Pulse Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                {/* Pulse rings */}
                <div className="ai-ring inset-16" />
                <div className="ai-ring inset-8" />
                <div className="ai-ring inset-0" />

                {/* Center orb */}
                <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.5)]">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">AI</div>
                    <div className="text-cyan-200 text-xs font-semibold mt-1">ENGINE</div>
                  </div>
                </div>

                {/* Orbiting feature nodes */}
                {[
                  { label: "Scribe", angle: 0 },
                  { label: "Billing", angle: 72 },
                  { label: "Coding", angle: 144 },
                  { label: "Claims", angle: 216 },
                  { label: "Auth", angle: 288 },
                ].map((node) => {
                  const rad = (node.angle - 90) * (Math.PI / 180);
                  const r = 45;
                  const x = 50 + r * Math.cos(rad);
                  const y = 50 + r * Math.sin(rad);
                  return (
                    <div
                      key={node.label}
                      className="absolute flex items-center justify-center"
                      style={{
                        left: `${x}%`, top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="px-2.5 py-1.5 rounded-lg bg-navy-800/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold whitespace-nowrap backdrop-blur-sm shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                        {node.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-12 border-y border-cyan-500/10" style={{ background: "rgba(6,182,212,0.03)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold stat-shine mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ticker ── */}
      <section className="py-10 overflow-hidden bg-navy-950">
        <p className="text-center text-gray-600 text-xs font-semibold uppercase tracking-widest mb-6">Trusted by leading practices</p>
        <div className="relative overflow-hidden">
          <div className="ticker-track">
            {[...PARTNERS, ...PARTNERS].map((name, i) => (
              <div key={i} className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/6 bg-white/2 text-gray-500 text-sm font-medium whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Agents ── */}
      <section className="section-pad bg-navy-900">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="badge-teal mb-4 inline-block">Autonomous Agents</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              5 AI Agents Working{" "}
              <span className="gradient-text">24/7 For Your Practice</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Intelligent agents operating in the background — so your team focuses on patients, not paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {AGENTS.map((a, i) => (
              <div
                key={a.name}
                className={`relative card-dark glow-card p-6 gradient-border`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.color} border ${a.border} flex items-center justify-center text-2xl mb-4`}>
                  {a.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{a.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>

                {/* Active indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-cyan-600 text-xs">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="section-pad" style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.04) 0%, #06090f 60%)" }}>
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="badge-teal mb-4 inline-block">Our Platform</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              The Only EHR Built{" "}
              <span className="gradient-text">AI-Native From Day One</span>
            </h2>
          </div>

          <div className="space-y-20">
            {SOLUTIONS.map((s, i) => (
              <div
                key={s.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <span className="badge-teal mb-4 inline-block">{s.badge}</span>
                  <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg mb-6">{s.desc}</p>
                  <div className="flex gap-6 mb-8">
                    {s.stats.map((st) => (
                      <div key={st.l} className="text-center">
                        <div className="text-2xl font-extrabold stat-shine">{st.v}</div>
                        <div className="text-gray-500 text-xs mt-1">{st.l}</div>
                      </div>
                    ))}
                  </div>
                  <a href={APP_URL} className="gradient-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Visual panel */}
                <div className={`card-glass gradient-border p-8 rounded-2xl ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="space-y-3">
                    {/* Simulated EHR UI */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-xs font-bold text-white">AI</div>
                      <div>
                        <div className="text-white text-sm font-semibold">Medaea {s.badge} Agent</div>
                        <div className="flex items-center gap-1.5 text-xs text-cyan-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          Processing...
                        </div>
                      </div>
                    </div>
                    {[80, 60, 75, 45].map((w, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500/60 flex-shrink-0" />
                        <div className="flex-1 h-2.5 rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-teal-500"
                            style={{ width: `${w}%`, opacity: 1 - j * 0.15 }}
                          />
                        </div>
                        <div className="text-gray-600 text-xs w-8 text-right">{w}%</div>
                      </div>
                    ))}
                    <div className="mt-4 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/15">
                      <div className="text-cyan-300 text-xs font-semibold mb-1">✓ Task Complete</div>
                      <div className="text-gray-500 text-xs">Processed in 1.2s · Ready for review</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-pad bg-navy-900">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Social Proof</span>
            <h2 className="text-4xl font-extrabold text-white">
              What Practices Are <span className="gradient-text">Saying</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card-dark gradient-border p-8 rounded-2xl glow-card">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white text-sm font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.author}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="section-pad-sm bg-navy-950">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">Meet the <span className="gradient-text">Founders</span></h2>
            <p className="text-gray-500 mt-2">Building the world's first truly AI-native EMR.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { name: "Mehul Makwana", role: "Co-Founder & CEO", initials: "MM" },
              { name: "Ami Agrawal", role: "Co-Founder & COO", initials: "AA" },
            ].map((f) => (
              <div key={f.name} className="card-dark gradient-border glow-card p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-xl font-extrabold text-white mb-4 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  {f.initials}
                </div>
                <h3 className="text-white font-bold text-lg">{f.name}</h3>
                <p className="text-cyan-400 text-sm mt-1">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-navy-900 to-teal-600/10" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative container-xl text-center">
          <span className="badge-teal mb-6 inline-block">Ready to transform?</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Transform EMR & Revenue Operations<br />
            with <span className="gradient-text">Autonomous AI Agents</span>
          </h2>
          <p className="text-gray-400 text-xl mb-4 max-w-2xl mx-auto">
            The first AI-native EHR built with intelligent agent automation — not AI bolted on as an afterthought.
          </p>
          <blockquote className="text-cyan-400 italic text-lg mb-10 max-w-2xl mx-auto">
            "We didn't build another EMR. We built an AI-first care enablement system that happens to replace your EMR."
          </blockquote>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="gradient-btn px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
              Get Started Free →
            </a>
            <a href={APP_URL} className="btn-outline px-10 py-4 rounded-xl text-base font-semibold">
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
