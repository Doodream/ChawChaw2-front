const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i / 10}rem`) }
const rem0_100 = { ...Array.from(Array(101)).map((_, i) => `${i / 10}rem`) }
const rem0_200 = { ...Array.from(Array(201)).map((_, i) => `${i / 10}rem`) }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      bmjua: ['BMJUA']
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        DEFAULT: '#1A1A1A',
        100: '#F9F9F9',
        200: '#E0E0E0',
        300: '#767676',
        400: '#1A1A1A'
      },
      primary: {
        DEFAULT: '#3F46D6',
        dark: '#181C71',
        light: '#D5D7F6'
      },
      secondary: {
        DEFAULT: '#25D9C6',
        dark: '#0F5750',
        light: '#D3F8F4'
      },
      error: '#E71D36',
      warning: '#FFB800',
      success: '#3C8505'
    },
    screens: {
      mobile: '576px',
      desktop: '1024px'
    },

    extend: {
      borderWidth: rem0_10,
      fontSize: rem0_100,
      lineHeight: rem0_100,
      minWidth: rem0_200,
      minHeight: rem0_200,
      spacing: rem0_200,
      gap: rem0_100,
      borderRadius: rem0_100
    }
  },
  plugins: []
}
