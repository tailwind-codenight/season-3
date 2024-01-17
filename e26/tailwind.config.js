/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      backgroundPosition: {
        semiCenter: "bottom 55% right 55%, top 10% left 30px",
      },
    },
  },
  plugins: [],
};
