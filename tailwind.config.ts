import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FACC15",
          "yellow-dark": "#EAB308",
          "yellow-light": "#FDE68A",
          black: "#0A0A0A",
          "dark-1": "#111111",
          "dark-2": "#1C1C1E",
          "dark-3": "#2C2C2E",
          "gray-1": "#3A3A3C",
          "gray-2": "#636366",
          "gray-3": "#8E8E93",
          "gray-4": "#C7C7CC",
          white: "#FFFFFF",
          "off-white": "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-yellow": "pulseYellow 2s ease-in-out infinite",
        "bounce-subtle": "bounceSlight 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseYellow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(250, 204, 21, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(250, 204, 21, 0)" },
        },
        bounceSlight: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0A0A0A 0%, #1C1C1E 50%, #0A0A0A 100%)",
        "yellow-gradient":
          "linear-gradient(135deg, #FACC15 0%, #EAB308 100%)",
        "card-gradient":
          "linear-gradient(145deg, #1C1C1E 0%, #2C2C2E 100%)",
      },
      boxShadow: {
        "yellow-glow": "0 0 20px rgba(250, 204, 21, 0.3)",
        "yellow-glow-lg": "0 0 40px rgba(250, 204, 21, 0.2)",
        "card-dark":
          "0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.2)",
        "card-hover":
          "0 8px 40px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(250, 204, 21, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
