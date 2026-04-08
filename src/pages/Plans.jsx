const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const PLANS = [
  {
    name: "Starter",
    tagline: "For solo practitioners and small clinics",
    price: "Contact Us",
    highlight: false,
    icon: "🏥",
    features: [
      "Ambient Clinical Scribe",
      "SOAP Note Generation",
      "Basic ICD/CPT Coding",
      "Patient Scheduling",
      "HIPAA-secure infrastructure",
      "Email & chat support",
      "Onboarding training",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    tagline: "For growing specialty practices",
    price: "Contact Us",
    highlight: true,
    icon: "⚡",
    features: [
      "Everything in Starter",
      "Autonomous Revenue Cycle",
      "Real-Time Revenue Intelligence",
      "Eligibility & Prior Auth Agent",
      "Claims Integrity Agent",
      "10+ Specialty Templates",
      "Priority support & SLA",
      "Custom reporting",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    tagline: "For large groups and health systems",
    price: "Custom",
    highlight: false,
    icon: "🏢",
    features: [
      "Everything in Professional",
      "Custom AI Agent Configuration",
      "Multi-site & Multi-specialty",
      "FHIR API Access",
      "Dedicated success manager",
      "99.9% uptime SLA",
      "On-premise deployment",
      "Custom integrations",
    ],
    cta: "Contact Sales",
  },
];

const ROI_ITEMS = [
  { icon: "⏱️", metric: "4+ hrs/day", desc: "Reclaimed per clinician through AI documentation" },
  { icon: "💰", metric: "30–40%", desc: "Revenue increase through autonomous RCM" },
  { icon: "📉", metric: "62%", desc: "Reduction in claim denials with AI coding" },
  { icon: "🚀", metric: "< 7 days", desc: "Average go-live time with full onboarding support" },
];

const FAQS = [
  { q: "How long does implementation take?", a: "Most practices go live in under 7 days. Our onboarding team handles all data migration, EHR configuration, and staff training." },
  { q: "Is Medaea HIPAA compliant?", a: "Yes — fully HIPAA-compliant with AES-256 encryption, audit logs, zero-trust architecture, and BAA agreements included with all plans." },
  { q: "Can I integrate with my existing systems?", a: "Absolutely. Medaea offers a FHIR-first API with pre-built connectors for major labs, pharmacies, payers, and billing systems." },
  { q: "What specialties are supported?", a: "We support 10+ specialties including orthopedics, dermatology, behavioral health, cardiology, and more — each with pre-built specialty templates." },
  { q: "Is there a free trial?", a: "Yes. We offer a guided pilot program for qualified practices. Contact our team to discuss your needs and set up a tailored evaluation." },
  { q: "How does Medaea compare to athenahealth or eClinicalWorks?", a: "Unlike traditional EMRs with AI bolted on, Medaea is built AI-native from the ground up. The result: faster deployment, deeper automation, and measurable ROI from day one." },
];

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

      {/* ── Plans Grid ── */}
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

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_URL}
                  className={`text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                    plan.highlight
                      ? "gradient-btn"
                      : "btn-outline"
                  }`}
                >
                  {plan.cta} →
                </a>
              </div>
            ))}
          </div>

          {/* All plans note */}
          <div className="mt-10 text-center text-gray-600 text-sm">
            All plans include HIPAA compliance, BAA agreement, onboarding support, and access to our core AI platform.{" "}
            <a href={APP_URL} className="text-cyan-400 hover:text-cyan-300 transition-colors">Talk to our team →</a>
          </div>
        </div>
      </section>

      {/* ── ROI Impact ── */}
      <section className="section-pad bg-navy-900">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Measurable ROI</span>
            <h2 className="text-4xl font-extrabold text-white">
              Real Results,{" "}
              <span className="gradient-text">Measurable from Month One</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROI_ITEMS.map((r) => (
              <div key={r.metric} className="card-dark gradient-border glow-card p-8 rounded-2xl text-center">
                <div className="text-4xl mb-4">{r.icon}</div>
                <div className="text-3xl font-extrabold stat-shine mb-2">{r.metric}</div>
                <p className="text-gray-400 text-sm leading-snug">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
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
      <section className="section-pad relative overflow-hidden bg-navy-900">
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
