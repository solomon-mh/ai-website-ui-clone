/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightRed: "#f26200",
        BrighterRed: "#cc5300",
        lightRed: "#f2620033",
        simpleLight: "#757575",
        antiquewhite: "rgba(241, 224, 200, 0.754)",
      },
      width: {
        "30perc": "30%",
        "90perc": "90%",
        17: "4.5rem",
      },
      height: {
        17: "4.5rem",
      },
      fontSize: {
        "6.5xl": "4rem",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
