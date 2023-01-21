/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    height: {
      "83vh": "83vh"
    },
    extend: {
       colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord__background: "#36393f",
        discord__container: "#202225",
        discord__sidebar: "#2f3136",
        discord__serverNameBg: "#34373c",
        discord__channel: "#8e9297",
        discord__channelBg: "#3a3c43",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
