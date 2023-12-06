/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        "primary": "#003c35",
        "secondary": "#088908",
        'white': '#f8fafc',
      },
      fontFamily: {
        asap: ['Asap', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        aBeeZee: ['ABeeZee','sans-serif']
      },
      spacing: {
        'container': '75rem',
      },
    },
  },
  plugins: [],
}

