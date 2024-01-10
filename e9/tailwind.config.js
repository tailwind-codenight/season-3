/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      fontSize: {
        xsm: ["0.8rem", "2rem"],
        "2xl": ["1.3rem", "4rem"],
      },
    },
  },
  plugins: [],
};
