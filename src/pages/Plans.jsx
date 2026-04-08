import { useState } from "react";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const PLANS = [
  {
    name: "Starter",
    tagline: "For solo practitioners and small clinics",
    price: "Contact Us",
    highlight: false,
    icon: "🏥",
    cta: "Get Started",
  },
  {
    name: "Professional",
    tagline: "For growing specialty practices",
    price: "Contact Us",
    highlight: true,
    icon: "⚡",
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    tagline: "For large groups and health systems",
    price: "Custom",
    highlight: false,
    icon: "🏢",
    cta: "Contact Sales",
  },
];

const COMPARISON_TABLE = [
  { category: "Documentation", rows: [
    { feature: "Ambient Clinical Scribe", starter: true, pro: true, enterprise: true },
    { feature: "SOAP Note Generation", starter: true, pro: true, enterprise: true },
    { feature: "Specialty Note Templates", starter: "Basic", pro: "10+", enterprise: "Custom" },
    { feature: "Real-Time Note Review", starter: false, pro: true, enterprise: true },
  ]},
  { category: "Coding & Billing", rows: [
    { feature: "Basic ICD/CPT Coding", starter: true, pro: true, enterprise: true },
    { feature: "HCC & NCCI Edits", starter: false, pro: true, enterprise: true },
    { feature: "Autonomous Revenue Cycle", starter: false, pro: true, enterprise: true },
    { feature: "Real-Time Revenue Intelligence", starter: false, pro: true, enterprise: true },
    { feature: "Denial Risk Prediction", starter: false, pro: true, enterprise: true },
  ]},
  { category: "AI Agents", rows: [
    { feature: "Eligibility & Prior Auth Agent", starter: false, pro: true, enterprise: true },
    { feature: "Claims Integrity Agent", starter: false, pro: true, enterprise: true },
    { feature: "Scheduling Agent", starter: true, pro: true, enterprise: true },
    { feature: "Custom AI Agent Config", starter: false, pro: false, enterprise: true },
  ]},
  { category: "Infrastructure & Compliance", rows: [
    { feature: "HIPAA-Secure Infrastructure", starter: true, pro: true, enterprise: true },
    { feature: "Audit Logs & Explainable AI", starter: true, pro: true, enterprise: true },
    { feature: "FHIR API Access", starter: false, pro: false, enterprise: true },
    { feature: "On-Premise Deployment", starter: false, pro: false, enterprise: true },
    { feature: "Multi-Site & Multi-Specialty", starter: false, pro: false, enterprise: true },
    { feature: "99.9% Uptime SLA", starter: false, pro: true, enterprise: true },
  ]},
  { category: "Support", rows: [
    { feature: "Onboarding Training", starter: true, pro: true, enterprise: true },
    { feature: "Email & Chat Support", starter: true, pro: true, enterprise: true },
    { feature: "Priority Support", starter: false, pro: true, enterprise: true },
    { feature: "Dedicated Success Manager", starter: false, pro: false, enterprise: true },
    { feature: "Custom Integrations", starter: false, pro: false, enterprise: true },
  ]},
];

const FAQS = [
  { q: "How long does implementation take?", a: "Most practices go live in under 7 days. Our onboarding team handles all data migration, EHR configuration, and staff training." },
  { q: "Is Medaea HIPAA compliant?", a: "Yes — fully HIPAA-compliant with AES-256 encryption, audit logs, zero-trust architecture, and BAA agreements included with all plans." },
  { q: "Can I integrate with my existing systems?", a: "Absolutely. Medaea offers a FHIR-first API with pre-built connectors for major labs, pharmacies, payers, and billing systems." },
  { q: "What specialties are supported?", a: "We support 10+ specialties including orthopedics, dermatology, behavioral health, cardiology, and more — each with pre-built specialty templates." },
  { q: "Is there a free trial?", a: "Yes. We offer a guided pilot program for qualified practices. Contact our team to discuss your needs and set up a tailored evaluation." },
  { q: "How does Medaea compare to athenahealth or eClinicalWorks?", a: "Unlike traditional EMRs with AI bolted on, Medaea is built AI-native from the ground up. The result: faster deployment, deeper automation, and measurable ROI from day one." },
];

function CellValue({ value }) {
  if (value === true) return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
        <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
  if (value === false) return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-white/3 border border-white/8 flex items-center justify-center">
        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </div>
    </div>
  );
  return <div className="text-center text-cyan-300 text-xs font-semibold">{value}</div>;
}

