/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          default: "#00F260",
        },
        dark: {
          default: "#010101",
          100: "#0A0B1E",
          200: "#16181D",
          300: "#0F1115",
          400: "#0A0B0E",
          500: "#16181D",
          700: "#202125",
        },
      },
      boxShadow: {
        "custom-light": "0 0 10px #313131",
        "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
      },
    },
    fontFamily: {
      kaushan: ["Kaushan Script", "cursive"],
    },
  },

  plugins: [],
};
