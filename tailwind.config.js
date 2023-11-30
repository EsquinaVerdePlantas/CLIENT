/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        "primary": "#003c35",
        "secondary": "#088908",
      },
      fontFamily: {
        title: ['Asap', 'sans-serif']
      }
    },
  },
  plugins: [],
}

