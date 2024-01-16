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
      backgroundSize: {
        fullHalf: "50% auto,100% auto",
      },
    },
  },
  plugins: [],
};
