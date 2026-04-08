import { useState } from "react";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const PLANS = [
  {
    name: "Starter",
    tagline: "Solo & small practices getting started with AI",
    price: "$299",
    period: "per provider/month",
    annual: "$249/provider/month billed annually",
    highlight: false,
    icon: "🏥",
    color: "bg-slate-50 border-slate-200",
    btnClass: "btn-outline",
    badge: null,
    cta: "Start Free Trial",
    features: [
      { label: "Ambient Clinical Scribe", included: true },
      { label: "SOAP Note Generation", included: true },
      { label: "Basic ICD/CPT Coding", included: true },
      { label: "Patient Scheduling", included: true },
      { label: "HIPAA-Secure Infrastructure", included: true },
      { label: "Up to 2 providers", included: true },
      { label: "Email & chat support", included: true },
      { label: "Autonomous Revenue Cycle", included: false },
      { label: "Eligibility & Prior Auth Agent", included: false },
      { label: "Custom Specialty Templates", included: false },
      { label: "Priority Support & SLA", included: false },
    ],
  },
  {
    name: "Professional",
    tagline: "Growing specialty practices that want full AI automation",
    price: "$599",
    period: "per provider/month",
    annual: "$499/provider/month billed annually",
    highlight: true,
    icon: "⚡",
    color: "plan-featured",
    btnClass: "text-center px-5 py-3.5 rounded-xl font-bold text-sm bg-white text-medical-800 hover:bg-medical-50 transition-colors shadow-btn-hover inline-block",
    badge: "⭐ Most Popular",
    cta: "Start Free Trial",
    features: [
      { label: "Everything in Starter", included: true, bold: true },
      { label: "Autonomous Revenue Cycle", included: true },
      { label: "Real-Time Revenue Intelligence", included: true },
      { label: "Eligibility & Prior Auth Agent", included: true },
      { label: "Claims Integrity Agent", included: true },
      { label: "10+ Specialty Templates", included: true },
      { label: "Up to 15 providers", included: true },
      { label: "Priority support & 99.9% SLA", included: true },
      { label: "Custom reporting & dashboards", included: true },
      { label: "API integrations (labs, pharmacy)", included: true },
      { label: "On-premise deployment", included: false },
    ],
  },
  {
    name: "Enterprise",
    tagline: "Large groups, health systems, and custom deployments",
    price: "Custom",
    period: "tailored to your organization",
    annual: "Multi-year contract options available",
    highlight: false,
    icon: "🏢",
    color: "bg-slate-900 border-slate-700",
    btnClass: "btn-secondary",
    badge: null,
    cta: "Contact Sales",
    textColor: "text-white",
    features: [
      { label: "Everything in Professional", included: true, bold: true },
      { label: "Unlimited providers", included: true },
      { label: "Custom AI Agent Configuration", included: true },
      { label: "Multi-site & Multi-specialty", included: true },
      { label: "FHIR API & custom integrations", included: true },
      { label: "On-premise deployment option", included: true },
      { label: "Dedicated success manager", included: true },
      { label: "99.99% uptime SLA", included: true },
      { label: "Custom BAA & data governance", included: true },
      { label: "Staff training & credentialing", included: true },
      { label: "White-label option available", included: true },
    ],
  },
];

