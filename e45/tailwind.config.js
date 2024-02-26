/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      borderRadius: {
        DEFAULT: "40px",
        80: "80px",
      },
    },
  },
  plugins: [],
};
