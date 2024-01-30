/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        light: {
          text: '#000',
          background: '#fff',
          tint: '#2f95dc',
          tabIconDefault: '#ccc',
          tabIconSelected: '#2f95dc',
        },
        dark: {
          text: '#fff',
          background: '#000',
          tint: '#fff',
          tabIconDefault: '#ccc',
          tabIconSelected: '#fff',
        },
      },
      textColor:{
        link: '#2e78b7'
      }
    },
  },
  plugins: [],
}

