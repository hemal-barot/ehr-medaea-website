const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const FEATURES = [
  {
    icon: "🎙️",
    title: "Ambient Clinical Scribe",
    desc: "Captures conversation, generates SOAP note, proposes codes. Understands specialty terminology in real-time.",
  },
  {
    icon: "🏥",
    title: "AI Coding & Compliance Engine",
    desc: "ICD, CPT, HCC, payer rules — 600+ built-in rules for complete coding accuracy.",
  },
  {
    icon: "📊",
    title: "Real-Time Revenue Intelligence",
    desc: "Dashboards showing clean-claim %, denial risk, AR aging — all in real-time.",
  },
  {
    icon: "✅",
    title: "Eligibility & Prior Authorization Agent",
    desc: "Checks, alerts, and schedules verification before the visit automatically.",
  },
  {
    icon: "📅",
    title: "Intelligent Scheduling Agent",
    desc: "Detects follow-ups, auto-books, and sends patient reminders.",
  },
  {
    icon: "📋",
    title: "Specialty Workflow Templates",
    desc: "Pre-built for 10+ specialties — orthopedics, dermatology, behavioral health, ambulatory surgery and more.",
  },
  {
    icon: "🔒",
    title: "Secure, Audit-Ready Architecture",
    desc: "HIPAA-compliant, full encryption, complete audit logs, and AI explainability built-in.",
  },
  {
    icon: "🔗",
    title: "Seamless Integrations & FHIR-First API",
    desc: "Works with your existing stack. HL7 FHIR compliant, open APIs for lab, pharmacy, and more.",
  },
];

const AGENTS = [
  {
    name: "Clinical Scribe Agent",
    desc: "Ambient documentation, note creation, medical context understanding. Listens to the encounter and generates structured SOAP notes automatically.",
    icon: "🎙️",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Billing & Coding Agent",
    desc: "ICD/CPT/HCC coding, NCCI edits, compliance guardrails. Ensures maximum capture with zero compliance risk.",
    icon: "💰",
    color: "from-purple-600 to-purple-800",
  },
  {
    name: "Eligibility Agent",
    desc: "Insurance + authorization validation before visits. Prevents claim issues before they happen.",
    icon: "✅",
    color: "from-teal-600 to-teal-800",
  },
  {
    name: "Claims Integrity Agent",
    desc: "Scrubbing, denial prediction, payer rules automation. Catches errors before submission.",
    icon: "🛡️",
    color: "from-green-600 to-green-800",
  },
  {
    name: "Scheduling Agent",
    desc: "Follow-up detection, calendar integration, patient reminders. Keeps your schedule optimized.",
    icon: "📅",
    color: "from-orange-600 to-orange-800",
  },
];

const SPECIALTIES = [
  "Orthopedics", "Dermatology", "Behavioral Health", "Ambulatory Surgery",
  "Primary Care", "Cardiology", "Neurology", "Oncology", "Pediatrics", "OB/GYN",
];

export default function Platform() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-medium uppercase tracking-widest text-sm mb-4">Platform Capabilities</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Intelligent Tools That Power the{" "}
            <span className="gradient-text">Modern Clinical Workflow</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Unlock a unified suite of AI-driven features — from ambient scribing to real-time revenue intelligence —
            that streamline operations and enhance clinical performance.
          </p>
        </div>
      </section>

      {/* Problem Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-navy-800/40 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-400 text-sm mb-8 italic">
            "Since switching to Medaea, our clinicians regained 2 hours per day and our revenue increased significantly." — Practice Administrator
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Hours of manual documentation and charting",
              "High denial rates and revenue leakage",
              "Siloed EMRs, billing systems, claim engines",
              "Administrative overhead stealing focus from care",
            ].map((p) => (
              <div key={p} className="card-dark p-4 rounded-xl text-center">
                <div className="text-red-400 text-xl mb-2">⚠️</div>
                <p className="text-gray-400 text-xs">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Platform <span className="gradient-text">Features</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="card-dark glow-card p-6 rounded-2xl hover:bg-navy-700/50 transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-white font-semibold mb-2 text-sm">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Detail */}
      <section className="section-pad bg-navy-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="gradient-text">Autonomous Healthcare Agents</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Intelligent agents that work continuously in the background, handling the complexity of healthcare operations.
            </p>
          </div>
          <div className="space-y-6">
            {AGENTS.map((a) => (
              <div key={a.name} className="card-dark glow-card p-8 rounded-2xl flex items-start gap-6 hover:bg-navy-700/30 transition-all">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {a.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{a.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Built for <span className="gradient-text">Every Specialty</span>
          </h2>
          <p className="text-gray-300 mb-10">
            Pre-built templates, specialty-specific coding rules, and tailored workflows for 10+ specialties.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SPECIALTIES.map((s) => (
              <span key={s} className="px-4 py-2 card-dark rounded-full text-sm text-gray-300 border border-white/10">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-navy-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to See Medaea in Action?</h2>
          <p className="text-gray-300 mb-8">
            Designed to integrate seamlessly with your existing systems while ensuring security, compliance,
            and specialty-ready workflows.
          </p>
          <a href={APP_URL} className="gradient-btn inline-block px-10 py-4 rounded-xl text-base">
            Request a Demo →
          </a>
        </div>
      </section>
    </>
  );
}
