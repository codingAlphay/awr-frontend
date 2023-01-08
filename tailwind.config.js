/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'generator': '920px',
      },
      colors: {
        green: '#7AB51D',
        blue: '#3365AC',
        darkblue: '#222C3A',
        lightgreen: '#CFDBBC',
        lightgrey: '#F2F2F2',
        hovergreen: "#b9d193",
      },
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      /*fontSize: {
        sm: '1.2rem',
        base: '1.4rem',
        xl: '3.4rem',
      },*/
    },
  },
  plugins: [],
}
