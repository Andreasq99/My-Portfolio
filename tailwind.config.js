const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT( {
  content: ['./src/**/*.jsx', './index.html', './src/*.jsx'],
  theme: {
    colors: {
      'rviolet': { DEFAULT: '#231942', 100: '#07050d', 200: '#0e0a1b', 300: '#150f28', 400: '#1c1435', 500: '#231942', 600: '#44307f', 700: '#6549ba', 800: '#9986d1', 900: '#ccc2e8' }, 
      'uviolet': { DEFAULT: '#5e548e', 100: '#13111c', 200: '#252139', 300: '#383255', 400: '#4a4271', 500: '#5e548e', 600: '#796faa', 700: '#9a93c0', 800: '#bcb7d5', 900: '#dddbea' }, 
      'aviolet': { DEFAULT: '#9f86c0', 100: '#1f162b', 200: '#3e2c56', 300: '#5e4381', 400: '#7d5baa', 500: '#9f86c0', 600: '#b29ecd', 700: '#c6b6da', 800: '#d9cfe6', 900: '#ece7f3' },
      'lilac': { DEFAULT: '#be95c4', 100: '#2a192c', 200: '#543259', 300: '#7d4b85', 400: '#a36aab', 500: '#be95c4', 600: '#cbabd0', 700: '#d8c0dc', 800: '#e5d5e7', 900: '#f2eaf3' }, 
      'plavender': { DEFAULT: '#e0b1cb', 100: '#3a172a', 200: '#732e54', 300: '#ad457e', 400: '#ca79a5', 500: '#e0b1cb', 600: '#e7c2d6', 700: '#edd1e0', 800: '#f3e0eb', 900: '#f9f0f5' } 
    },
    extend: {},
  },
  plugins: [],
});

