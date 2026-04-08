const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const FEATURES = [
  { icon: "🎙️", title: "Ambient Clinical Scribe", desc: "Listens to encounters, generates structured SOAP notes with ICD/CPT codes in real-time — before you leave the room.", badge: "Core AI", color: "bg-blue-50 border-blue-100", iconBg: "bg-blue-100", textColor: "text-blue-700" },
  { icon: "🏥", title: "AI Coding & Compliance Engine", desc: "600+ built-in payer rules, ICD-10, CPT, HCC, NCCI edits. Full coding accuracy with complete audit trails.", badge: "Revenue", color: "bg-teal-50 border-teal-100", iconBg: "bg-teal-100", textColor: "text-teal-700" },
  { icon: "📊", title: "Revenue Intelligence Dashboard", desc: "Live dashboards: clean-claim %, denial risk scores, AR aging, and revenue leakage alerts — all in real-time.", badge: "Analytics", color: "bg-violet-50 border-violet-100", iconBg: "bg-violet-100", textColor: "text-violet-700" },
  { icon: "✅", title: "Eligibility & Prior Auth Agent", desc: "Automatically verifies insurance and handles prior auth before every visit. Zero manual work, zero surprises.", badge: "Automation", color: "bg-emerald-50 border-emerald-100", iconBg: "bg-emerald-100", textColor: "text-emerald-700" },
  { icon: "📅", title: "Intelligent Scheduling Agent", desc: "Detects follow-up needs, auto-books appointments, sends patient reminders. Your schedule runs itself.", badge: "Automation", color: "bg-rose-50 border-rose-100", iconBg: "bg-rose-100", textColor: "text-rose-700" },
  { icon: "📋", title: "Specialty Workflow Templates", desc: "Pre-built for 10+ specialties with tailored templates, specialty-specific coding rules, and compliance guardrails.", badge: "Specialty", color: "bg-amber-50 border-amber-100", iconBg: "bg-amber-100", textColor: "text-amber-700" },
  { icon: "🔒", title: "HIPAA-Secure Architecture", desc: "AES-256 encryption, zero-trust access controls, SOC2 in progress. Full explainable AI with complete audit logs.", badge: "Security", color: "bg-slate-50 border-slate-200", iconBg: "bg-slate-100", textColor: "text-slate-700" },
  { icon: "🔗", title: "FHIR-First Interoperability", desc: "HL7 FHIR compliant with open APIs for labs, pharmacies, payers, and imaging. True interoperability.", badge: "Integration", color: "bg-blue-50 border-blue-100", iconBg: "bg-blue-100", textColor: "text-blue-700" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "👤",
    title: "Patient Scheduled",
    desc: "Eligibility is verified, prior auth is obtained, and insurance issues are flagged — all before the patient arrives. Zero manual touchpoints.",
  },
  {
    step: "02",
    icon: "🎙️",
    title: "AI Scribe Activates",
    desc: "The encounter begins. Medaea's ambient AI listens, understands clinical context, and generates the complete SOAP note with coding suggestions in real-time.",
  },
  {
    step: "03",
    icon: "💊",
    title: "Autonomous Billing",
    desc: "The billing agent codes the visit (ICD/CPT/HCC), scrubs the claim against 600+ payer rules, predicts denial risk, and submits — all within seconds of encounter completion.",
  },
  {
    step: "04",
    icon: "📊",
    title: "Revenue Monitored",
    desc: "Real-time dashboards track claim status, payment posting, denial resolution, and AR aging. Your revenue cycle runs itself — with full human oversight.",
  },
];

const AGENTS = [
  { name: "Clinical Scribe Agent", icon: "🎙️", metric: "4+ hrs saved/day", color: "bg-blue-600", lightBg: "bg-blue-50", textColor: "text-blue-700", desc: "Ambient documentation, SOAP note creation, medical vocabulary understanding. Listens to the encounter and generates structured documentation automatically." },
  { name: "Billing & Coding Agent", icon: "💊", metric: "95%+ clean claims", color: "bg-teal-600", lightBg: "bg-teal-50", textColor: "text-teal-700", desc: "ICD/CPT/HCC coding, NCCI edits, compliance guardrails. Ensures maximum capture with zero compliance risk using 600+ payer-specific rules." },
  { name: "Eligibility Agent", icon: "✅", metric: "100% pre-visit coverage", color: "bg-emerald-600", lightBg: "bg-emerald-50", textColor: "text-emerald-700", desc: "Insurance + authorization validation before visits. Prevents claim issues before they happen with fully automated pre-verification workflows." },
  { name: "Claims Integrity Agent", icon: "🛡️", metric: "62% fewer denials", color: "bg-violet-600", lightBg: "bg-violet-50", textColor: "text-violet-700", desc: "Scrubbing, denial prediction, payer rules automation. Catches every error and compliance gap before the claim leaves your practice." },
  { name: "Scheduling Agent", icon: "📅", metric: "Zero admin touch", color: "bg-rose-600", lightBg: "bg-rose-50", textColor: "text-rose-700", desc: "Follow-up detection, calendar integration, patient reminders. Keeps your schedule optimized without any manual effort from your front desk." },
];

