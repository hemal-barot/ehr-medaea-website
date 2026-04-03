import { Link } from "react-router-dom";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5000";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-white">
                Medaea<span className="gradient-text">.ai</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The world's first truly AI-native EMR. Built for modern medical practices.
            </p>
            <p className="text-gray-500 text-xs mt-4 italic">
              "AI that cares so clinicians can care."
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              {["Platform", "Why Us", "Plans"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {[{ label: "About", to: "/about" }].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={APP_URL} className="text-gray-400 hover:text-white text-sm transition-colors">
                  Login to EHR
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Disclaimer", to: "/disclaimer" },
                { label: "SaaS Terms", to: "/saas-terms-of-service" },
                { label: "Web Terms", to: "/web-terms-of-service" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Medaea.ai. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            HIPAA Compliant · ONC Certified · SOC2 In Progress
          </p>
        </div>
      </div>
    </footer>
  );
}
