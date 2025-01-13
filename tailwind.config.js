const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: "#ADD8E6", // lightblue warna kustom
        lightcoral: "#F08080", // lightcoral warna kustom
        lightgreen: "#90EE90", // lightgreen warna kustom
        lightgray: "#D3D3D3", // lightgray warna kustom
      },
    },
  },
  plugins: [nextui()], // Pastikan hanya mendeklarasikan plugins sekali
  darkMode: "class",
};
