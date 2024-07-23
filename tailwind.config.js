/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          900: '#1F1F1F',
          800: '#3d3d3d',
          400: '#333333',
          100: '#f3f3f3',
        },
        blue:{
          500: '#4079E3',
          400: '#5286e7',
        },
      }
    },
  },
  plugins: [],
}