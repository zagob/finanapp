/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#0A1E51",
          800: "#0D296D",
          700: "#102F7F",
          600: "#294FAB",
        },
      },
    },
  },
  plugins: [],
};
