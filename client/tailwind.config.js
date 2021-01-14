const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      themeWhite: '#fefdf8',
      themeRed: '#E94840',
      black: colors.black,
    },
    fontFamily: {
      headers: ['Work Sans', 'sans-serif'],
    },
  },
};
