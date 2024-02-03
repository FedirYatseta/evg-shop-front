/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    fontSize: {
      xs8: '0.5rem',
      xs10: '0.6rem',
      xs: '0.8rem',
      sm: '0.9rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '8rem',
        xl: '8rem',
        '2xl': '8rem',
      },
    },

    fontFamily: {
      'sans': ['Ruda', 'sans-serif'],
      'serif': ['Open Sans', 'sans-serif']
    },
    colors: {
      main: '#000',
      white: '#ffffff',
      black: {
        0: '#000',
        50: '#020617',
        100: '#00000094',
        150: '#000000CF',
        200: '#00000082',
        300: '#000000A1',
        400: '#ECEEEE',
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
        '5xl': '0px 3px 19px 0px rgba(0, 0, 0, 0.25)',
        '6xl': '0px 37px 40px 37px rgba(55, 41, 41, 0.79) inset'
      },
    }
  },
  plugins: [],
}

