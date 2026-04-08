/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020409",
          900: "#06090f",
          850: "#080d18",
          800: "#0c1220",
          700: "#111b2e",
          600: "#182438",
        },
        teal: {
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
        },
        cyan: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%)",
        "gradient-hero": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.12) 0%, rgba(6,9,15,0) 70%)",
        "gradient-card": "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(20,184,166,0.04) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "ring-pulse": "ring-pulse 3s ease-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "ring-pulse": {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "teal-glow": "0 0 40px rgba(6,182,212,0.2)",
        "teal-glow-lg": "0 0 80px rgba(6,182,212,0.3)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
