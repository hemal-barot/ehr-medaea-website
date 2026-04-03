import { Link } from "react-router-dom";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

const PARTNERS = [
  { name: "Butterfly", src: "https://www.medaea.ai/wp-content/uploads/2025/11/65578940f279ba96fa53d0a1_butterfly.svg" },
  { name: "Keplr", src: "https://www.medaea.ai/wp-content/uploads/2025/11/65578870a6700c33ae717fc9_keplr-logo-white-bg-1.svg" },
  { name: "BHW", src: "https://www.medaea.ai/wp-content/uploads/2025/11/655789cb06fc48c4c9712032_bhw.svg" },
  { name: "MEI", src: "https://www.medaea.ai/wp-content/uploads/2025/11/65565de7116a69645b8c57bb_MEI-Logo-1.svg" },
  { name: "Easterseals", src: "https://www.medaea.ai/wp-content/uploads/2025/11/65565c03cd0fa927524c5adc_easterseals-1.svg" },
  { name: "Proliance", src: "https://www.medaea.ai/wp-content/uploads/2025/11/65564e9a6b02ff7139375eec_proliance.svg" },
  { name: "EliteDNA", src: "https://www.medaea.ai/wp-content/uploads/2025/11/678ac2a9175b8a9b23003250_eliteDNA.svg" },
];

const PROBLEMS = [
  { icon: "📋", title: "Hours of manual documentation and charting", desc: "Clinicians spend 49% of their workday on the EHR — 4+ hours per day on documentation, coding, and billing tasks." },
  { icon: "❌", title: "High denial rates and revenue leakage", desc: "Errors and delays in coding and claims lead to avoidable financial loss and delayed reimbursements." },
  { icon: "🔗", title: "Siloed EMRs, billing systems, claim engines", desc: "Disconnected systems force teams to jump between platforms, losing efficiency and creating data gaps." },
  { icon: "⏰", title: "Administrative overhead stealing focus from care", desc: "Routine clerical tasks drain clinical time and reduce quality of patient care and outcomes." },
];

const SOLUTIONS = [
  {
    title: "Real-time Clinical Documentation",
    desc: "As the patient encounter happens, our AI scribe listens, understands specialty terminology, creates structured notes and suggests ICD/CPT codes — clinician reviews, signs, done.",
    img: "https://www.medaea.ai/wp-content/uploads/2025/11/Real-time-Clinical-Documentation.jpg",
  },
  {
    title: "Autonomous Revenue Cycle",
    desc: "From eligibility checks to claims submission, coding validation to denial prevention — our AI agents automate the entire revenue cycle while you stay in control of decisions.",
    img: "https://www.medaea.ai/wp-content/uploads/2025/11/Autonomous-Revenue-Cycle.jpg",
  },
  {
    title: "Intelligent Workflows for Specialty Practices",
    desc: "Every specialty has unique workflow. Medaea supports orthopedics, dermatology, behavioral health, ambulatory surgery and more with tailored templates, clinical agents, and built-in compliance guardrails.",
    img: "https://www.medaea.ai/wp-content/uploads/2025/11/Intelligent-Workflows-for-Specialty-Practices.jpg",
  },
];

const PROBLEMS_DETAIL = [
  { title: "Lost Revenue from Coding Errors", href: "/lost-revenue-from-coding-errors" },
  { title: "Delayed Reimbursements or Denials", href: "/delayed-reimbursements-or-denials" },
  { title: "Increased Burnout & Less Patient Time", href: "/increased-burnout-less-patient-time" },
  { title: "Fragmented Workflows Across Systems", href: "/fragmented-workflows-across-systems" },
  { title: "Administrative Heavy Staffing Costs", href: "/administrative-heavy-staffing-costs" },
];

const AGENTS = [
  { name: "Clinical Scribe Agent", desc: "Ambient documentation, note creation, medical context understanding", icon: "🎙️" },
  { name: "Billing & Coding Agent", desc: "ICD/CPT/HCC coding, NCCI edits, compliance guardrails", icon: "💰" },
  { name: "Eligibility Agent", desc: "Insurance + authorization validation before visits", icon: "✅" },
  { name: "Claims Integrity Agent", desc: "Scrubbing, denial prediction, payer rules automation", icon: "🛡️" },
  { name: "Scheduling Agent", desc: "Follow-up detection, calendar integration, patient reminders", icon: "📅" },
];

const METRICS = [
  { value: "95%+", label: "First-pass clean claim rate" },
  { value: "30–40%", label: "Increase in revenue capture" },
  { value: "45%", label: "Reduction in admin burden for providers" },
  { value: "62%", label: "Fewer denials with real-time coding intelligence" },
];

