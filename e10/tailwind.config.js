/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      fontWeight: {
        extralight: 400,
        veryBlack: 1000,
      },
    },
  },
  plugins: [],
};