const SPECIALTIES = [
  "Orthopedics & Sports Medicine", "Dermatology", "Behavioral Health", "Ambulatory Surgery",
  "Primary Care / Family Medicine", "Cardiology", "Neurology", "Oncology / Hematology",
  "Pediatrics", "OB/GYN", "Internal Medicine", "Rheumatology", "Pulmonology", "Endocrinology",
];

export default function Platform() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 hero-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-primary mb-5 inline-block">Platform Capabilities</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
            Intelligent AI Tools for the{" "}
            <span className="gradient-text">Modern Clinical Workflow</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-10">
            A unified suite of autonomous AI capabilities — from ambient scribing to real-time revenue intelligence — all working together in one platform designed from the ground up for modern healthcare practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
              Request a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
            <a href={APP_URL} className="btn-outline px-8 py-4 rounded-xl text-base">Get Started Free</a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-gradient-to-r from-medical-700 to-teal-700 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: "4+ hrs", l: "Saved per clinician per day", icon: "⏱️" },
              { v: "95%+", l: "First-pass clean claim rate", icon: "📋" },
              { v: "62%", l: "Fewer claim denials", icon: "📉" },
              { v: "< 7 days", l: "Average go-live time", icon: "🚀" },
            ].map((s) => (
              <div key={s.l} className="text-white">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-3xl font-extrabold mb-0.5">{s.v}</div>
                <div className="text-medical-200 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-block">How It Works</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              From Patient Arrival to{" "}
              <span className="gradient-text">Paid Claim</span>{" "}
              — Fully Automated
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Every step of the clinical and billing workflow is handled by AI agents working in concert.</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-300 via-teal-300 to-emerald-300" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {HOW_IT_WORKS.map((step) => (
                <div key={step.step} className="relative bg-white rounded-2xl border border-slate-200 shadow-card p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-medical-600 to-teal-600 text-white font-extrabold text-sm mb-4 mx-auto shadow-blue-glow">
                    {step.step}
                  </div>
                  <h3 className="text-slate-800 font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="section-pad section-blue-top">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Full Feature Set</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Everything Your Practice Needs,{" "}
              <span className="gradient-text">Nothing You Don't</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className={`${f.color} rounded-2xl p-6 border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center text-2xl mb-4 shadow-sm`}>{f.icon}</div>
                <span className={`badge-primary text-xs mb-3 inline-block ${f.textColor} bg-white/60 border-current/20`}>{f.badge}</span>
                <h3 className="text-slate-800 font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Agents ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-block">Autonomous Agents</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              <span className="gradient-text">5 AI Agents</span> Working In Concert
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Intelligent agents that work continuously in the background, handling the complexity of healthcare operations so your team doesn't have to.
            </p>
          </div>
          <div className="space-y-4">
            {AGENTS.map((a) => (
              <div key={a.name} className={`${a.lightBg} rounded-2xl p-6 md:p-8 border border-current/10 flex flex-col sm:flex-row items-start gap-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300`}>
                <div className={`w-16 h-16 rounded-2xl ${a.color} flex items-center justify-center text-3xl flex-shrink-0 shadow-md`}>
                  {a.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-slate-800 font-extrabold text-lg">{a.name}</h3>
                    <span className={`badge-teal text-xs ${a.textColor} bg-white border-current/20`}>{a.metric}</span>
                  </div>
                  <p className="text-slate-500 leading-relaxed text-sm">{a.desc}</p>
                </div>
                <div className={`hidden sm:flex items-center gap-1.5 ${a.textColor} text-xs font-bold`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live & Active
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specialties ── */}
      <section className="section-pad section-teal-top">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-teal mb-4 inline-block">Specialty Support</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Built for <span className="gradient-text">Every Medical Specialty</span>
          </h2>
          <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
            Pre-built templates, specialty-specific coding rules, and tailored workflows. Go live in under 7 days with full onboarding support.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SPECIALTIES.map((s) => (
              <span key={s} className="px-4 py-2 bg-white rounded-full text-sm text-slate-600 border border-slate-200 shadow-card hover:border-medical-300 hover:text-medical-700 hover:shadow-blue-glow transition-all duration-200 cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad bg-gradient-to-r from-medical-700 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4">Ready to See Medaea <span className="text-teal-300">in Action?</span></h2>
          <p className="text-blue-100 text-lg mb-8">Built to integrate seamlessly with your existing systems while ensuring security, compliance, and specialty-ready workflows.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="px-10 py-4 rounded-xl text-base font-bold text-medical-900 bg-white hover:bg-medical-50 transition-colors shadow-btn">Request a Demo →</a>
            <a href={APP_URL} className="btn-outline-white px-10 py-4 rounded-xl text-base font-bold">Start Free Trial</a>
          </div>
        </div>
      </section>
    </>
  );
}
