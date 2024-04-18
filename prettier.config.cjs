/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// prettier.config.js
module.exports = {
  plugins: [import('prettier-plugin-tailwindcss')],
  singleQuote: true,
  printWidth: 120,
  tailwindConfig: './tailwind.config.js',
};
