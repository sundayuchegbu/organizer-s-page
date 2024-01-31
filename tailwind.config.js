/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#25aae1',
        secondary: '#c10006',
        info: '#096df3',
        success: '#25e182',
        warning: '#eabb2d',
        error: '#eb5757',
        black: '#1d1d1d',
        black2: '#212121',
        black3: '#999999',
        gray1: '#333333',
        gray2: '#4f4f4f',
        gray3: '#828282',
        gray4: '#bdbdbd',
        gray5: '#e0e0e0',
        background: '#ffffff',
        dark: '#000000',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        grey: '#E0E0E0',
        blue: '#096df3',
        bluebg: '#90cdf4',
        active: '#c10006',
        faded: '#d3494e',
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
