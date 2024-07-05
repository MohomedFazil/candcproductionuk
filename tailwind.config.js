/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#F9F7C9",
        nav: "#A0E9FF",
        primary: "#00A9FF",
        secondary: "#A0E9FF",
        contact: "#FCB3B3"
      },
      fontFamily: {
        nav: ["Lato", "sans-serif"],
        topic: ["Source Sans 3", "sans-serif"],
        para: ["Poppins", "sans-serif"],
        subtopic: ["Adamina", "serif"],
        countNum: ["Montserrat", "sans-serif"],
        countText: ["Advent Pro", "sans-serif"],
        footer: ["Rubik", "sans-serif"]
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700"
      }
    },
  },
  plugins: [],
}