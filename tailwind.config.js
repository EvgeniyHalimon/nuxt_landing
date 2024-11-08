/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Space Grotesk"', 'serif']
      },
      screens: {
        phone: '430px'
      },
      colors: {
        lime_green: '#B9FF66',
        charcoal: '#191A23',
        alabaster: '#F3F3F3'
      },
      borderRadius: {
        big: '45px',
        main: '14px',
        badge: '7px'
      },
      fontSize: {
        desktop_h1: '60px',
        desktop_h2: '40px',
        desktop_h3: '30px',
        desktop_h4: '20px',
        desktop_p: '18px',
        mobile_h1: '43px',
        mobile_h2: '36px',
        mobile_h3: '26px',
        mobile_h4: '18px',
        mobile_p: '16px'
      },
      boxShadow: {
        black: '0px 5px 0px 0px rgba(0, 0, 0, 1)'
      }
    }
  },
  plugins: []
};
