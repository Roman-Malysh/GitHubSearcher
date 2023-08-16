/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '200': '200px',
        '80': '80px',
      },
      width: {
        '200': '200px',
        '80': '120px',
      },
      maxWidth: {
        '1': '300px',
      }
    },
  },
  plugins: [],
}