function ROICalculator() {
  const [providers, setProviders] = useState(3);
  const [patientsPerDay, setPatientsPerDay] = useState(20);

  const hoursReclaimed = providers * 4 * 5 * 52;
  const denialReduction = Math.round(providers * patientsPerDay * 52 * 0.15 * 180 * 0.62);
  const revenueCapture = Math.round(providers * patientsPerDay * 52 * 250 * 0.35);
  const totalImpact = denialReduction + revenueCapture;

  return (
    <div className="card-glass gradient-border rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-xl">
          💰
        </div>
        <div>
          <h3 className="text-white font-extrabold text-xl">ROI Impact Calculator</h3>
          <p className="text-gray-500 text-sm">Estimate your practice's annual savings with Medaea</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-gray-400 text-sm font-medium mb-2">
            Number of Providers
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="1" max="20"
              value={providers}
              onChange={(e) => setProviders(Number(e.target.value))}
              className="flex-1 accent-cyan-500"
            />
            <span className="text-cyan-300 font-bold text-lg w-8 text-center">{providers}</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-400 text-sm font-medium mb-2">
            Patients Per Provider Per Day
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="5" max="40"
              value={patientsPerDay}
              onChange={(e) => setPatientsPerDay(Number(e.target.value))}
              className="flex-1 accent-cyan-500"
            />
            <span className="text-cyan-300 font-bold text-lg w-8 text-center">{patientsPerDay}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white/3 border border-white/8 p-5 text-center">
          <div className="text-2xl font-extrabold stat-shine mb-1">
            {hoursReclaimed.toLocaleString()}
          </div>
          <div className="text-gray-500 text-xs">Hours reclaimed / year</div>
        </div>
        <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 text-center">
          <div className="text-2xl font-extrabold stat-shine mb-1">
            ${denialReduction.toLocaleString()}
          </div>
          <div className="text-gray-500 text-xs">Denial reduction / year</div>
        </div>
        <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 text-center">
          <div className="text-3xl font-extrabold stat-shine mb-1">
            ${(totalImpact / 1000).toFixed(0)}K+
          </div>
          <div className="text-gray-400 text-xs font-semibold">Estimated annual impact</div>
        </div>
      </div>

      <div className="mt-5 p-3 rounded-xl bg-white/2 border border-white/5 text-xs text-gray-600 text-center">
        Estimates based on industry averages: 4 hrs/day documentation saved per provider, 62% denial reduction, 35% revenue capture increase.
      </div>
    </div>
  );
}

export default function Plans() {
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
          <span className="badge-teal mb-6 inline-block">Transparent Pricing</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Plans Built for Practices{" "}
            <span className="gradient-text">of Every Size</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible pricing designed to grow with you. Every plan includes HIPAA compliance, onboarding support, and our core AI platform.
          </p>
        </div>
      </section>

      {/* ── Plans Cards ── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-cyan-600/15 to-teal-600/5 border-2 border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.15)] scale-[1.02]"
                    : "card-dark gradient-border glow-card"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="gradient-btn px-5 py-1.5 rounded-full text-xs font-bold tracking-wide">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <div className="text-3xl mb-3">{plan.icon}</div>
                  <h3 className="text-white font-extrabold text-2xl mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-5">{plan.tagline}</p>
                  <div className={`text-3xl font-extrabold ${plan.highlight ? "stat-shine" : "text-gray-200"}`}>
                    {plan.price}
                  </div>
                  {plan.name !== "Enterprise" && (
                    <p className="text-gray-600 text-xs mt-1">Custom pricing based on practice size</p>
                  )}
                </div>

                <a
                  href={APP_URL}
                  className={`text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                    plan.highlight ? "gradient-btn" : "btn-outline"
                  }`}
                >
                  {plan.cta} →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-600 text-sm">
            All plans include HIPAA compliance, BAA agreement, and onboarding support.{" "}
            <a href={APP_URL} className="text-cyan-400 hover:text-cyan-300 transition-colors">Talk to our team →</a>
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-teal mb-4 inline-block">Full Comparison</span>
            <h2 className="text-4xl font-extrabold text-white">
              Compare <span className="gradient-text">Every Feature</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">See exactly what's included in each plan.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left py-4 px-6 text-gray-500 text-sm font-semibold w-1/2">Feature</th>
                  {PLANS.map((p) => (
                    <th key={p.name} className="py-4 px-4 text-center">
                      <div className={`text-sm font-bold ${p.highlight ? "text-cyan-300" : "text-gray-300"}`}>
                        {p.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((section) => (
                  <>
                    <tr key={section.category} className="border-b border-white/5">
                      <td colSpan={4} className="py-3 px-6">
                        <span className="badge-teal text-xs">{section.category}</span>
                      </td>
                    </tr>
                    {section.rows.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-white/5 hover:bg-white/2 transition-colors ${i % 2 === 0 ? "bg-white/1" : ""}`}
                      >
                        <td className="py-3.5 px-6 text-gray-300 text-sm">{row.feature}</td>
                        <td className="py-3.5 px-4"><CellValue value={row.starter} /></td>
                        <td className="py-3.5 px-4 bg-cyan-500/3"><CellValue value={row.pro} /></td>
                        <td className="py-3.5 px-4"><CellValue value={row.enterprise} /></td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge-teal mb-4 inline-block">ROI Calculator</span>
            <h2 className="text-4xl font-extrabold text-white">
              Calculate Your{" "}
              <span className="gradient-text">Practice's Impact</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Drag the sliders to see your estimated annual savings and revenue impact with Medaea.
            </p>
          </div>
          <ROICalculator />
          <div className="mt-8 text-center">
            <a href={APP_URL} className="gradient-btn inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold">
              Get Your Custom ROI Analysis →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-teal mb-4 inline-block">FAQ</span>
            <h2 className="text-3xl font-extrabold text-white">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card-dark gradient-border glow-card p-6 rounded-xl">
                <h4 className="text-white font-bold text-sm mb-3 flex items-start gap-2">
                  <span className="text-cyan-400 flex-shrink-0">Q:</span>
                  {faq.q}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 to-teal-600/6" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Not Sure Which Plan? <span className="gradient-text">Let's Talk.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Our team will assess your practice's needs and recommend the perfect solution.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="gradient-btn inline-block px-10 py-4 rounded-xl text-base font-bold">
              Schedule a Call →
            </a>
            <a href={APP_URL} className="btn-outline inline-block px-10 py-4 rounded-xl text-base">
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