const COMPARISON_TABLE = [
  { category: "Clinical Documentation", rows: [
    { feature: "Ambient AI Clinical Scribe", starter: true, pro: true, enterprise: true },
    { feature: "SOAP Note Generation", starter: true, pro: true, enterprise: true },
    { feature: "Real-Time Note Review", starter: false, pro: true, enterprise: true },
    { feature: "Specialty Note Templates", starter: "Basic", pro: "10+", enterprise: "Custom" },
    { feature: "Dictation & Voice Commands", starter: true, pro: true, enterprise: true },
    { feature: "Problem List Auto-Update", starter: false, pro: true, enterprise: true },
  ]},
  { category: "Coding & Billing", rows: [
    { feature: "ICD-10 / CPT Auto-Coding", starter: true, pro: true, enterprise: true },
    { feature: "HCC Capture (Value-Based Care)", starter: false, pro: true, enterprise: true },
    { feature: "NCCI Edit Compliance", starter: false, pro: true, enterprise: true },
    { feature: "Autonomous Revenue Cycle", starter: false, pro: true, enterprise: true },
    { feature: "Real-Time Revenue Intelligence", starter: false, pro: true, enterprise: true },
    { feature: "Denial Risk Prediction", starter: false, pro: true, enterprise: true },
    { feature: "Payment Posting Automation", starter: false, pro: true, enterprise: true },
  ]},
  { category: "AI Agents", rows: [
    { feature: "Eligibility & Prior Auth Agent", starter: false, pro: true, enterprise: true },
    { feature: "Claims Integrity Agent", starter: false, pro: true, enterprise: true },
    { feature: "Scheduling Agent", starter: true, pro: true, enterprise: true },
    { feature: "Clinical Scribe Agent", starter: true, pro: true, enterprise: true },
    { feature: "Custom AI Agent Config", starter: false, pro: false, enterprise: true },
  ]},
  { category: "Security & Compliance", rows: [
    { feature: "HIPAA-Secure Infrastructure", starter: true, pro: true, enterprise: true },
    { feature: "AES-256 Encryption", starter: true, pro: true, enterprise: true },
    { feature: "Audit Logs & Explainable AI", starter: true, pro: true, enterprise: true },
    { feature: "SOC2 (In Progress)", starter: true, pro: true, enterprise: true },
    { feature: "FHIR API Access", starter: false, pro: "Limited", enterprise: true },
    { feature: "On-Premise Deployment", starter: false, pro: false, enterprise: true },
  ]},
  { category: "Support & Scale", rows: [
    { feature: "Max Providers", starter: "2", pro: "15", enterprise: "Unlimited" },
    { feature: "Onboarding Training", starter: true, pro: true, enterprise: true },
    { feature: "Email & Chat Support", starter: true, pro: true, enterprise: true },
    { feature: "Priority Support & SLA", starter: false, pro: true, enterprise: true },
    { feature: "Dedicated Success Manager", starter: false, pro: false, enterprise: true },
    { feature: "99.9%+ Uptime SLA", starter: false, pro: true, enterprise: "99.99%" },
  ]},
];

function CellValue({ value, dark }) {
  const textMuted = dark ? "text-slate-400" : "text-slate-400";
  if (value === true) return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
        <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
        </svg>
      </div>
    </div>
  );
  if (value === false) return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
        <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"/>
        </svg>
      </div>
    </div>
  );
  return <div className="text-center text-medical-700 text-xs font-semibold">{value}</div>;
}

