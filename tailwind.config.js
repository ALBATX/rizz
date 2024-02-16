/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          to: {
            strokeDashoffset: '500',
            stroke: 'red'
          },
        },
      },
      },
    },
  plugins: [],
}

