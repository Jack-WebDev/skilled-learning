/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkBlueGray: "#666ca3",
      Colorblue: "#13183f",
      Colorsilver: "#83869a",
      Colorpink: "#f74780",
      ColorcarnationPink: "#ffa7c3",
      Colorwhite: "#fff",
      Colororange: "#ff6f48",
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    fontWeight: {
      fw500: 100,
      fw700: 700,
      fw800: 800,
    },
    extend: {},
  },
  plugins: [],
};
