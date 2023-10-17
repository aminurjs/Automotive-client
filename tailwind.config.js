/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
      },
      colors: {
        "blue-1": "#2947A9",
        "yellow-1": "#F9995D",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
