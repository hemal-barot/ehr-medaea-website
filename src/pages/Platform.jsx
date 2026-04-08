const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const FEATURES = [
  {
    icon: "🎙️",
    title: "Ambient Clinical Scribe",
    desc: "Captures patient encounters in real-time, generates SOAP notes, and proposes ICD/CPT codes instantly. Understands specialty terminology without manual input.",
    color: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/20",
  },
  {
    icon: "🏥",
    title: "AI Coding & Compliance Engine",
    desc: "600+ built-in payer rules, ICD-10, CPT, HCC, and NCCI edits. Complete coding accuracy with full audit trails and zero compliance risk.",
    color: "from-teal-500/20 to-transparent",
    border: "border-teal-500/20",
  },
  {
    icon: "📊",
    title: "Real-Time Revenue Intelligence",
    desc: "Live dashboards: clean-claim %, denial risk scores, AR aging, revenue leakage alerts — all updating in real-time as your team works.",
    color: "from-emerald-500/20 to-transparent",
    border: "border-emerald-500/20",
  },
  {
    icon: "✅",
    title: "Eligibility & Prior Auth Agent",
    desc: "Automatically verifies insurance coverage and handles prior authorization before every visit — no manual touchpoints needed.",
    color: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/20",
  },
  {
    icon: "📅",
    title: "Intelligent Scheduling Agent",
    desc: "Detects follow-up needs, auto-books appointments, and sends patient reminders. Your schedule runs itself.",
    color: "from-teal-500/20 to-transparent",
    border: "border-teal-500/20",
  },
  {
    icon: "📋",
    title: "Specialty Workflow Templates",
    desc: "Pre-built for 10+ specialties with tailored templates, specialty-specific coding rules, and compliance guardrails out of the box.",
    color: "from-emerald-500/20 to-transparent",
    border: "border-emerald-500/20",
  },
  {
    icon: "🔒",
    title: "Secure, Audit-Ready Architecture",
    desc: "HIPAA-compliant, AES-256 encrypted, SOC2 in progress. Full AI explainability and complete audit logs built into every workflow.",
    color: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/20",
  },
  {
    icon: "🔗",
    title: "FHIR-First API & Integrations",
    desc: "HL7 FHIR compliant with open APIs for labs, pharmacies, payers, and your existing stack. True interoperability, not walled gardens.",
    color: "from-teal-500/20 to-transparent",
    border: "border-teal-500/20",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Patient Arrives",
    desc: "Medaea's eligibility agent has already verified insurance, obtained prior auth, and flagged any issues — before the first appointment.",
  },
  {
    step: "02",
    title: "AI Scribe Activates",
    desc: "As the encounter begins, the ambient scribe listens, understands the conversation in clinical context, and generates the complete SOAP note in real-time.",
  },
  {
    step: "03",
    title: "Coding & Claims",
    desc: "The billing agent auto-codes the visit (ICD/CPT/HCC), scrubs the claim, predicts denial risk, and submits — all within seconds of encounter completion.",
  },
];

const AGENTS = [
  {
    name: "Clinical Scribe Agent",
    desc: "Ambient documentation, note creation, medical context understanding. Listens to the encounter and generates structured SOAP notes automatically.",
    icon: "🎙️",
    metric: "4+ hrs saved/day",
    color: "border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent",
  },
  {
    name: "Billing & Coding Agent",
    desc: "ICD/CPT/HCC coding, NCCI edits, compliance guardrails. Ensures maximum capture with zero compliance risk.",
    icon: "💊",
    metric: "95%+ clean claims",
    color: "border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-transparent",
  },
  {
    name: "Eligibility Agent",
    desc: "Insurance + authorization validation before visits. Prevents claim issues before they happen.",
    icon: "✅",
    metric: "100% pre-visit coverage",
    color: "border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent",
  },
  {
    name: "Claims Integrity Agent",
    desc: "Scrubbing, denial prediction, payer rules automation. Catches every error before submission.",
    icon: "🛡️",
    metric: "62% fewer denials",
    color: "border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent",
  },
  {
    name: "Scheduling Agent",
    desc: "Follow-up detection, calendar integration, patient reminders. Keeps your schedule optimized.",
    icon: "📅",
    metric: "Zero admin touch",
    color: "border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-transparent",
  },
];

