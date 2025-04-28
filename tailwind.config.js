/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        // Custom utilities
        textStrokeWidth: {
          DEFAULT: '1px',
          '2': '2px',
          '3': '3px',
        },
        textStrokeColor: {
          black: '#000',
          white: '#fff',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '0.7px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': '#000000',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    },
  ],
}