/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cambria: ['Cambria', 'serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}