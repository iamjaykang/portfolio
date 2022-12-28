/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  fontFamily: {
    sans: ["Oswold", "sans-serift"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        // => @media (min-width: 400px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
