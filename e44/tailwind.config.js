/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      borderWidth: {
        DEFAULT: "10px",
        10: "10px",
      },
    },
  },
  plugins: [],
};
