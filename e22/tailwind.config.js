/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
    },
  },
  plugins: [],
};
