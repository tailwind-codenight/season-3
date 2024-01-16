/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      backgroundImage: {
        coverBg:
          "url('/public/dist/images/episodeCover.png'),url('/public/dist/images/tailiwndCover.png')",
      },
    },
  },
  plugins: [],
};
