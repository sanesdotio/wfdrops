/* eslint-disable @typescript-eslint/no-unsafe-call */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-primary': '#071c23',
        'color-secondary': '#2c2e34',
        'color-text-primary': '#d9d9d9',
      },
    },
  },
  plugins: [],
};
