/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      colors:{
        'desaturated-red': '#CE9797',
        'soft-red': '#F96262',
        'dark-grayish-red': '#413A3A',
        'flirty-bee': '#0000FF, #FF0000',

      },

      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      
      gradientColorStops: {
        
      },
  },
  },
  plugins: [],
}