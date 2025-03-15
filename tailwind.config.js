/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A1A3B', // Deep navy
        'primary-light': '#1C2F5E', // Lighter navy
        'primary-dark': '#061029', // Darker navy
        secondary: '#C6A962', // Rich gold
        'secondary-light': '#D4BC85', // Lighter gold
        'secondary-dark': '#B39343', // Darker gold
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};