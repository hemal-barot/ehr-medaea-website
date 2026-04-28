import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const APP_URL = import.meta.env.VITE_APP_URL || "http://https://fix-integrating-website-backend.d32ldxvpx3i29m.amplifyapp.com";

/* ── Slideshow data ── */
const SLIDES = [
  {
    badge: "AI Clinical Documentation",
    title: "Your AI Scribe Works While You Focus on Patients",
    desc: "Medaea listens to every encounter, generates structured SOAP notes, and proposes precise ICD/CPT codes — all before you leave the room. No more hours of charting after clinic.",
    stat1: { v: "4+ hrs", l: "Saved per clinician daily" },
    stat2: { v: "< 30s", l: "Note generation time" },
    color: "from-blue-600 to-blue-800",
    lightBg: "bg-blue-50",
    icon: "🎙️",
    visual: "scribe",
  },
  {
    badge: "Revenue Cycle Management",
    title: "Maximize Revenue with Autonomous AI Billing",
    desc: "From eligibility verification to claims submission — Medaea's AI agents handle every step of your revenue cycle with 600+ payer rules, real-time denial prediction, and zero manual coding errors.",
    stat1: { v: "95%+", l: "First-pass clean claim rate" },
    stat2: { v: "62%", l: "Reduction in denials" },
    color: "from-teal-600 to-teal-800",
    lightBg: "bg-teal-50",
    icon: "💊",
    visual: "revenue",
  },
  {
    badge: "Specialty Workflows",
    title: "Pre-Built for 10+ Medical Specialties",
    desc: "Orthopaedics, dermatology, behavioral health, cardiology, and more. Specialty-specific templates, coding rules, and compliance guardrails. Go live in under 7 days with full onboarding support.",
    stat1: { v: "10+", l: "Specialties supported" },
    stat2: { v: "< 7 days", l: "Average go-live time" },
    color: "from-violet-600 to-violet-800",
    lightBg: "bg-violet-50",
    icon: "🏥",
    visual: "specialty",
  },
];

const STATS = [
  { value: "200+", label: "Practices Active", icon: "🏥" },
  { value: "95%+", label: "Clean Claim Rate", icon: "📋" },
  { value: "4+ hrs", label: "Saved Per Day", icon: "⏱️" },
  { value: "62%", label: "Fewer Denials", icon: "📉" },
];

const PARTNERS = [
  "Butterfly Network", "Keplr Health", "BHW Group", "MEI Research",
  "Easterseals", "Proliance Surgeons", "EliteDNA", "Axis Health",
  "Northwell Health", "Concentra", "MultiCare", "DaVita",
];

const AGENTS = [
  {
    icon: "🎙️",
    name: "Clinical Scribe",
    desc: "Ambient listening → structured SOAP notes → ICD/CPT codes. Instant, accurate, compliant.",
    metric: "4+ hrs saved/day",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    icon: "💊",
    name: "Billing & Coding",
    desc: "600+ payer rules engine. HCC, NCCI edits, zero compliance risk, maximum revenue capture.",
    metric: "95%+ clean claims",
    bg: "bg-teal-50",
    iconBg: "bg-teal-100",
    textColor: "text-teal-700",
  },
  {
    icon: "✅",
    name: "Eligibility Agent",
    desc: "Pre-visit insurance verification and prior auth — fully automated before the patient arrives.",
    metric: "100% pre-visit",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    icon: "🛡️",
    name: "Claims Integrity",
    desc: "Scrubs every claim, predicts denials, applies payer-specific rules before submission.",
    metric: "62% fewer denials",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    textColor: "text-violet-700",
  },
  {
    icon: "📅",
    name: "Scheduling Agent",
    desc: "Auto-detects follow-ups, books appointments, sends patient reminders. Zero admin touch.",
    metric: "Zero admin touch",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    textColor: "text-rose-700",
  },
];

