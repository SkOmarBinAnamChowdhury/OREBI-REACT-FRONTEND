/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'DM': ['DM Sans', 'serif']
    },



    extend: {



      colors: {
        'mainColor': '#262626',
      },






    },
  },
  plugins: [],
}