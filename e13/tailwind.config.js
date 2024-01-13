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
      lineClamp: {
        20: "20",
      },
      lineHeight: {
        "30px": "30px",
      },
    },
  },
  plugins: [],
};
