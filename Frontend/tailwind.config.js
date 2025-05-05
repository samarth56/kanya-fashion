/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        zoomOut: 'zoomOut 2s  ease-in-out forwards',
      },
      keyframes: {
        zoomOut: {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animationDelay: {
        200: '0.2s',
        500: '0.5s',
        1000: '1s',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const delays = theme('animationDelay');
      const utilities = Object.entries(delays).reduce((acc, [key, value]) => {
        acc[`.animation-delay-${key}`] = {
          'animation-delay': value,
        };
        return acc;
      }, {});
      addUtilities(utilities, ['responsive']);
    },
  ],
};