function ROICalculator() {
  const [providers, setProviders] = useState(3);
  const [patients, setPatients]   = useState(20);

  const hoursReclaimed = providers * 4 * 5 * 52;
  const denialSavings  = Math.round(providers * patients * 52 * 0.15 * 185 * 0.62);
  const revenueCapture = Math.round(providers * patients * 52 * 260 * 0.35);
  const totalAnnual    = denialSavings + revenueCapture;
  const roi            = Math.round((totalAnnual / (providers * 599 * 12)) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-card-lg p-8 border border-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-medical-600 to-teal-600 flex items-center justify-center text-2xl shadow-blue-glow">💰</div>
        <div>
          <h3 className="text-slate-800 font-extrabold text-xl">Practice ROI Calculator</h3>
          <p className="text-slate-500 text-sm">See your estimated annual impact with Medaea</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-slate-700 text-sm font-semibold">Number of Providers</label>
            <span className="text-medical-700 font-extrabold text-lg">{providers}</span>
          </div>
          <input type="range" min="1" max="25" value={providers} onChange={(e) => setProviders(+e.target.value)}
            className="w-full h-2 rounded-full accent-medical-600 cursor-pointer" />
          <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1</span><span>25</span></div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-slate-700 text-sm font-semibold">Patients Per Provider / Day</label>
            <span className="text-teal-700 font-extrabold text-lg">{patients}</span>
          </div>
          <input type="range" min="5" max="50" value={patients} onChange={(e) => setPatients(+e.target.value)}
            className="w-full h-2 rounded-full accent-teal-600 cursor-pointer" />
          <div className="flex justify-between text-xs text-slate-400 mt-1"><span>5</span><span>50</span></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Hours Reclaimed/Year", value: hoursReclaimed.toLocaleString(), unit: "hrs", color: "bg-blue-50 border-blue-100 text-blue-700" },
          { label: "Denial Savings", value: `$${(denialSavings/1000).toFixed(0)}K`, unit: "/yr", color: "bg-teal-50 border-teal-100 text-teal-700" },
          { label: "Revenue Capture", value: `$${(revenueCapture/1000).toFixed(0)}K`, unit: "/yr", color: "bg-violet-50 border-violet-100 text-violet-700" },
          { label: "Total Annual Impact", value: `$${(totalAnnual/1000).toFixed(0)}K`, unit: "+", color: "bg-emerald-50 border-emerald-100 text-emerald-700" },
        ].map((s) => (
          <div key={s.label} className={`${s.color} rounded-xl border p-4 text-center`}>
            <div className="text-2xl font-extrabold mb-0.5">{s.value}<span className="text-sm">{s.unit}</span></div>
            <div className="text-xs opacity-80">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-medical-50 border border-medical-200 rounded-xl px-5 py-3">
        <div>
          <p className="text-medical-800 font-bold text-sm">Estimated ROI with Medaea Professional</p>
          <p className="text-medical-600 text-xs">Based on {providers} providers at $599/provider/month</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold stat-shine">{roi}%</div>
          <div className="text-medical-600 text-xs">Annualized ROI</div>
        </div>
      </div>
      <p className="mt-3 text-slate-400 text-xs text-center">
        Estimates based on industry benchmarks: 4 hrs/day saved, 62% denial reduction, 35% revenue capture improvement.
      </p>
    </div>
  );
}

const FAQS = [
  { q: "Is there a free trial?", a: "Yes — all plans include a 14-day free trial with full access to the platform and dedicated onboarding support. No credit card required." },
  { q: "How does pricing work for multi-provider practices?", a: "Pricing is per active provider per month. For 5+ providers, contact us for volume discounts. Annual billing saves you 17% compared to monthly." },
  { q: "What's included in onboarding?", a: "Every plan includes dedicated onboarding with data migration, EHR configuration, staff training, and a dedicated go-live specialist. Most practices are live in under 7 days." },
  { q: "Is Medaea HIPAA compliant?", a: "Yes — fully HIPAA-compliant with AES-256 encryption, zero-trust architecture, complete audit logs, and BAA agreements included with every plan." },
  { q: "Can I switch plans anytime?", a: "Yes. You can upgrade, downgrade, or cancel at any time with no penalties. We offer month-to-month and annual billing options." },
  { q: "How does Medaea integrate with existing systems?", a: "We offer a FHIR-first API with pre-built connectors for major labs, pharmacies, payers, and imaging centers. Professional and Enterprise plans include advanced integrations." },
];

export default function Plans() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 hero-bg overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-primary mb-5 inline-block">Transparent Pricing</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
            Simple, Transparent Pricing<br/>
            <span className="gradient-text">Built for Healthcare</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">
            No hidden fees. No vendor lock-in. No surprise bills. Every plan includes HIPAA compliance, BAA agreement, and onboarding support.
          </p>
          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full p-1 shadow-card">
            <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!annual ? "bg-medical-700 text-white shadow-btn" : "text-slate-600 hover:text-slate-800"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)}  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "bg-medical-700 text-white shadow-btn" : "text-slate-600 hover:text-slate-800"}`}>
              Annual
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Plan Cards ── */}
      <section className="pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`relative rounded-3xl p-8 flex flex-col border ${plan.highlight ? plan.color : plan.color} ${plan.highlight ? "shadow-[0_20px_60px_rgba(29,78,216,0.25)]" : "shadow-card-md bg-white"}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 px-5 py-1.5 rounded-full text-xs font-extrabold shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <h3 className={`font-extrabold text-2xl mb-1 ${plan.highlight ? "text-white" : plan.name === "Enterprise" ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                  <p className={`text-sm mb-5 ${plan.highlight ? "text-blue-100" : plan.name === "Enterprise" ? "text-slate-300" : "text-slate-500"}`}>{plan.tagline}</p>

                  <div className="mb-1">
                    <span className={`text-5xl font-extrabold ${plan.highlight ? "text-white" : plan.name === "Enterprise" ? "text-white" : "text-slate-900"}`}>
                      {plan.price === "Custom" ? "Custom" : annual ? plan.price.replace("$", "$").replace("99", "49").replace("99", "49") + "" : plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className={`text-sm ml-1 ${plan.highlight ? "text-blue-200" : plan.name === "Enterprise" ? "text-slate-400" : "text-slate-500"}`}>{plan.period}</span>
                    )}
                  </div>
                  <p className={`text-xs ${plan.highlight ? "text-blue-200" : plan.name === "Enterprise" ? "text-slate-400" : "text-slate-400"}`}>
                    {annual && plan.price !== "Custom" ? "✓ Annual discount applied" : plan.annual}
                  </p>
                </div>

                <a
                  href={APP_URL}
                  className={`text-center py-3.5 rounded-xl font-bold text-sm mb-6 inline-block transition-all ${
                    plan.highlight
                      ? "bg-white text-medical-800 hover:bg-medical-50 shadow-btn"
                      : plan.name === "Enterprise"
                      ? "bg-teal-600 text-white hover:bg-teal-500 shadow-teal-glow"
                      : "btn-primary"
                  }`}
                >
                  {plan.cta} →
                </a>

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-2.5">
                      {f.included ? (
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-white/20" : "bg-emerald-100"}`}>
                          <svg className={`w-3 h-3 ${plan.highlight ? "text-white" : "text-emerald-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"/>
                          </svg>
                        </div>
                      )}
                      <span className={`text-sm ${f.bold ? "font-bold" : ""} ${
                        plan.highlight ? "text-white" : plan.name === "Enterprise" ? "text-slate-200" : f.included ? "text-slate-700" : "text-slate-400"
                      }`}>{f.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-slate-500 text-sm">
            All plans include a 14-day free trial · No credit card required · HIPAA BAA included{" "}
            <a href={APP_URL} className="text-medical-700 font-semibold hover:text-medical-600">→ Talk to our team</a>
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-primary mb-4 inline-block">Full Comparison</span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Compare Every <span className="gradient-text">Feature</span>
            </h2>
            <p className="text-slate-500 mt-2">See exactly what's included in each plan, down to every capability.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-card">
            <table className="w-full min-w-[640px]">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-6 text-slate-500 text-sm font-semibold w-1/2">Feature</th>
                  {PLANS.map((p) => (
                    <th key={p.name} className="py-4 px-4 text-center">
                      <div className={`text-sm font-extrabold ${p.highlight ? "text-medical-700" : "text-slate-700"}`}>{p.name}</div>
                      <div className="text-xs text-slate-400 font-normal mt-0.5">{p.price === "Custom" ? "Custom" : p.price + "/provider"}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              {COMPARISON_TABLE.map((section) => (
                <tbody key={section.category}>
                  <tr className="border-b border-slate-100">
                    <td colSpan={4} className="py-3 px-6 bg-slate-50">
                      <span className="badge-primary text-xs">{section.category}</span>
                    </td>
                  </tr>
                  {section.rows.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${i % 2 === 0 ? "" : "bg-slate-50/30"}`}>
                      <td className="py-3.5 px-6 text-slate-700 text-sm">{row.feature}</td>
                      <td className="py-3.5 px-4"><CellValue value={row.starter} /></td>
                      <td className="py-3.5 px-4 bg-medical-50/30"><CellValue value={row.pro} /></td>
                      <td className="py-3.5 px-4"><CellValue value={row.enterprise} /></td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <section className="section-pad section-blue-top">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge-teal mb-4 inline-block">ROI Calculator</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3">
              Calculate Your <span className="gradient-text">Practice's Return</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Adjust the sliders to see your estimated annual savings, revenue impact, and ROI with Medaea.
            </p>
          </div>
          <ROICalculator />
          <div className="mt-8 text-center">
            <a href={APP_URL} className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold">
              Get Your Custom ROI Analysis →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-primary mb-4 inline-block">FAQ</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-slate-200 shadow-card p-6 hover:border-medical-200 hover:shadow-card-hover transition-all">
                <h4 className="text-slate-800 font-bold text-sm mb-3 flex items-start gap-2">
                  <span className="text-medical-600 font-extrabold text-base">Q</span>
                  {faq.q}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed pl-5">{faq.a}</p>
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
            Start Your 14-Day <span className="text-teal-300">Free Trial Today</span>
          </h2>
          <p className="text-blue-100 text-lg mb-8">No credit card required. Full access. Dedicated onboarding. Cancel anytime.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="px-10 py-4 rounded-xl text-base font-bold text-medical-900 bg-white hover:bg-medical-50 transition-colors shadow-btn">Start Free Trial →</a>
            <a href={APP_URL} className="btn-outline-white px-10 py-4 rounded-xl text-base font-bold">Talk to Sales</a>
          </div>
          <p className="mt-5 text-blue-200 text-sm">14-day free trial · HIPAA compliant · No long-term contracts</p>
        </div>
      </section>
    </>
  );
}
