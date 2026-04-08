/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050810",
          900: "#0a0e1a",
          800: "#0f1629",
          700: "#162038",
        },
        brand: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          teal: "#14b8a6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "gradient-hero": "radial-gradient(ellipse at top, #1a2a5e 0%, #0a0e1a 70%)",
      },
    },
  },
  plugins: [],
};
