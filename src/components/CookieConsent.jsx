import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("medaea_cookie_consent");
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("medaea_cookie_consent", "all");
    setVisible(false);
  }
  function acceptEssential() {
    localStorage.setItem("medaea_cookie_consent", "essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] cookie-banner animate-slide-up">
      <div className="bg-white border-t border-slate-200 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">

            {/* Icon + text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-9 h-9 rounded-xl bg-medical-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-medical-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-800 text-sm font-semibold mb-0.5">
                  🍪 We use cookies to improve your experience
                </p>
                <p className="text-slate-500 text-xs leading-relaxed max-w-2xl">
                  Medaea uses essential cookies to ensure the site functions properly, and optional analytics cookies to help us understand how visitors interact with our platform. We never sell your data.{" "}
                  <button onClick={() => setExpanded(!expanded)} className="text-medical-600 hover:text-medical-700 underline font-medium">
                    {expanded ? "Show less" : "Learn more"}
                  </button>
                </p>

                {expanded && (
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Essential", desc: "Required for core functionality, security, and HIPAA compliance.", always: true, icon: "🔒" },
                      { name: "Analytics", desc: "Help us improve the site by understanding usage patterns (anonymized).", always: false, icon: "📊" },
                      { name: "Preferences", desc: "Remember your settings and preferences for a better experience.", always: false, icon: "⚙️" },
                    ].map((c) => (
                      <div key={c.name} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-base">{c.icon}</span>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-slate-700 text-xs font-semibold">{c.name}</span>
                            {c.always && <span className="text-xs bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded">Always on</span>}
                          </div>
                          <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={acceptEssential}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
              >
                Essential Only
              </button>
              <button
                onClick={accept}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-medical-700 to-medical-600 hover:from-medical-600 hover:to-medical-500 transition-all shadow-btn"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
