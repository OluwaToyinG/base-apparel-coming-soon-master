/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      colors:{
        'desaturated-red': '#CE9797',
        'soft-red': '#F96262',
        'dark-grayish-red': '#413A3A',

      },

      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      
  },
  },
  plugins: [],
}