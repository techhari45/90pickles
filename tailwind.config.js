/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a18072', // Clay pot brown
          600: '#8a6b5d',
          700: '#735749',
          800: '#5d453b',
          900: '#48352d',
        },
        pickle: {
          red: '#c0392b', // Deep spicy red
          green: '#27ae60', // Fresh green
          yellow: '#f1c40f', // Turmeric/Mango yellow
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Traditional, premium look
      }
    },
  },
  plugins: [],
}
