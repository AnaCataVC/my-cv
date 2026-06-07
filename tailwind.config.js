/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import { cvData } from './src/data.js';

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Reads colors from src/data.js config
        primary: colors[cvData.config?.primaryColor] || colors.slate,
        neutralBase: colors[cvData.config?.neutralColor] || colors.zinc,
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
