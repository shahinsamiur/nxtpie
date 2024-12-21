/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Montserrat"', 'cursive'],
        postnobills: ['"Post No Bills Colombo"', 'sans-serif'],
        body_font: ['"Lato"', 'sans-serif']
      },
      colors: {
        secondary:'#00BAFF'
      }
    },
  },
  plugins: [],
}