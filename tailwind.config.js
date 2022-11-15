/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#121212",
        "dark-secondary": "#242424",
        brand: "#0E22BE",
        "brand-secondary": "#3748CD",
        "brand-hover": "#3B4DD9",
      },
    },
  },
  plugins: [],
};
