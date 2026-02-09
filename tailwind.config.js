/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heather: '#877499',    // For Logo and primary accents
        sandstone: '#E6D4BF',  // For Page Background
        peachcream: '#FFE8D6', // For Category Bar Background
        palepink: '#F4F6F5', // For NavBar Background
        vintagecream: '#E6D8C1', // For NavBar Background
        almondcream: '#F2EBDD', // For NavBar Background
        porcelainmist: '#F4F1EA', // For NavBar Backgrounds
      },
    },
  },
  plugins: [],
}