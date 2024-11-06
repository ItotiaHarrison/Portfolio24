// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1s infinite',
        'textflip': 'textflip 1s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        textflip: {
          '0%': {
            transform: 'rotateX(0deg)',
            opacity: 1
          },
          '40%': {
            transform: 'rotateX(90deg)',
            opacity: 0
          },
          '60%': {
            transform: 'rotateX(90deg)',
            opacity: 0
          },
          '100%': {
            transform: 'rotateX(0deg)',
            opacity: 1
          },
        },
      },
    },
  },
  plugins: [],
};