/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],

  // Ensures animation & delay classes are NEVER purged
  safelist: [
    "animate-float",
    "animation-delay-1000",
    "animation-delay-2000",
    "animation-delay-3000",
  ],

  theme: {
    extend: {
      fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
      },

      // Smooth Subtle Float Animation (Option A)
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
