/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'custom-purple': '#520f4d'
      },
      
      fontFamily: {
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
        'Beba':['"Bebas Neue"', 'sans-serif'],
        'fjalla': ['Fjalla One', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'istok': ['Istok Web', 'sans-serif'],
        'playfair': ['Playfair Display', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'italiana': ['Italiana', 'sans-serif']
      },
    },
  },
  plugins: [],
}