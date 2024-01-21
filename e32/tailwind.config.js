/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      backgroundImage: ({ theme }) => ({
        gradient60: "linear-gradient(60deg, var(--tw-gradient-stops))",
        radialGradient: "radial-gradient(var(--tw-gradient-stops))",
        newGradient: `linear-gradient(90deg,${theme(
          "colors.red.950",
        )},#ffff00,#ff28ff,#00ff28)`,
      }),
      spacing: {
        "20px": "20px",
        2: "2px",
      },
      space: {
        "15px": "15px",
      },
    },
  },
  plugins: [],
};
