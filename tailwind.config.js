/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        '12': '72px',
      },
      height: {
        '18': '72px',
      }
    },
  },
  plugins: [],
};
