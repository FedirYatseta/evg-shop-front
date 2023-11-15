/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {

    fontFamily: {
      'sans': ['Ruda', 'sans-serif'],
      'serif': ['Open Sans', 'sans-serif']
    },
    colors: {
      main: '#372929',
      white: '#ffffff',
      black: {
        50: '#020617',
        100: '#00000094',
        150: '#000000CF',
        200: '#00000082'
      },
      brown: {
        50: '#372929',
        100: '#443636'
      },
      gray: '#D9D9D9',
      red: '#EF4F4F',
      opacityWhite: '#FFFFFF7D'

    },
    extend: {
      boxShadow: {
        '3xl': '0px 0px 13.9px 0px rgba(0, 0, 0, 0.15)',
        '4xl': '0px 1px 9px 0px rgba(0, 0, 0, 0.25) inset',
      },

    }


  },
  plugins: [],
}

