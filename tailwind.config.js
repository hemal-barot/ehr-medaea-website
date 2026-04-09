/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        medical: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        teal: {
          50:  "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
        },
        slate: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          150: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        brand: {
          primary:   "#1d4ed8",
          secondary: "#0d9488",
          light:     "#eff6ff",
          accent:    "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand":  "linear-gradient(135deg, #1d4ed8 0%, #0d9488 100%)",
        "gradient-medical": "linear-gradient(135deg, #2563eb 0%, #14b8a6 100%)",
        "gradient-card":   "linear-gradient(135deg, rgba(29,78,216,0.05) 0%, rgba(13,148,136,0.03) 100%)",
        "hero-light":      "linear-gradient(135deg, #eff6ff 0%, #f0fdfa 50%, #f8fafc 100%)",
      },
      animation: {
        "pulse-slow":   "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow":    "spin 12s linear infinite",
        "float":        "float 6s ease-in-out infinite",
        "slide-up":     "slide-up 0.6s ease-out",
        "fade-in":      "fade-in 0.8s ease-out",
        "slide-left":   "slide-left 0.5s ease-out",
        "counter":      "counter 0.3s ease-out",
        "bar-grow":     "bar-grow 1.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        "slide-up": {
          "0%":   { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-left": {
          "0%":   { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)",    opacity: "1" },
        },
        "bar-grow": {
          "0%":   { width: "0%" },
          "100%": { width: "var(--bar-width)" },
        },
      },
      boxShadow: {
        "card":      "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "card-md":   "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
        "card-lg":   "0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
        "card-hover":"0 12px 48px rgba(29,78,216,0.12), 0 4px 16px rgba(0,0,0,0.08)",
        "blue-glow": "0 0 40px rgba(29,78,216,0.15)",
        "teal-glow": "0 0 40px rgba(13,148,136,0.15)",
        "nav":       "0 1px 0 rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.05)",
        "btn":       "0 4px 16px rgba(29,78,216,0.3)",
        "btn-hover": "0 8px 32px rgba(29,78,216,0.4)",
      },
    },
  },
  plugins: [],
};
