/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#0A1E51",
          800: "#0D2154",
          700: "#152B5D",
          600: "#294FAB",
        },
        pink: {
          500: "#8560F3",
        },
      },
    },
  },
  plugins: [],
};
