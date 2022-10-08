/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: "#131418",
        button: "#02c29b",
        text: "#84878a",
        input: "#222222",
      },
      colors: {
        background: "#131418",
        secondary: "#02c29b",
      },
    },
  },
  plugins: [],
};
