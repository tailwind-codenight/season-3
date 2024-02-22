/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      objectPosition:{
        moonPosition: "-30px 20px"
      }
    },
  },
  plugins: [],
};
