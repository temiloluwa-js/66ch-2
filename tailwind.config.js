/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Synonym: ["Satoshi, sans-serif"],
        Amulya: ["General Sans, sans-serif"]
      },
      colors: {
        primary: "#101010",
        secondary: "#ffffff",
        tertiary: "#f5f5f5"
      },
      maxHeight: {
        optimal: "80vh"
      }
    },
  },
  plugins: [],
}