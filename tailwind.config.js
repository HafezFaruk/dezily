/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    // colors: {
    //   "skin": "#33d687",
    //   "dark": "#2a334e",
    //   "grey": " #8D8D8D",
    //   "white": "#ffffff",
    //   "green": "#33d687",
    //   "light-gray": "#8d8d8d",
    //   "service-color": "#6c757d"
    // },

    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "light-blue": "#33D687",
      },
      backgroundImage: {
        stepsBg: "url('https://i.ibb.co/BgGkpF2/row-bgimage-7.png')",
      },
    },

  },
  plugins: [],
};