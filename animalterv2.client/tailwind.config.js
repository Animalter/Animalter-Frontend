/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "ubuntu": ['Ubuntu', 'sans-serif'] 
    },
    backgroundImage: {
      'hero-section': "url('./src/assets/herobanner-bg.jpg')",
      'filter-field': "url('./src/assets/filterfield-bg.jpg')",
      'login-register-bg':"url('./src/assets/login-register-bg.jpeg')",
      'gpt-bg':"url('./src/assets/gpt-bg.jpg')"
    },
    height:{
      '112':'28rem',
      '128':'32rem',
      '156':'39rem',
    },
    width:{
      '7/20':'35%',//remove 
    } 
    },
    screens: {
      'xs': '320px',
      'sm': '540px', 
      'md': '720px',
      'lg': '920px',
      'xl': '1040px',
      '2xl':'1460px'
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

