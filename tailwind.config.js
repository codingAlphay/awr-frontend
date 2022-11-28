/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#7AB51D',
        blue: '#3365AC',
        darkblue: '#222C3A',
        lightgreen: '#CFDBBC',
        lightgrey: '#F2F2F2',
      },
    },
  },
  plugins: [],
}