const TESTIMONIALS = [
  {
    quote: "Medaea gave our clinicians back 2 hours every day. Our revenue increased 35% in Q1. The AI scribe alone was worth 10x what we pay.",
    author: "Dr. Sarah Mitchell",
    role: "Medical Director, Multi-Specialty Practice",
    specialty: "Internal Medicine · 12 Providers",
    stars: 5,
    initials: "SM",
    color: "from-blue-500 to-blue-700",
  },
  {
    quote: "Switching from eClinicalWorks to Medaea was the best decision we made. Documentation is invisible, billing is automatic, and our staff loves it.",
    author: "James Thornton",
    role: "Practice Administrator",
    specialty: "Orthopedics · 8 Providers",
    stars: 5,
    initials: "JT",
    color: "from-teal-500 to-teal-700",
  },
  {
    quote: "The AI billing agent caught $240,000 in potential denials in our first quarter. It paid for itself 20x over. I wish we'd found Medaea sooner.",
    author: "Dr. Priya Patel",
    role: "Co-Founder & CMO",
    specialty: "Behavioral Health · 5 Providers",
    stars: 5,
    initials: "PP",
    color: "from-violet-500 to-violet-700",
  },
  {
    quote: "Setup took 4 days. Our prior auth denials dropped 70% in month one. The specialty templates for dermatology are exactly what we needed.",
    author: "Rachel Kim, NP",
    role: "Clinical Lead",
    specialty: "Dermatology · 3 Providers",
    stars: 5,
    initials: "RK",
    color: "from-emerald-500 to-emerald-700",
  },
];

