/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "2xl-h": { raw: "(max-height: 1536px)" },
        "xl-h": { raw: "(max-height: 1280px)" },
        "lg-h": { raw: "(max-height: 1024px)" },
        "md-h": { raw: "(max-height: 768px)" },
        "sm-h": { raw: "(max-height: 640px)" },
        "xs-h": { raw: "(max-height: 480px)" },
        "max-2xl": { raw: "(max-width: 1535px)" },
        "max-xl": { raw: "(max-width: 1279px)" },
        "max-lg": { raw: "(max-width: 1023px)" },
        "max-md": { raw: "(max-width: 767px)" },
        "max-sm": { raw: "(max-width: 639px)" },
      },
      fontFamily: {
        sans: ["sans-serif", "sans-serif"],
      },
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-left": "slide-left 10s linear infinite",
        "fade-up": "fade-up 0.5 ease-in-out",
      },
      colors: {
        neutral: {
          250: "#DCDCDC",
        },
      },
    },
  },
  darkMode: "selector",
  plugins: [require("tailwindcss-animated")],
};
