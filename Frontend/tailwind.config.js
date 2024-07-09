/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#1E0342',
        'custom-blue': '#0E46A3',

      },
    },
  },
  plugins: [],
}
