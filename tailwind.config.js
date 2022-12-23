/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: require('tailwindcss/colors').indigo,
        secondary: require('tailwindcss/colors').fuchsia,
        warn: require('tailwindcss/colors').amber,
        error: require('tailwindcss/colors').rose,
        light: require('tailwindcss/colors').cyan,
        dark: require('tailwindcss/colors').slate
      }
    },
  },
  plugins: [],
}
