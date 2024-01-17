const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Arimo',
      body: 'Helvetica',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        o_mne: 'url("/src/assets/img/outline-text/o_mne.svg")',
        sluzby: 'url("/src/assets/img/outline-text/sluzby.svg")',
        kontakt: 'url("/src/assets/img/outline-text/kontakt.svg")',
        ribbonWLogo: 'url("/src/assets/img/outline-text/w_inhouse_red_transparant_logo_yellow.png")',
        uspechy: 'url("/src/assets/img/outline-text/uspechy.svg")',
      },
      colors: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
        tertiary: '#ef4348',
        quaternary: '#000000',
        accent: {
          DEFAULT: '#000000',
          hover: '#A50B0F',
        },
        paragraph: '#212121',
        maintext: '#525252',
        contact: '#e5e7eb',
      },
      // backgroundImage: {
      //   'WuObjectTrial': 'url("/src/assets/img/wuestenrot_object_red.svg")',
      // },
      boxShadow: {
        '3xl': '5px 10px 25px 10px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.drag-none': {
          '-webkit-user-drag': 'none',
          '-khtml-user-drag': 'none',
          '-moz-user-drag': 'none',
          '-o-user-drag': 'none',
          'user-drag': 'none'
        }
      });
    })
  ]
};
