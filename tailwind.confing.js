/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./views/**/*.ejs",
    "./*.{html,js}",
    "./Client/**/*.{html,js}"
  ],
  theme: {
    extend: {

    },
  },
  safelist: [
    'bg-red-500',
    'bg-green-500',
    'bg-slate-500',
    // puedes usar patrones también:
  ],
  plugins: [],
};