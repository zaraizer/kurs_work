/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",


  ],
  theme: {
    screens: {
      lgHead: '1156px',
      sm: '480px',
      md: '802px',
      lg: '1024px',
      xl: '1280px',
    },
    backgroundImage: {
      'back-logo': "url('src/assets/logoBack.png')",
    },
    colors: {
      'sand': '#fed7aa'


    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs"),require('flowbite/plugin'), 
  ],
}

