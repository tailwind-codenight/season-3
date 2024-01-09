/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        red: {
          500: "#00ff00",
          1500: "#0000ff",
          mamad: "#ffff00",
        },
        testColor: "#00ffff",
      },
    },
  },
  plugins: [],
};