const SPECIALTIES = [
  "Orthopedics", "Dermatology", "Behavioral Health", "Ambulatory Surgery",
  "Primary Care", "Cardiology", "Neurology", "Oncology", "Pediatrics", "OB/GYN",
  "Internal Medicine", "Rheumatology",
];

export default function Platform() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-teal mb-6 inline-block">Platform Capabilities</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Intelligent Tools for the{" "}
            <span className="gradient-text">AI-Driven Clinical Workflow</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
            A unified suite of autonomous AI capabilities — from ambient scribing to real-time revenue intelligence — all working together in one platform designed from the ground up for modern healthcare.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="gradient-btn px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
              Request a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href={APP_URL} className="btn-outline px-8 py-4 rounded-xl text-base">Get Started Free</a>
          </div>
        </div>
      </section>

      {/* ── Stat strip ── */}
      <section className="py-10 border-y border-cyan-500/8" style={{ background: "rgba(6,182,212,0.025)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-xs uppercase tracking-widest mb-6">Platform Impact</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: "4+ hrs", l: "Saved per clinician per day" },
              { v: "95%+", l: "First-pass clean claim rate" },
              { v: "62%", l: "Fewer claim denials" },
              { v: "< 7 days", l: "Average go-live time" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-extrabold stat-shine mb-1">{s.v}</div>
                <div className="text-gray-500 text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">How It Works</span>
            <h2 className="text-4xl font-extrabold text-white">
              From Patient Arrival to{" "}
              <span className="gradient-text">Paid Claim</span>{" "}
              — Fully Automated
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[33%] right-[33%] h-px bg-gradient-to-r from-cyan-500/50 via-teal-500/50 to-transparent" />
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="relative card-dark gradient-border glow-card p-8 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white font-extrabold text-xl mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)] mx-auto">
                  {step.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="md:hidden mt-6 flex justify-center">
                    <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="section-pad bg-navy-900">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Full Feature Set</span>
            <h2 className="text-4xl font-extrabold text-white">
              Everything Your Practice Needs,{" "}
              <span className="gradient-text">Nothing You Don't</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className={`card-dark gradient-border glow-card p-6 rounded-2xl`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} border ${f.border} flex items-center justify-center text-2xl mb-4`}>
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Agents ── */}
      <section className="section-pad bg-navy-950">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Autonomous Agents</span>
            <h2 className="text-4xl font-extrabold text-white">
              <span className="gradient-text">5 AI Agents</span> Working In Concert
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Intelligent agents that work continuously in the background, handling the complexity of healthcare operations.
            </p>
          </div>
          <div className="space-y-4">
            {AGENTS.map((a) => (
              <div key={a.name} className={`p-6 md:p-8 rounded-2xl border ${a.color} glow-card flex flex-col sm:flex-row items-start gap-6 transition-all duration-300`}>
                <div className="w-14 h-14 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {a.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-white font-bold text-lg">{a.name}</h3>
                    <span className="badge-teal text-xs">{a.metric}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">{a.desc}</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-cyan-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Live
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specialties ── */}
      <section className="section-pad-sm bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-teal mb-4 inline-block">Specialty Support</span>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Built for <span className="gradient-text">Every Specialty</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Pre-built templates, specialty-specific coding rules, and tailored workflows — go live in under 7 days.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SPECIALTIES.map((s) => (
              <span key={s} className="px-4 py-2 card-dark rounded-full text-sm text-gray-300 border border-white/8 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-200 cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 to-teal-600/8" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to See Medaea <span className="gradient-text">in Action?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Built to integrate seamlessly with your existing systems while ensuring security, compliance, and specialty-ready workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="gradient-btn inline-block px-10 py-4 rounded-xl text-base font-bold">
              Request a Demo →
            </a>
            <a href={APP_URL} className="btn-outline inline-block px-10 py-4 rounded-xl text-base">
              Start Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
