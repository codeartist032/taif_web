/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#252525", // Dark charcoal - for text
          burgundy: "#a89283", // Warm taupe - for accents
          mauve: "#b2b0ae", // Medium gray - for secondary elements
          peach: "#d7d5d3", // Light gray - for highlights
          cream: "#d7d5d3", // Light gray - for backgrounds
          offwhite: "#e7e5e4", // Off-white - for main background
          "old-burgundy": "#610c27", // Old burgundy for hover effects
          "old-mauve": "#ac9cbd", // Old mauve for hover effects
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        "h1, h2, h3, h4, h5, h6": {
          color: theme("colors.primary.old-burgundy"),
        },
        body: {
          color: "#000000",
        },
        button: {
          backgroundColor: theme("colors.primary.old-burgundy"),
          color: theme("colors.primary.offwhite"),
        },
        "svg, .icon": {
          color: theme("colors.primary.old-burgundy"),
        },
      });
    },
  ],
};
