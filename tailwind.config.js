const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i / 10}rem`) }
const rem0_100 = { ...Array.from(Array(101)).map((_, i) => `${i / 10}rem`) }
const rem0_200 = { ...Array.from(Array(201)).map((_, i) => `${i / 10}rem`) }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Pretendard: ['Pretendard']
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        DEFAULT: '#1B1E21',
        black: '#000000',
        900: '#1B1E21',
        800: '#2C3136',
        700: '#42494F',
        600: '#5A6169',
        500: '#727A82',
        400: '#8C949C',
        300: '#A7AEB5',
        200: '#C2C8CF',
        100: '#DFE3E8',
        70: '#EEF1F5',
        50: '#F4F7FA',
        30: '#FAFBFD',
        white: '#FFFFFF'
      },
      primary: {
        DEFAULT: '#FFC400',
        dark: '#FFB300',
        light: '#FFE57F'
      },
      secondary: {
        DEFAULT: '#3CB371',
        dark: '#006400',
        light: '#82F9B7'
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
  }
  // plugins: [require('daisyui')]
}