/* Medical SVG visuals */
function MedicalIllustration({ type }) {
  if (type === "scribe") return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      {/* Doctor + AI interface mockup */}
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-card-lg p-5 mb-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-bold">Dr</div>
            <div>
              <div className="text-slate-800 font-semibold text-sm">Dr. Johnson · Patient Encounter</div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AI Scribe Recording...
              </div>
            </div>
          </div>
          <div className="space-y-2.5">
            {["Chief Complaint: Knee pain, 2 weeks duration", "Assessment: Moderate patellofemoral syndrome", "Plan: Physical therapy × 6 weeks, NSAIDs PRN"].map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span className="text-slate-600 text-xs">{line}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-2.5 rounded-xl bg-blue-50 border border-blue-100">
            <div className="text-blue-700 text-xs font-semibold">✓ AI Suggested: M22.2 (Patellofemoral disorders)</div>
            <div className="text-blue-500 text-xs">CPT 99213 · Generated in 18 seconds</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 text-white">
          <div className="text-xs font-semibold mb-1">Today's Documentation</div>
          <div className="flex justify-between text-xs">
            <span>24 encounters processed</span>
            <span className="text-blue-200">↓ 0 pending</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (type === "revenue") return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-3">
        <div className="bg-white rounded-2xl shadow-card-lg p-5">
          <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-3">Revenue Intelligence</div>
          {[
            { label: "Claims Submitted", v: "847", trend: "+12%", up: true },
            { label: "First-Pass Rate", v: "96.2%", trend: "+8%", up: true },
            { label: "Avg. Days to Pay", v: "11.4", trend: "-3.1", up: true },
            { label: "Denial Rate", v: "3.8%", trend: "-62%", up: true },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
              <span className="text-slate-600 text-xs">{r.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-800 text-sm font-bold">{r.v}</span>
                <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${r.up ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>{r.trend}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-teal-600 rounded-xl p-4 text-white text-center">
            <div className="text-2xl font-extrabold">$2.4M</div>
            <div className="text-teal-200 text-xs">Protected this month</div>
          </div>
          <div className="bg-blue-600 rounded-xl p-4 text-white text-center">
            <div className="text-2xl font-extrabold">$0</div>
            <div className="text-blue-200 text-xs">Manual coding needed</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-card-lg p-5">
          <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-4">Specialty Workflows Ready</div>
          <div className="grid grid-cols-2 gap-2">
            {["Orthopedics", "Dermatology", "Behavioral Health", "Cardiology", "Primary Care", "Neurology"].map((s) => (
              <div key={s} className="flex items-center gap-2 p-2.5 rounded-xl bg-violet-50 border border-violet-100">
                <div className="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-slate-700 text-xs font-medium">{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center text-violet-600 text-xs font-semibold">
            + 6 more specialties available
          </div>
        </div>
      </div>
    </div>
  );
}

/* Revenue bar chart */
function RevenueChart() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const before = [55, 48, 60, 52, 58, 55];
  const after  = [72, 80, 85, 88, 91, 95];

  return (
    <div ref={ref} className="bg-white rounded-2xl shadow-card-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-slate-800 font-bold text-base">Revenue Capture Rate</h4>
          <p className="text-slate-500 text-xs mt-0.5">6 months after switching to Medaea</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-slate-200" /> Before</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-medical-600" /> After</div>
        </div>
      </div>
      <div className="flex items-end gap-3 h-36">
        {months.map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex items-end gap-0.5 h-28">
              <div
                className="flex-1 bg-slate-200 rounded-t-lg transition-all duration-1000"
                style={{ height: inView ? `${before[i]}%` : "0%" }}
              />
              <div
                className="flex-1 bg-gradient-to-t from-medical-700 to-medical-500 rounded-t-lg transition-all duration-1000"
                style={{ height: inView ? `${after[i]}%` : "0%", transitionDelay: `${i * 0.1}s` }}
              />
            </div>
            <span className="text-slate-400 text-xs">{m}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between text-xs text-slate-500">
        <span>Avg. before: <strong className="text-slate-700">54.7%</strong></span>
        <span className="text-emerald-600 font-semibold">↑ +40% improvement</span>
        <span>Avg. after: <strong className="text-slate-700">85.2%</strong></span>
      </div>
    </div>
  );
}

/* Admin burden pie/donut */
function TimeChart() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const bars = [
    { label: "Documentation", before: 38, after: 8, color: "bg-blue-500" },
    { label: "Billing & Coding", before: 25, after: 5, color: "bg-teal-500" },
    { label: "Prior Auth", before: 18, after: 3, color: "bg-violet-500" },
    { label: "Scheduling", before: 12, after: 4, color: "bg-rose-500" },
    { label: "Patient Care", before: 40, after: 80, color: "bg-emerald-500" },
  ];

  return (
    <div ref={ref} className="bg-white rounded-2xl shadow-card-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-slate-800 font-bold text-base">Clinician Time Distribution</h4>
          <p className="text-slate-500 text-xs mt-0.5">% of workday spent on each activity</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5"><div className="w-3 h-1 bg-slate-300 rounded" /> Before</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-1 bg-medical-600 rounded" /> After</div>
        </div>
      </div>
      <div className="space-y-4">
        {bars.map((b, i) => (
          <div key={b.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-slate-600 text-xs font-medium">{b.label}</span>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-400">{b.before}% → </span>
                <span className={`font-bold ${b.label === "Patient Care" ? "text-emerald-600" : "text-medical-700"}`}>{b.after}%</span>
              </div>
            </div>
            <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ${b.color} opacity-30`}
                style={{ width: inView ? `${b.before}%` : "0%", transitionDelay: `${i * 0.12}s` }}
              />
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ${b.color}`}
                style={{ width: inView ? `${b.after}%` : "0%", transitionDelay: `${i * 0.12 + 0.3}s` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Slideshow component ── */
function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  function go(idx) {
    clearInterval(intervalRef.current);
    setCurrent(idx);
    startInterval();
  }

  const slide = SLIDES[current];

  return (
    <section className="relative hero-bg overflow-hidden pt-8 pb-0">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[580px]">

          {/* Left: text */}
          <div key={current} className="animate-slide-up py-12 lg:py-16">
            <div className="badge-primary mb-6 inline-flex items-center gap-2">
              <span>{slide.icon}</span>
              {slide.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-5 tracking-tight">
              {slide.title.split(" ").slice(0, -3).join(" ")}{" "}
              <span className="gradient-text">{slide.title.split(" ").slice(-3).join(" ")}</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              {slide.desc}
            </p>

            {/* Micro-stats */}
            <div className="flex gap-6 mb-8">
              {[slide.stat1, slide.stat2].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl font-extrabold stat-shine">{s.v}</div>
                  <div className="text-slate-500 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href={APP_URL} className="btn-primary px-8 py-3.5 text-sm rounded-xl inline-flex items-center gap-2 font-bold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Get Started Free
              </a>
              <a href={APP_URL} className="btn-outline px-8 py-3.5 text-sm rounded-xl inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5">
              {["HIPAA Compliant", "ONC Certified", "< 7 Day Setup", "No Long-Term Contracts"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className={`relative rounded-3xl overflow-hidden h-[440px] ${slide.lightBg} border border-white shadow-card-lg`}>
            <MedicalIllustration type={slide.visual} />

            {/* Live indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-card text-xs font-semibold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              AI Active
            </div>
          </div>
        </div>

        {/* Slide navigation dots */}
        <div className="flex items-center justify-center gap-3 pb-8 pt-4">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-2.5 bg-medical-700"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
          {/* Arrows */}
          <button
            onClick={() => go((current - 1 + SLIDES.length) % SLIDES.length)}
            className="ml-4 w-8 h-8 rounded-full bg-white border border-slate-200 hover:border-medical-300 shadow-card flex items-center justify-center text-slate-600 hover:text-medical-700 transition-all"
          >
            ‹
          </button>
          <button
            onClick={() => go((current + 1) % SLIDES.length)}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 hover:border-medical-300 shadow-card flex items-center justify-center text-slate-600 hover:text-medical-700 transition-all"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

/* Stats bar */
function StatsBar() {
  return (
    <section className="bg-gradient-to-r from-medical-700 to-teal-700 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl mb-1">{s.icon}</div>
              <div className="text-3xl font-extrabold text-white mb-0.5">{s.value}</div>
              <div className="text-medical-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <StatsBar />

      {/* ── Partner ticker ── */}
      <section className="py-10 bg-white border-y border-slate-100 overflow-hidden">
        <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-widest mb-6">Trusted by leading healthcare organizations</p>
        <div className="relative overflow-hidden">
          <div className="ticker-track">
            {[...PARTNERS, ...PARTNERS].map((name, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-medical-400" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Medical Imagery: Real-World Scenes ── */}
      <section className="section-pad-sm bg-slate-50">
        <div className="container-xl">
          <div className="text-center mb-10">
            <span className="badge-primary mb-4 inline-block">Where Medaea Lives</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              AI Working Alongside <span className="gradient-text">Every Doctor, Every Day</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From solo family physicians to multi-site specialty groups — Medaea AI works invisibly in the background while your team focuses entirely on patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Doctor card 1: Doctor-Patient Consultation */}
            <div className="relative overflow-hidden rounded-2xl shadow-card-lg group hover:-translate-y-1 transition-all duration-300">
              <div className="h-52 bg-gradient-to-br from-blue-50 to-blue-100 relative flex items-center justify-center">
                <svg viewBox="0 0 320 200" className="w-full h-full absolute inset-0" fill="none">
                  <rect width="320" height="200" fill="url(#bg1)" rx="0"/>
                  <defs>
                    <linearGradient id="bg1" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#eff6ff"/>
                      <stop offset="1" stopColor="#dbeafe"/>
                    </linearGradient>
                  </defs>
                  {/* Room background */}
                  <rect x="0" y="120" width="320" height="80" fill="#e0e7ff" rx="0"/>
                  {/* Doctor */}
                  <circle cx="100" cy="70" r="26" fill="#bfdbfe"/>
                  <ellipse cx="100" cy="130" rx="30" ry="40" fill="#2563eb"/>
                  {/* Stethoscope */}
                  <path d="M88 95 Q85 110 90 118 Q96 126 100 120" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <circle cx="100" cy="121" r="5" fill="#1e40af"/>
                  {/* Doctor face */}
                  <circle cx="100" cy="67" r="18" fill="#fde68a"/>
                  <circle cx="93" cy="64" r="2" fill="#1e293b"/>
                  <circle cx="107" cy="64" r="2" fill="#1e293b"/>
                  <path d="M94 74 Q100 79 106 74" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  {/* Doctor coat */}
                  <rect x="74" y="92" width="52" height="8" rx="4" fill="white"/>
                  {/* Patient */}
                  <circle cx="210" cy="85" r="22" fill="#fde68a"/>
                  <circle cx="202" cy="82" r="1.8" fill="#1e293b"/>
                  <circle cx="218" cy="82" r="1.8" fill="#1e293b"/>
                  <path d="M204 92 Q210 97 216 92" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <ellipse cx="210" cy="135" rx="26" ry="35" fill="#e2e8f0"/>
                  {/* Desk */}
                  <rect x="130" y="108" width="80" height="10" rx="5" fill="#93c5fd"/>
                  {/* Computer on desk */}
                  <rect x="145" y="72" width="50" height="36" rx="3" fill="#1e293b"/>
                  <rect x="148" y="75" width="44" height="28" rx="2" fill="#38bdf8"/>
                  {/* AI text on screen */}
                  <rect x="152" y="79" width="20" height="3" rx="1.5" fill="white" opacity="0.8"/>
                  <rect x="152" y="84" width="32" height="2" rx="1" fill="#7dd3fc" opacity="0.8"/>
                  <rect x="152" y="88" width="28" height="2" rx="1" fill="#7dd3fc" opacity="0.8"/>
                  <rect x="152" y="92" width="24" height="2" rx="1" fill="#7dd3fc" opacity="0.8"/>
                  {/* AI pulse dot */}
                  <circle cx="182" cy="80" r="3" fill="#34d399" opacity="0.9"/>
                </svg>
                <div className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1 text-xs font-bold text-medical-700 shadow-card flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  AI Scribe Active
                </div>
              </div>
              <div className="bg-white p-5 border-t border-slate-100">
                <h3 className="text-slate-800 font-bold text-sm mb-1">Doctor-Patient Consultation</h3>
                <p className="text-slate-500 text-xs leading-relaxed">The AI scribe listens and documents in real-time. The doctor focuses entirely on the patient — never on a keyboard.</p>
              </div>
            </div>

            {/* Card 2: Hospital / Multi-Provider Group */}
            <div className="relative overflow-hidden rounded-2xl shadow-card-lg group hover:-translate-y-1 transition-all duration-300">
              <div className="h-52 bg-gradient-to-br from-teal-50 to-teal-100 relative flex items-center justify-center">
                <svg viewBox="0 0 320 200" className="w-full h-full absolute inset-0" fill="none">
                  <defs>
                    <linearGradient id="bg2" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f0fdfa"/>
                      <stop offset="1" stopColor="#ccfbf1"/>
                    </linearGradient>
                  </defs>
                  <rect width="320" height="200" fill="url(#bg2)"/>
                  {/* Sky */}
                  <rect x="0" y="0" width="320" height="120" fill="#e0f2fe" opacity="0.4"/>
                  {/* Hospital building */}
                  <rect x="80" y="50" width="160" height="130" rx="4" fill="white" stroke="#bae6fd" strokeWidth="2"/>
                  {/* Hospital floors */}
                  <rect x="80" y="100" width="160" height="1.5" fill="#bae6fd"/>
                  <rect x="80" y="130" width="160" height="1.5" fill="#bae6fd"/>
                  {/* Windows floor 1 */}
                  <rect x="95" y="60" width="25" height="25" rx="2" fill="#7dd3fc"/>
                  <rect x="130" y="60" width="25" height="25" rx="2" fill="#7dd3fc"/>
                  <rect x="165" y="60" width="25" height="25" rx="2" fill="#7dd3fc"/>
                  <rect x="200" y="60" width="25" height="25" rx="2" fill="#bfdbfe"/>
                  {/* Windows floor 2 */}
                  <rect x="95" y="108" width="25" height="18" rx="2" fill="#a5f3fc"/>
                  <rect x="130" y="108" width="25" height="18" rx="2" fill="#a5f3fc"/>
                  <rect x="200" y="108" width="25" height="18" rx="2" fill="#a5f3fc"/>
                  {/* Cross on building */}
                  <rect x="152" y="108" width="16" height="5" rx="2.5" fill="#0d9488"/>
                  <rect x="157" y="103" width="6" height="15" rx="3" fill="#0d9488"/>
                  {/* Door */}
                  <rect x="142" y="150" width="36" height="30" rx="3" fill="#93c5fd"/>
                  <circle cx="155" cy="166" r="2" fill="#1e40af"/>
                  {/* Flag */}
                  <line x1="160" y1="20" x2="160" y2="50" stroke="#cbd5e1" strokeWidth="2"/>
                  <rect x="160" y="20" width="24" height="14" rx="2" fill="#0d9488"/>
                  {/* Ground */}
                  <rect x="0" y="175" width="320" height="25" fill="#d1fae5" opacity="0.5"/>
                  {/* Trees */}
                  <ellipse cx="52" cy="155" rx="22" ry="28" fill="#6ee7b7"/>
                  <rect x="49" y="168" width="6" height="12" rx="2" fill="#6b7280"/>
                  <ellipse cx="268" cy="155" rx="22" ry="28" fill="#6ee7b7"/>
                  <rect x="265" y="168" width="6" height="12" rx="2" fill="#6b7280"/>
                  {/* AI badge */}
                  <rect x="210" y="35" width="70" height="22" rx="11" fill="white" stroke="#0d9488" strokeWidth="1.5"/>
                  <circle cx="224" cy="46" r="5" fill="#0d9488"/>
                  <rect x="232" y="42" width="40" height="3" rx="1.5" fill="#0d9488"/>
                  <rect x="232" y="47" width="28" height="2.5" rx="1.25" fill="#99f6e4"/>
                </svg>
                <div className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1 text-xs font-bold text-teal-700 shadow-card flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  Multi-Site Ready
                </div>
              </div>
              <div className="bg-white p-5 border-t border-slate-100">
                <h3 className="text-slate-800 font-bold text-sm mb-1">Multi-Provider Hospital Groups</h3>
                <p className="text-slate-500 text-xs leading-relaxed">From single-physician practices to 50-provider hospital networks — Medaea scales to every size with unified workflows.</p>
              </div>
            </div>

            {/* Card 3: AI Dashboard / Nurse + Patient */}
            <div className="relative overflow-hidden rounded-2xl shadow-card-lg group hover:-translate-y-1 transition-all duration-300">
              <div className="h-52 bg-gradient-to-br from-violet-50 to-violet-100 relative flex items-center justify-center">
                <svg viewBox="0 0 320 200" className="w-full h-full absolute inset-0" fill="none">
                  <defs>
                    <linearGradient id="bg3" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f5f3ff"/>
                      <stop offset="1" stopColor="#ede9fe"/>
                    </linearGradient>
                  </defs>
                  <rect width="320" height="200" fill="url(#bg3)"/>
                  {/* Dashboard frame */}
                  <rect x="20" y="20" width="280" height="160" rx="12" fill="white" stroke="#ddd6fe" strokeWidth="2"/>
                  {/* Header bar */}
                  <rect x="20" y="20" width="280" height="32" rx="12" fill="#7c3aed"/>
                  <rect x="20" y="38" width="280" height="14" fill="#7c3aed"/>
                  <rect x="32" y="30" width="80" height="8" rx="4" fill="white" opacity="0.4"/>
                  <circle cx="270" cy="34" r="6" fill="white" opacity="0.3"/>
                  <circle cx="255" cy="34" r="6" fill="white" opacity="0.2"/>
                  {/* KPI cards row */}
                  <rect x="30" y="60" width="58" height="36" rx="6" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="1"/>
                  <rect x="35" y="66" width="32" height="5" rx="2.5" fill="#7c3aed" opacity="0.5"/>
                  <rect x="35" y="75" width="40" height="8" rx="4" fill="#7c3aed"/>
                  <rect x="96" y="60" width="58" height="36" rx="6" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1"/>
                  <rect x="101" y="66" width="32" height="5" rx="2.5" fill="#0d9488" opacity="0.5"/>
                  <rect x="101" y="75" width="40" height="8" rx="4" fill="#0d9488"/>
                  <rect x="162" y="60" width="58" height="36" rx="6" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1"/>
                  <rect x="167" y="66" width="32" height="5" rx="2.5" fill="#1d4ed8" opacity="0.5"/>
                  <rect x="167" y="75" width="40" height="8" rx="4" fill="#1d4ed8"/>
                  <rect x="228" y="60" width="58" height="36" rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1"/>
                  <rect x="233" y="66" width="32" height="5" rx="2.5" fill="#16a34a" opacity="0.5"/>
                  <rect x="233" y="75" width="40" height="8" rx="4" fill="#16a34a"/>
                  {/* Chart area */}
                  <rect x="30" y="105" width="175" height="60" rx="8" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="1"/>
                  {/* Bar chart inside */}
                  <rect x="45" y="125" width="14" height="30" rx="3" fill="#c4b5fd"/>
                  <rect x="65" y="118" width="14" height="37" rx="3" fill="#c4b5fd"/>
                  <rect x="85" y="110" width="14" height="45" rx="3" fill="#a78bfa"/>
                  <rect x="105" y="107" width="14" height="48" rx="3" fill="#7c3aed"/>
                  <rect x="125" y="103" width="14" height="52" rx="3" fill="#7c3aed"/>
                  <rect x="145" y="100" width="14" height="55" rx="3" fill="#6d28d9"/>
                  {/* Patient list */}
                  <rect x="213" y="105" width="75" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
                  <rect x="220" y="112" width="35" height="4" rx="2" fill="#334155" opacity="0.6"/>
                  <rect x="220" y="120" width="60" height="3" rx="1.5" fill="#94a3b8"/>
                  <rect x="220" y="127" width="60" height="3" rx="1.5" fill="#94a3b8"/>
                  <rect x="220" y="134" width="50" height="3" rx="1.5" fill="#94a3b8"/>
                  <rect x="220" y="141" width="55" height="3" rx="1.5" fill="#94a3b8"/>
                  <rect x="220" y="148" width="40" height="3" rx="1.5" fill="#94a3b8"/>
                </svg>
                <div className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1 text-xs font-bold text-violet-700 shadow-card flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                  Live Dashboard
                </div>
              </div>
              <div className="bg-white p-5 border-t border-slate-100">
                <h3 className="text-slate-800 font-bold text-sm mb-1">Real-Time Revenue Intelligence</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Live dashboards show every claim, every denial, every revenue opportunity — updated in real-time as encounters are completed.</p>
              </div>
            </div>
          </div>

          {/* Medical use-case strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🩺", title: "Primary Care", desc: "Family physicians & internists using AI documentation daily", color: "bg-blue-50 border-blue-100" },
              { icon: "🦴", title: "Specialty Groups", desc: "Ortho, neuro, derm, cardiology — specialty templates ready", color: "bg-teal-50 border-teal-100" },
              { icon: "🧠", title: "Behavioral Health", desc: "Mental health documentation with privacy-first AI assistance", color: "bg-violet-50 border-violet-100" },
              { icon: "🏥", title: "Hospital Systems", desc: "Enterprise-grade AI for multi-site health networks", color: "bg-emerald-50 border-emerald-100" },
            ].map((c) => (
              <div key={c.title} className={`${c.color} rounded-xl border p-4 flex items-start gap-3 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200`}>
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="text-slate-800 font-bold text-xs mb-1">{c.title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How AI helps doctors ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-block">AI + Medicine</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              How Medaea AI Transforms{" "}
              <span className="gradient-text">Clinical Practice</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Physicians spend 49% of their time on EHR tasks. Medaea's AI agents eliminate that burden — so every minute goes back to patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "👨‍⚕️",
                title: "Before Medaea",
                items: [
                  "2–4 hours of daily charting",
                  "Manual ICD/CPT code lookup",
                  "Insurance denials every week",
                  "Prior auth delays patient care",
                  "Revenue leakage undetected",
                ],
                color: "bg-red-50 border-red-100",
                itemColor: "text-red-500",
              },
              {
                icon: "🤖",
                title: "Medaea AI Handles",
                items: [
                  "Ambient documentation & SOAP notes",
                  "Auto-coding (ICD/CPT/HCC)",
                  "Eligibility + prior auth checks",
                  "Claims scrubbing & submission",
                  "Real-time revenue monitoring",
                ],
                color: "bg-medical-50 border-medical-100",
                itemColor: "text-medical-600",
              },
              {
                icon: "🏆",
                title: "After Medaea",
                items: [
                  "4+ hours reclaimed per day",
                  "95%+ first-pass claim rate",
                  "62% fewer denials",
                  "Zero documentation backlog",
                  "30–40% revenue increase",
                ],
                color: "bg-emerald-50 border-emerald-100",
                itemColor: "text-emerald-600",
              },
            ].map((col) => (
              <div key={col.title} className={`p-6 rounded-2xl border ${col.color}`}>
                <div className="text-4xl mb-3">{col.icon}</div>
                <h3 className="text-slate-800 font-bold text-lg mb-4">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`${col.itemColor} font-bold mt-0.5 flex-shrink-0`}>
                        {col.title === "Before Medaea" ? "✗" : "✓"}
                      </span>
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Medical booklet-style feature showcase */}
          <div className="bg-gradient-to-br from-medical-800 to-teal-800 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-14 text-white">
                <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-6">
                  📘 Clinical Documentation
                </span>
                <h3 className="text-3xl font-extrabold mb-4 leading-tight">
                  The Smartest AI Scribe in Healthcare
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6 text-lg">
                  Medaea's ambient AI scribe understands the nuance of clinical conversations. It recognizes specialty terminology, differentiates between past and present history, and generates structured documentation that meets every payer's requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Specialty-specific clinical vocabulary",
                    "Automatic problem list updates",
                    "MEAT documentation criteria for HCC coding",
                    "Real-time feedback on documentation gaps",
                    "Clinician approval before any note is finalized",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-blue-100 text-sm">
                      <svg className="w-4 h-4 text-teal-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={APP_URL} className="btn-outline-white px-7 py-3 rounded-xl text-sm font-bold inline-block">
                  Explore the Scribe →
                </a>
              </div>
              <div className="bg-white/5 p-8 lg:p-10 flex items-center">
                <div className="w-full space-y-3">
                  {/* SOAP note preview */}
                  <div className="text-white text-xs font-semibold uppercase tracking-widest mb-4 opacity-70">Live SOAP Note Preview</div>
                  {[
                    { section: "S", color: "bg-blue-500", label: "Subjective", text: "Patient c/o right knee pain × 2 weeks, worse with stairs, AM stiffness lasting 30 min." },
                    { section: "O", color: "bg-teal-500", label: "Objective", text: "Vital signs stable. ROM limited. Mild effusion noted. McMurray negative. Patellar grind positive." },
                    { section: "A", color: "bg-violet-500", label: "Assessment", text: "M22.2 — Patellofemoral disorder, bilateral. M79.621 — Pain in right forearm." },
                    { section: "P", color: "bg-emerald-500", label: "Plan", text: "Physical therapy × 6 weeks. Naproxen 500mg BID PRN. F/U 6 weeks or sooner PRN." },
                  ].map((s) => (
                    <div key={s.section} className="flex gap-3 p-3 rounded-xl bg-white/10 border border-white/15">
                      <div className={`w-8 h-8 ${s.color} rounded-lg flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0`}>{s.section}</div>
                      <div>
                        <div className="text-white/70 text-xs mb-0.5">{s.label}</div>
                        <div className="text-white text-xs leading-relaxed">{s.text}</div>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-white/50 text-xs">Generated in 22 seconds</span>
                    <span className="text-teal-300 text-xs font-semibold">✓ Ready for review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Agents ── */}
      <section className="section-pad section-blue-top">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Autonomous Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              5 AI Agents Working{" "}
              <span className="gradient-text">24/7 For Your Practice</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Intelligent agents handle documentation, billing, coding, and scheduling — so your team focuses entirely on patients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {AGENTS.map((a) => (
              <div key={a.name} className={`${a.bg} rounded-2xl p-6 border border-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}>
                <div className={`w-12 h-12 rounded-xl ${a.iconBg} flex items-center justify-center text-2xl mb-4 shadow-sm`}>{a.icon}</div>
                <h3 className="text-slate-800 font-bold text-sm mb-2">{a.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{a.desc}</p>
                <div className={`inline-flex items-center gap-1.5 ${a.textColor} text-xs font-semibold`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {a.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Analytics & Graphs ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-primary mb-4 inline-block">Data-Driven Results</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Real Outcomes from <span className="gradient-text">Real Practices</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Measurable improvements from day one. See what happens when AI handles the administrative burden.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <TimeChart />
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: "95%+", l: "First-pass claim rate", color: "bg-medical-50 text-medical-700" },
              { v: "$240K", l: "Avg. annual denial savings", color: "bg-teal-50 text-teal-700" },
              { v: "4.5 hrs", l: "Documentation saved/day", color: "bg-violet-50 text-violet-700" },
              { v: "< 7 days", l: "Go-live time", color: "bg-emerald-50 text-emerald-700" },
            ].map((s) => (
              <div key={s.l} className={`${s.color} rounded-2xl p-5 text-center border border-current/10`}>
                <div className="text-3xl font-extrabold mb-1">{s.v}</div>
                <div className="text-sm opacity-80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-pad section-teal-top">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge-teal mb-4 inline-block">Patient Stories</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              What Physicians Are <span className="gradient-text">Saying</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="testimonial-card p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0`}>{t.initials}</div>
                  <div>
                    <p className="text-slate-800 font-bold text-sm">{t.author}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                    <p className="text-medical-600 text-xs font-medium">{t.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-pad bg-gradient-to-br from-medical-800 via-medical-700 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            🚀 Join 200+ practices already transforming care
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Transform Your Practice with<br />
            <span className="text-teal-300">AI-Native Healthcare Technology</span>
          </h2>
          <p className="text-blue-100 text-xl mb-4 max-w-2xl mx-auto">
            The only EHR built AI-first from day one. Not AI bolted on — AI woven into every workflow.
          </p>
          <p className="text-blue-200 italic text-lg mb-10">
            "We didn't build another EMR. We built an AI-first care enablement system that replaces your EMR."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APP_URL} className="px-10 py-4 rounded-xl text-base font-bold text-medical-900 bg-white hover:bg-medical-50 transition-colors shadow-btn">
              Get Started Free →
            </a>
            <a href={APP_URL} className="btn-outline-white px-10 py-4 rounded-xl text-base font-bold">
              Book a Demo
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">No credit card required · Go live in under 7 days · HIPAA compliant</p>
        </div>
      </section>
    </>
  );
}
