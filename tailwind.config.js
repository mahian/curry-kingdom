/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ed1c24',
        'primary-hover': '#ff5157',
      }
    },
  },
  plugins: [],
}
