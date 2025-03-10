/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      quickSand: ["Montserrat", "sans-serif"], // Cambié Montserrat por Quicksand
    },
  },
  plugins: [],
  darkMode: "class",  // Esto habilita el modo oscuro cuando se agrega la clase 'dark' al elemento raíz
}
