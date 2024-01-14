/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

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
      colors: {
        surpriseColor: "rgb(var(--color-primary) / <alpha-value>)",
        cookie: {
          DEFAULT: "#b20000",
          100: "#a16900",
          soft: "#a16100",
        },
        scarlet: {
          50: "#fff3ec",
          100: "#ffe5d3",
          200: "#ffc6a5",
          300: "#ff9f6d",
          400: "#ff6b32",
          500: "#ff440a",
          600: "#ff2800",
          700: "#cc1802",
          800: "#a1140b",
          900: "#82140c",
          950: "#460604",
        },
        softBlue: colors.slate,
      },
      opacity: {
        22: "0.22",
      },
    },
  },
  plugins: [],
};
