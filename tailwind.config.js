/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#282c34",
        secondary: {
          100: "#2f456f",
          200: "#888883",
        },
      },
      fontfamily: {
        body:["Nunito"]
    },
    },
  },
  plugins: ["prettier-plugin-tailwindcss","@babel/plugin-transform-private-property-in-object",]
};
