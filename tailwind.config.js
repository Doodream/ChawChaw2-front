/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#F9F9F9',
        200: '#E0E0E0',
        300: '#767676',
        400: '#1A1A1A'
      }
    },
    theme: {
      screens: {
        mobile: '375px',
        desktop: '1024px'
      },
      spacing: {
        rem: '1rem',
        0: '0'
      }
    },
    extend: {}
  },
  plugins: []
}
