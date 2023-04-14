/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    title: ['Oswald-Bold', 'sans-serif'],
    body: ['Roboto-Regular', 'sans-serif'],
  }
}
