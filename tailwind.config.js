/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        red: "#AF2622",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      fontFamily: {
        monteCarlo: ["MonteCarlo"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        "gradient-layout":
          "linear-gradient(to bottom,#141414 0,rgba(20,20,20,.35) 15%,rgba(20,20,20,0.1) 25%,rgba(20,20,20, 0) 50%,rgba(20,20,20,.15) 75%, rgba(20,20,20,.35) 85%,#141414 100%);",
        "darker-gradient-bg":
          "linear-gradient(to right, rgba(20,20,20,0) 65%, rgba(20,20,20,0.5) 75%, rgba(20,20,20,1) 100%)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
