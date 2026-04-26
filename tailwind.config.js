/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        background: "#fff7f0",
        foreground: "#2d2420",
        primary: "#c86f5f",
        primaryFg: "#fffaf7",
        secondary: "#6d9b7c",
        muted: "#f4e4d8",
        mutedFg: "#6a5349",
        border: "#e4cbb9",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
};

