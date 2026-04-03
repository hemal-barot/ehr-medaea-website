const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const COMPARISONS = [
  { problem: "Documentation fatigue", solution: "Ambient automation + AI scribing" },
  { problem: "Denied claims & delays", solution: "Pre-claim intelligence & code accuracy" },
  { problem: "Limited legacy EMR flexibility", solution: "Modular, interoperable EMR foundation" },
  { problem: "High staffing burden", solution: "30–50% operational workload reduction" },
];

const TRUST_ITEMS = [
  { icon: "👤", text: "Human-in-the-loop review at key clinical and billing steps" },
  { icon: "📋", text: "Audit logs, explainable AI, full control retained by provider" },
  { icon: "🔒", text: "HIPAA-secure, SOC2-compliant, encryption end-to-end" },
  { icon: "🛡️", text: "Ethical governance: no vendor lock-in, no hidden algorithms" },
];

const COMPLIANCE = [
  { icon: "🏥", label: "HIPAA-secure infrastructure" },
  { icon: "📊", label: "Audit-friendly AI logs" },
  { icon: "✅", label: "ONC Certification in progress" },
  { icon: "🔐", label: "Multi-layer encryption" },
  { icon: "🛡️", label: "Zero-trust architecture" },
  { icon: "🤖", label: "AI accuracy without black-box behavior" },
];

const OUTCOMES = [
  { value: "95%+", label: "First-pass clean claim rate", icon: "🎯" },
  { value: "30–40%", label: "Increase in revenue capture", icon: "📈" },
  { value: "45%", label: "Reduction in admin burden", icon: "⏱️" },
  { value: "62%", label: "Fewer denials with AI coding", icon: "❌" },
  { value: "< 7 days", label: "Average go-live time", icon: "🚀" },
  { value: "200+", label: "Practices already on Medaea", icon: "🏥" },
];

export default function WhyUs() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Why Practices Switch to{" "}
            <span className="gradient-text">Medaea</span>
          </h1>
          <p className="text-xl text-gray-300">
            Real outcomes. Responsible AI. Fast time to value.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">The Old Way vs. <span className="gradient-text">Medaea Way</span></h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="text-center text-sm font-semibold text-red-400 uppercase tracking-widest">Traditional EMR Pain</div>
              <div className="text-center text-sm font-semibold text-green-400 uppercase tracking-widest">Medaea Solution</div>
            </div>
            {COMPARISONS.map((c) => (
              <div key={c.problem} className="grid grid-cols-2 gap-4">
                <div className="card-dark p-4 rounded-xl border border-red-500/20 flex items-center gap-3">
                  <span className="text-red-400 text-lg">✗</span>
                  <span className="text-gray-300 text-sm">{c.problem}</span>
                </div>
                <div className="card-dark p-4 rounded-xl border border-green-500/20 flex items-center gap-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-gray-300 text-sm">{c.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-pad bg-navy-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Outcomes & <span className="gradient-text">Proof</span></h2>
            <p className="text-gray-300 mt-4">Real numbers from real practices.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {OUTCOMES.map((o) => (
              <div key={o.label} className="card-dark glow-card p-6 rounded-2xl text-center">
                <div className="text-3xl mb-2">{o.icon}</div>
                <div className="text-2xl font-extrabold gradient-text mb-1">{o.value}</div>
                <p className="text-gray-400 text-xs">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Trust & Ethics — <span className="gradient-text">Responsible AI, Trusted Care</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              We believe that AI in healthcare must be transparent, auditable, and always in service of human care.
              Our "People Before Profit" motto drives our design, delivery and support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRUST_ITEMS.map((t) => (
              <div key={t.text} className="card-dark glow-card p-6 rounded-xl flex items-start gap-4">
                <span className="text-2xl">{t.icon}</span>
                <p className="text-gray-300">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-pad bg-navy-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Compliance & Transparency — <span className="gradient-text">Built for Healthcare From Day One</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {COMPLIANCE.map((c) => (
              <div key={c.label} className="card-dark p-5 rounded-xl flex items-center gap-3">
                <span className="text-2xl">{c.icon}</span>
                <span className="text-gray-300 text-sm font-medium">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make the Switch?</h2>
          <p className="text-blue-200 mb-8">
            Join 200+ practices that have already transformed their operations with Medaea.
          </p>
          <a href={APP_URL} className="bg-white text-navy-900 font-bold px-10 py-4 rounded-xl text-base hover:bg-blue-50 transition-colors">
            Get Started →
          </a>
        </div>
      </section>
    </>
  );
}
