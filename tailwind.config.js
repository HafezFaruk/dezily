/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "light-blue": "#33D687",
        skin: "#33d687",
        dark: "#2a334e",
        grey: " #8D8D8D",
        white: "#ffffff",
        quote: "##1F2740",
        green: "#33d687",
        "light-gray": "#8d8d8d",
        "service-color": "#f5f5f5",
      },
      backgroundImage: {
        blogBanner:"url('https://i.ibb.co/JtRhR56/pagetitle-bg.jpg')",
        heart_Beat: "url('https://i.ibb.co/xm4yt5Q/bgImg.png')",
        health: "url('https://i.ibb.co/Ms4FNnG/row-bgimage-2.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