const TESTIMONIALS = [
  {
    quote: "Since switching to Medaea, our clinicians regained 2 hours per day and our revenue increased significantly.",
    author: "Practice Administrator",
    role: "Multi-specialty clinic",
  },
  {
    quote: "The AI scribe alone paid for the entire system in the first month. We've never looked back.",
    author: "Dr. K. Thompson",
    role: "Behavioral Health Practice",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Join 200+ practices already saving time and increasing revenue</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              AI-Powered{" "}
              <span className="gradient-text">EMR Software</span>
              {" "}That Gives You{" "}
              <span className="gradient-text">10+ Hours</span>
              {" "}Back Every Week
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Medaea is the intelligent electronic health records system built for modern medical practices.
              Our AI medical scribe handles documentation while you focus on patients.
              Automated billing captures every dollar.{" "}
              <span className="text-white font-medium">HIPAA-compliant and ONC-certified.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={APP_URL} className="gradient-btn px-8 py-4 text-base rounded-xl inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z"/></svg>
                Calculate Your Savings
              </a>
              <a href={APP_URL} className="px-8 py-4 text-base rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-200 inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 512"><path d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"/></svg>
                Watch 2-Min Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners / Featured In ── */}
      <section className="py-12 border-y border-white/10 bg-navy-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-widest mb-8">As Featured In / Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {PARTNERS.map((p) => (
              <img
                key={p.name}
                src={p.src}
                alt={p.name}
                className="h-8 md:h-10 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── About Banner ── */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Medaea.ai — <span className="gradient-text">Autonomous Healthcare Operating System</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Built for modern medical practices, Medaea.ai fuses ambient clinical documentation,
              autonomous billing workflows, and high-integrity AI intelligence into one unified platform
              — so providers spend more time with patients and less time with paperwork.
            </p>
            <p className="text-blue-400 font-medium text-lg mt-4 italic">
              "AI that cares so clinicians can care."
            </p>
            <a href={APP_URL} className="gradient-btn inline-block mt-8 px-8 py-3 rounded-xl text-base">
              Request Demo
            </a>
          </div>

          {/* Platform image */}
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://www.medaea.ai/wp-content/uploads/2025/11/platform-4-1-1.jpg"
              alt="Medaea Platform"
              className="w-full object-cover"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="section-pad bg-navy-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Physicians Are Drowning in <span className="gradient-text">Paperwork</span>, Not Patients
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The average physician spends 49% of their workday on the EHR (JAMA, 2020) — that's 4+ hours per day
              on documentation, coding, and billing tasks. This isn't what you went to medical school for.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="card-dark glow-card p-6 rounded-2xl hover:bg-navy-700/50 transition-all">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 font-medium uppercase tracking-widest text-sm mb-3">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Only EMR Built from Scratch with <span className="gradient-text">AI at Its Core</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              We built a platform that treats documentation, billing, and workflow automation as part of one seamless experience.
            </p>
          </div>

          <div className="space-y-16">
            {SOLUTIONS.map((s, i) => (
              <div key={s.title} className={`flex flex-col lg:flex-row items-center gap-10 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{s.desc}</p>
                  <a href={APP_URL} className="gradient-btn inline-block mt-6 px-6 py-3 rounded-lg text-sm">
                    Learn More →
                  </a>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Solve ── */}
      <section className="section-pad bg-navy-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-medium uppercase tracking-widest text-sm mb-3">What We Solve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Broken Reality of Today's EMRs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROBLEMS_DETAIL.map((p) => (
              <div key={p.title} className="card-dark p-5 rounded-xl flex items-center gap-3 hover:bg-navy-700/50 transition-all">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm font-medium">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Agents ── */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Autonomous Healthcare Agents</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Intelligent agents working in the background so your team can focus on what matters — patient care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {AGENTS.map((a) => (
              <div key={a.name} className="card-dark glow-card p-6 rounded-2xl text-center hover:bg-navy-700/50 transition-all">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{a.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #1a1f3d 0%, #0f1629 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Impact Metrics That Redefine <span className="gradient-text">Healthcare Efficiency</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center p-8 card-dark glow-card rounded-2xl">
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-3">{m.value}</div>
                <p className="text-gray-300 text-sm leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-pad bg-navy-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">What Practices Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="card-dark glow-card p-8 rounded-2xl">
                <div className="text-blue-400 text-4xl mb-4">"</div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">{t.quote}</p>
                <div>
                  <p className="text-white font-semibold">{t.author}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Founders</h2>
          <p className="text-gray-300 mb-12">The team behind the world's first truly AI-native EMR.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { name: "Mehul Makwana", role: "Co-Founder & CEO" },
              { name: "Ami Agrawal", role: "Co-Founder & COO" },
            ].map((f) => (
              <div key={f.name} className="card-dark glow-card p-8 rounded-2xl flex flex-col items-center">
                <div className="w-20 h-20 rounded-full gradient-btn flex items-center justify-center text-2xl font-bold mb-4">
                  {f.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-white font-bold text-xl">{f.name}</h3>
                <p className="text-blue-400 text-sm mt-1">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Transform EMR & Revenue Operations With{" "}
            <span style={{ color: "#93c5fd" }}>Autonomous AI Healthcare Agents</span>
          </h2>
          <p className="text-blue-200 text-lg mb-4">
            The first AI-native EMR built with intelligent agent automation — not AI bolted on.
          </p>
          <blockquote className="text-blue-100 italic text-lg mb-10 border-l-4 border-blue-400 pl-4 text-left max-w-2xl mx-auto">
            "We didn't build another EMR. We built an AI-first care enablement system that happens to replace your EMR."
          </blockquote>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="bg-white text-navy-900 font-bold px-10 py-4 rounded-xl text-base hover:bg-blue-50 transition-colors">
              Get Started Free →
            </a>
            <a href={APP_URL} className="border border-white/40 text-white px-10 py-4 rounded-xl text-base hover:bg-white/10 transition-colors">
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
