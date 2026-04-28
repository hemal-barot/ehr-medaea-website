const APP_URL = import.meta.env.VITE_APP_URL || "http://https://fix-integrating-website-backend.d32ldxvpx3i29m.amplifyapp.com";

const COMPETITOR_TABLE = [
  { feature: "AI-native architecture (not bolted on)", medaea: true,      athena: false,     ecw: false,     note: "Built AI-first from the ground up" },
  { feature: "Ambient clinical scribe (integrated)", medaea: true,      athena: "partial", ecw: "partial", note: "Medaea native; others require third-party tools" },
  { feature: "Autonomous revenue cycle agents", medaea: true,      athena: false,     ecw: false,     note: "Fully automated end-to-end RCM" },
  { feature: "Real-time denial prediction", medaea: true,      athena: false,     ecw: false,     note: "AI flags denial risk before submission" },
  { feature: "Human-in-loop AI governance", medaea: true,      athena: false,     ecw: false,     note: "Every AI action is auditable and explainable" },
  { feature: "Go-live in under 7 days", medaea: true,      athena: false,     ecw: false,     note: "athenahealth/eCW typical: 3–9 months" },
  { feature: "No vendor lock-in & open APIs", medaea: true,      athena: false,     ecw: false,     note: "Open FHIR API; export your data anytime" },
  { feature: "HIPAA + SOC2 compliant", medaea: true,      athena: true,      ecw: true,      note: "All platforms meet baseline HIPAA requirements" },
  { feature: "Specialty-specific templates (out-of-box)", medaea: true,      athena: "partial", ecw: "partial", note: "Medaea ships 10+ OOTB; others require customization" },
  { feature: "Transparent AI (fully explainable)", medaea: true,      athena: false,     ecw: false,     note: "Full audit logs + reasoning for every AI decision" },
  { feature: "Month-to-month pricing (no long-term lock)", medaea: true,      athena: false,     ecw: false,     note: "Medaea has flexible monthly billing" },
];

