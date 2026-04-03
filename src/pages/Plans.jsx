const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const PLANS = [
  {
    name: "Starter",
    tagline: "For solo practitioners and small clinics",
    price: "Contact Us",
    highlight: false,
    features: [
      "Ambient Clinical Scribe",
      "SOAP Note Generation",
      "Basic ICD/CPT Coding",
      "Patient Scheduling",
      "HIPAA-secure infrastructure",
      "Email support",
    ],
  },
  {
    name: "Professional",
    tagline: "For growing specialty practices",
    price: "Contact Us",
    highlight: true,
    features: [
      "Everything in Starter",
      "Autonomous Revenue Cycle",
      "Real-Time Revenue Intelligence",
      "Eligibility & Prior Auth Agent",
      "Claims Integrity Agent",
      "10+ Specialty Templates",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For large groups and health systems",
    price: "Custom",
    highlight: false,
    features: [
      "Everything in Professional",
      "Custom AI Agent Configuration",
      "Multi-site & Multi-specialty",
      "FHIR API Access",
      "Dedicated success manager",
      "SLA guarantees",
      "On-premise deployment option",
    ],
  },
];

export default function Plans() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Building the Future of Healthcare —{" "}
            <span className="gradient-text">Explore Our Plans</span>
          </h1>
          <p className="text-xl text-gray-300">
            Flexible pricing designed for practices of every size. All plans include HIPAA compliance, onboarding support, and our core AI platform.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 relative"
                    : "card-dark glow-card"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="gradient-btn px-4 py-1 rounded-full text-xs font-semibold">Most Popular</span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-white font-bold text-2xl mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.tagline}</p>
                  <div className="text-3xl font-extrabold gradient-text">{plan.price}</div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_URL}
                  className={`text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.highlight
                      ? "gradient-btn"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </a>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: "How long does implementation take?", a: "Most practices go live in under 7 days. Our onboarding team handles all data migration and staff training." },
                { q: "Is Medaea HIPAA compliant?", a: "Yes. Medaea is fully HIPAA-compliant with end-to-end encryption, audit logs, and BAA agreements for all plans." },
                { q: "Can I integrate with my existing systems?", a: "Yes. Medaea offers a FHIR-first API and pre-built integrations with major labs, pharmacies, and payers." },
                { q: "What specialties are supported?", a: "We support 10+ specialties including orthopedics, dermatology, behavioral health, cardiology, and more with pre-built templates." },
              ].map((faq) => (
                <div key={faq.q} className="card-dark p-6 rounded-xl">
                  <h4 className="text-white font-semibold mb-2">{faq.q}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-navy-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which plan is right?</h2>
          <p className="text-gray-300 mb-8">Talk to our team — we'll help you find the perfect fit for your practice.</p>
          <a href={APP_URL} className="gradient-btn inline-block px-10 py-4 rounded-xl text-base">
            Schedule a Call →
          </a>
        </div>
      </section>
    </>
  );
}
