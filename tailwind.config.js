/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'midnight-depth': '#001f3f',
        'navy-horizon': '#003366',
        'ocean-abyss': '#004080',
        'azure-wave': '#0059b3',
        'electric-sky': '#0073e6',
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        'scroll-slow': 'scroll-slow 45s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-slow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};