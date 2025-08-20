/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      // Add any customizations here
      colors: {
        primary: '#1a1a1a',
        secondary: '#646cff',
      },
    },
  },
  plugins: [],
}