const OUTCOMES = [
  { value: "95%+", label: "First-pass clean claim rate", icon: "🎯", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { value: "30–40%", label: "Increase in revenue capture", icon: "📈", color: "bg-teal-50 text-teal-700 border-teal-100" },
  { value: "45%", label: "Reduction in admin burden", icon: "⏱️", color: "bg-violet-50 text-violet-700 border-violet-100" },
  { value: "62%", label: "Fewer denials with AI coding", icon: "🚫", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { value: "< 7 days", label: "Average go-live time", icon: "🚀", color: "bg-amber-50 text-amber-700 border-amber-100" },
  { value: "200+", label: "Practices on Medaea today", icon: "🏥", color: "bg-rose-50 text-rose-700 border-rose-100" },
];

const TRUST_PILLARS = [
  { icon: "👤", title: "Human-in-the-Loop Design", desc: "Every AI action is reviewed by a clinician or biller before it takes effect. You stay in complete control — AI handles the complexity, you make the decisions.", color: "bg-blue-50 border-blue-100", iconBg: "bg-blue-100" },
  { icon: "📋", title: "Full Audit Trail & Transparency", desc: "Every decision is logged, timestamped, and fully explainable. Regulators, payers, and providers always have complete visibility into what the AI did and why.", color: "bg-teal-50 border-teal-100", iconBg: "bg-teal-100" },
  { icon: "🔒", title: "HIPAA-Secure by Design", desc: "AES-256 encryption at rest and in transit. Zero-trust architecture. Multi-layer access controls. SOC2 in progress. BAA agreement included with every plan.", color: "bg-emerald-50 border-emerald-100", iconBg: "bg-emerald-100" },
  { icon: "🛡️", title: "No Vendor Lock-In, Ever", desc: "Open FHIR API, complete data portability, and no long-term contracts. Your data is yours — always. Export it anytime in standard formats.", color: "bg-violet-50 border-violet-100", iconBg: "bg-violet-100" },
];

function CellValue({ value }) {
  if (value === true) return (
    <div className="flex justify-center">
      <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
        <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
        </svg>
      </div>
    </div>
  );
  if (value === "partial") return (
    <div className="flex justify-center">
      <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
        <span className="text-amber-600 text-sm font-bold">~</span>
      </div>
    </div>
  );
  return (
    <div className="flex justify-center">
      <div className="w-7 h-7 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
        <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 hero-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-primary mb-5 inline-block">Why Switch to Medaea</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
            Why 200+ Practices{" "}
            <span className="gradient-text">Chose Medaea</span>{" "}
            Over the Rest
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Real outcomes. Responsible AI. Deployment that actually fits your timeline. See how Medaea compares head-to-head against the established players.
          </p>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-primary mb-4 inline-block">Head-to-Head</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Medaea vs. <span className="gradient-text">The Legacy Players</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              A transparent comparison of Medaea against athenahealth and eClinicalWorks on the features that matter most to physicians.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-card">
            <table className="w-full min-w-[640px]">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-6 text-slate-500 text-sm font-semibold w-1/2">Feature</th>
                  <th className="py-4 px-4 text-center">
                    <div className="inline-flex flex-col items-center">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-medical-600 to-teal-600 flex items-center justify-center text-white font-extrabold text-sm mb-1">M</div>
                      <span className="text-medical-700 text-sm font-extrabold">Medaea</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <span className="text-slate-600 text-sm font-bold">athenahealth</span>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <span className="text-slate-600 text-sm font-bold">eClinicalWorks</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_TABLE.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-slate-50 hover:bg-medical-50/30 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"}`}>
                    <td className="py-4 px-6">
                      <div className="text-slate-700 text-sm font-medium">{row.feature}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{row.note}</div>
                    </td>
                    <td className="py-4 px-4 bg-medical-50/20"><CellValue value={row.medaea} /></td>
                    <td className="py-4 px-4"><CellValue value={row.athena} /></td>
                    <td className="py-4 px-4"><CellValue value={row.ecw} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-5 justify-center text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
              </div>
              Full support
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
                <span className="text-amber-600 text-xs font-bold">~</span>
              </div>
              Partial / requires add-on
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
              </div>
              Not available
            </div>
            <span className="text-slate-400">Data compiled from public sources and customer feedback</span>
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="section-pad section-blue-top">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Proven Outcomes</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Real Numbers from <span className="gradient-text">Real Practices</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {OUTCOMES.map((o) => (
              <div key={o.label} className={`${o.color} rounded-2xl border p-8 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}>
                <div className="text-4xl mb-3">{o.icon}</div>
                <div className="text-4xl font-extrabold mb-2">{o.value}</div>
                <p className="text-sm leading-snug opacity-90">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust pillars ── */}
      <section className="section-pad bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-block">Responsible AI</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Built on a Foundation of{" "}
              <span className="gradient-text">Trust & Transparency</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              AI in healthcare must be transparent, auditable, and always in service of human care. Every Medaea AI action is reviewable, explainable, and governed by the clinical team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TRUST_PILLARS.map((t) => (
              <div key={t.title} className={`${t.color} rounded-2xl border p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-14 h-14 rounded-2xl ${t.iconBg} flex items-center justify-center text-3xl mb-5 shadow-sm`}>{t.icon}</div>
                <h3 className="text-slate-800 font-bold text-xl mb-3">{t.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance grid ── */}
      <section className="section-pad-sm section-teal-top">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-8">
            Compliance & Security —{" "}
            <span className="gradient-text">Built for Healthcare From Day One</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🏥", label: "HIPAA-Secure Infrastructure" },
              { icon: "📊", label: "Audit-Friendly AI Decision Logs" },
              { icon: "✅", label: "ONC Certification In Progress" },
              { icon: "🔐", label: "AES-256 Multi-Layer Encryption" },
              { icon: "🛡️", label: "Zero-Trust Architecture" },
              { icon: "🤖", label: "Fully Explainable AI (No Black Box)" },
            ].map((c) => (
              <div key={c.label} className="bg-white rounded-xl border border-slate-200 shadow-card p-5 flex items-center gap-3 hover:border-medical-200 hover:shadow-card-hover transition-all">
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <span className="text-slate-700 text-sm font-medium">{c.label}</span>
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
            Ready to Make the <span className="text-teal-300">Switch?</span>
          </h2>
          <p className="text-blue-100 text-lg mb-8">Join 200+ practices that have already transformed their operations. Go live in under 7 days.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="px-10 py-4 rounded-xl text-base font-bold text-medical-900 bg-white hover:bg-medical-50 transition-colors shadow-btn">Get Started Free →</a>
            <a href={APP_URL} className="btn-outline-white px-10 py-4 rounded-xl text-base font-bold">Watch Demo</a>
          </div>
        </div>
      </section>
    </>
  );
}
