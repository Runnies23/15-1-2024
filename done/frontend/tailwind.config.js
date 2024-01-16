/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'booktheme': '#ECD5BD',
      'bookbuttom': '#9F8C6C',
      'bookbold': '#E4C698',
      'booktag': '#E5C6A7',
      'bigback' :'#F1F0F5',
  },
},
  plugins: [require("daisyui")],
}