/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      boxShadow:{
        redShadow:"0 0 10px 10px rgb(225,0,0,0.1)"
      }
    },
  },
  plugins: [],
};
