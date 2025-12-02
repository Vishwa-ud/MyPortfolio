/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#000000",
        "black-100": "#000000",
        "black-200": "#000000",
        "white-100": "#f3f3f3",
        // New color tokens
        "white-50": "#d9ecff",
        "black-50": "#1c1c21",
        "blue-50": "#839cb5",
        "blue-100": "#2d2d38",
      },
      backgroundColor: {
        "black-100": "#0e0e10",
        "black-200": "#282732",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
        monasans: ["Mona Sans", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
