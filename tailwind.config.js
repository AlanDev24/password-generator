/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-bar": "#480CA8",
      }, fontFamily: {
        poetsen: ["Poetsen One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
