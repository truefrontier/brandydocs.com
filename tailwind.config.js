/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Source Sans 3', 'sans-serif'],
        'sans': ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        gold: {
          400: '#E6B856',
          500: '#D48F3A',
        },
        dark: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2A2A2A',
        }
      }
    },
  },
  plugins: [],
}