/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {



    extend: {

      colors: {
        "regal-blue": "#243c5a",
        "light-blue": "#33D687",
        skin: "#33d687",
        dark: "#2a334e",
        grey: " #8D8D8D",
        white: "#ffffff",
        green: "#33d687",
        "light-gray": "#8d8d8d",
        "service-color": "#f5f5f5",
      },
      backgroundImage: {
        heart_Beat: "url('https://i.ibb.co/xm4yt5Q/bgImg.png')",
        health: "url('https://i.ibb.co/Ms4FNnG/row-bgimage-2.jpg')",
        steps: "url('https://i.ibb.co/BgGkpF2/row-bgimage-7.png')",
        wwh1: "url('https://i.ibb.co/p4qv8cW/service-07.png')",
        wwh2: "url('https://i.ibb.co/LnYtp7D/service-05.png')",
        wwh3: "url('https://i.ibb.co/G9mgBzY/service-06.png')",
        wwh4: "url('https://i.ibb.co/vC5MY9X/service-08.png')",
        wwh5: "url('https://i.ibb.co/pzP1WRs/service-13.png')",

      },


    },

  },
  plugins: [],
};

