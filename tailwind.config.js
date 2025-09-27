/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont:["Montserrat","sans-serif"],

      },
      colors:{
        brainywaveblacck :"#161c2d",
        brainywavepurple:"#473bF0",
        brainywaveservicebfg:"#E7e9eD",
        brainywavegreen:"#68D585",
      }
    },
  },
  plugins: [],
}

