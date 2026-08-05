/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./tests/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit Variable", "Outfit", "system-ui", "-apple-system", "sans-serif"],
        brand: ["Outfit Variable", "Outfit", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        slatebg: "#ffffff",
      },
    },
  },
  plugins: [],
}
