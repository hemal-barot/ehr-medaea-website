const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const STATS = [
  { value: "45%", label: "Reduced admin time" },
  { value: "62%", label: "Fewer denials" },
  { value: "40%", label: "Higher productivity" },
  { value: "30%", label: "Cost savings" },
];

const DIFFERENTIATORS = [
  "Unified EMR + Billing + AI Agents — no bolt-ons",
  "Real-time documentation + coding at point of care",
  "Human-in-loop AI for safety, transparency & compliance",
  "Rapid deployment — go live in under 7 days",
  "Measurable ROI: revenue lift, admin time saved, reduction in denials",
  'Built with People Before Profit in mind — we put clinicians and patients first',
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About us — the world's first truly{" "}
            <span className="gradient-text">AI-native EMR</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A unified clinical + revenue + administrative operating system — powered by intelligent AI agents
            working alongside your team in real-time.
          </p>
          <p className="text-gray-400 mt-4 italic">
            Epic + Robin/DeepScribe + RCM Engine + Compliance Copilot — in one system. Built for specialty practices,
            ambulatory clinics, and modern provider groups.
          </p>
          <a href={APP_URL} className="gradient-btn inline-block mt-8 px-8 py-3 rounded-xl text-base">
            Get Started
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center card-dark p-6 rounded-2xl">
              <div className="text-4xl font-extrabold gradient-text mb-2">{s.value}</div>
              <p className="text-gray-300 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical AI Engine */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Clinical AI Engine — <span className="gradient-text">Why Medaea Outpaces Legacy Solutions</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Unlike platforms that focus only on billing or only on records, Medaea unites them.
                Unlike legacy EMRs repurposed with add-ons, Medaea is built AI-native from the ground up.
              </p>
              <ul className="space-y-3">
                {DIFFERENTIATORS.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-dark glow-card p-8 rounded-2xl">
              <img
                src="https://www.medaea.ai/wp-content/uploads/2025/11/123.png"
                alt="Medaea AI Platform"
                className="w-full rounded-xl"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad bg-navy-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Our Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { name: "Mehul Makwana", role: "Co-Founder & CEO", initials: "MM" },
              { name: "Ami Agrawal", role: "Co-Founder & COO", initials: "AA" },
            ].map((f) => (
              <div key={f.name} className="card-dark glow-card p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full gradient-btn flex items-center justify-center text-3xl font-bold mb-4">
                  {f.initials}
                </div>
                <h3 className="text-white font-bold text-2xl">{f.name}</h3>
                <p className="text-blue-400 mt-1">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-4xl mx-auto space-y-12">
          {[
            {
              label: "Our Vision",
              text: "To build the most intelligent autonomous healthcare operating system where administrative burden disappears, documentation writes itself, and revenue flows accurately and instantly.",
            },
            {
              label: "Our Belief",
              text: "Healthcare should run intelligently in the background so clinicians can practice at the top of their license.",
            },
            {
              label: "Our Mission",
              text: "To empower every clinician with AI that handles the burden of documentation, billing, and compliance — freeing them to focus entirely on patient care.",
            },
          ].map((item) => (
            <div key={item.label} className="card-dark glow-card p-8 rounded-2xl">
              <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">{item.label}</p>
              <p className="text-gray-200 text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
