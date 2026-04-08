const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const COMPETITOR_TABLE = [
  {
    feature: "AI-native architecture",
    medaea: true,
    athena: false,
    ecw: false,
    note: "Built AI-first, not AI as an add-on",
  },
  {
    feature: "Ambient clinical scribe (real-time)",
    medaea: true,
    athena: "partial",
    ecw: "partial",
    note: "Medaea natively integrated; others require third-party tools",
  },
  {
    feature: "Autonomous revenue cycle agents",
    medaea: true,
    athena: false,
    ecw: false,
    note: "Fully automated from eligibility to payment posting",
  },
  {
    feature: "Real-time denial prediction",
    medaea: true,
    athena: false,
    ecw: false,
    note: "AI flags denial risk before claim submission",
  },
  {
    feature: "Human-in-loop AI governance",
    medaea: true,
    athena: false,
    ecw: false,
    note: "Every AI action is auditable and explainable",
  },
  {
    feature: "Go-live in under 7 days",
    medaea: true,
    athena: false,
    ecw: false,
    note: "athenahealth / eCW typical: 3–9 months",
  },
  {
    feature: "No vendor lock-in",
    medaea: true,
    athena: false,
    ecw: false,
    note: "Open FHIR API; export your data anytime",
  },
  {
    feature: "HIPAA + SOC2 compliant",
    medaea: true,
    athena: true,
    ecw: true,
    note: "All platforms meet baseline HIPAA requirements",
  },
  {
    feature: "Specialty-specific templates",
    medaea: true,
    athena: "partial",
    ecw: "partial",
    note: "Medaea ships 10+ out of the box; others require customization",
  },
  {
    feature: "Transparent AI (explainable)",
    medaea: true,
    athena: false,
    ecw: false,
    note: "Full audit logs + reasoning for every AI decision",
  },
];

const TRUST_PILLARS = [
  {
    icon: "👤",
    title: "Human-in-the-Loop",
    desc: "Every AI action is reviewed by a clinician or biller before it takes effect. You stay in control — AI handles the heavy lifting.",
    color: "from-cyan-500/15 to-transparent border-cyan-500/20",
  },
  {
    icon: "📋",
    title: "Full Audit Trail",
    desc: "Every decision is logged, timestamped, and explainable. Regulators, payers, and providers always have complete visibility.",
    color: "from-teal-500/15 to-transparent border-teal-500/20",
  },
  {
    icon: "🔒",
    title: "HIPAA-Secure by Design",
    desc: "AES-256 encryption at rest and in transit. Zero-trust architecture. Multi-layer access controls. SOC2 in progress.",
    color: "from-emerald-500/15 to-transparent border-emerald-500/20",
  },
  {
    icon: "🛡️",
    title: "No Vendor Lock-In",
    desc: "Open FHIR API, data portability, and no long-term contracts. Your data is yours — always.",
    color: "from-cyan-500/15 to-transparent border-cyan-500/20",
  },
];

const OUTCOMES = [
  { value: "95%+", label: "First-pass clean claim rate", icon: "🎯" },
  { value: "30–40%", label: "Increase in revenue capture", icon: "📈" },
  { value: "45%", label: "Reduction in admin burden", icon: "⏱️" },
  { value: "62%", label: "Fewer denials with AI coding", icon: "🚫" },
  { value: "< 7 days", label: "Average go-live time", icon: "🚀" },
  { value: "200+", label: "Practices on Medaea today", icon: "🏥" },
];

function CheckIcon({ value }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
          <span className="text-yellow-400 text-xs font-bold">~</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
        <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  );
}

export default function WhyUs() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-teal mb-6 inline-block">Why Switch to Medaea</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Why 200+ Practices{" "}
            <span className="gradient-text">Chose Medaea</span>{" "}
            Over the Rest
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real outcomes. Responsible AI. A deployment time that actually fits your schedule. See how we stack up against the established players.
          </p>
        </div>
      </section>

      {/* ── Competitor Comparison Table ── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-teal mb-4 inline-block">Head-to-Head Comparison</span>
            <h2 className="text-4xl font-extrabold text-white">
              Medaea vs. <span className="gradient-text">The Legacy Players</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
              How Medaea compares to athenahealth and eClinicalWorks on the features that matter most.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left py-4 px-6 text-gray-500 text-sm font-semibold w-1/2">Feature</th>
                  <th className="py-4 px-4 text-center">
                    <div className="inline-flex flex-col items-center">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white font-extrabold text-xs mb-1">M</div>
                      <span className="text-cyan-300 text-sm font-bold">Medaea</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <span className="text-gray-500 text-sm font-semibold">athenahealth</span>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <span className="text-gray-500 text-sm font-semibold">eClinicalWorks</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_TABLE.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/5 transition-colors hover:bg-white/2 ${
                      i % 2 === 0 ? "bg-white/1" : ""
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="text-gray-300 text-sm font-medium">{row.feature}</div>
                      {row.note && <div className="text-gray-600 text-xs mt-0.5">{row.note}</div>}
                    </td>
                    <td className="py-4 px-4"><CheckIcon value={row.medaea} /></td>
                    <td className="py-4 px-4"><CheckIcon value={row.athena} /></td>
                    <td className="py-4 px-4"><CheckIcon value={row.ecw} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-6 mt-5 justify-center text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Full support
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
                <span className="text-yellow-400 text-xs font-bold">~</span>
              </div>
              Partial / add-on required
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              Not available
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="section-pad bg-navy-900">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Proven Outcomes</span>
            <h2 className="text-4xl font-extrabold text-white">
              Real Numbers from <span className="gradient-text">Real Practices</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {OUTCOMES.map((o) => (
              <div key={o.label} className="card-dark gradient-border glow-card p-8 rounded-2xl text-center">
                <div className="text-3xl mb-3">{o.icon}</div>
                <div className="text-3xl font-extrabold stat-shine mb-2">{o.value}</div>
                <p className="text-gray-400 text-xs leading-snug">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust pillars ── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Responsible AI</span>
            <h2 className="text-4xl font-extrabold text-white">
              Built on a Foundation of <span className="gradient-text">Trust & Transparency</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We believe AI in healthcare must be transparent, auditable, and always in service of human care. "People Before Profit" isn't a tagline — it's our design principle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TRUST_PILLARS.map((t) => (
              <div key={t.title} className={`card-dark gradient-border glow-card p-8 rounded-2xl bg-gradient-to-br ${t.color}`}>
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{t.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance grid ── */}
      <section className="section-pad-sm bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-white mb-8">
            Compliance & Security — <span className="gradient-text">Built for Healthcare From Day One</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🏥", label: "HIPAA-Secure Infrastructure" },
              { icon: "📊", label: "Audit-Friendly AI Logs" },
              { icon: "✅", label: "ONC Certification In Progress" },
              { icon: "🔐", label: "AES-256 Multi-Layer Encryption" },
              { icon: "🛡️", label: "Zero-Trust Architecture" },
              { icon: "🤖", label: "Explainable AI (No Black Box)" },
            ].map((c) => (
              <div key={c.label} className="card-dark gradient-border p-5 rounded-xl flex items-center gap-3 hover:border-cyan-500/30 transition-colors">
                <span className="text-xl flex-shrink-0">{c.icon}</span>
                <span className="text-gray-300 text-sm font-medium">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-teal-600/8" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Make the <span className="gradient-text">Switch?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join 200+ practices that have already transformed their operations with Medaea — go live in under 7 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="gradient-btn px-10 py-4 rounded-xl text-base font-bold">
              Get Started Free →
            </a>
            <a href={APP_URL} className="btn-outline px-10 py-4 rounded-xl text-base">
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
