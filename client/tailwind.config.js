const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      themeWhite: '#fefdf8',
      themeRed: '#E94840',
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
    },
    fontFamily: {
      headers: ['Work Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      zIndex: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
