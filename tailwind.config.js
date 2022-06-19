module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'dark':'#222831',
        'light':'#393E46',
        'blue':'#00ADB5',
        'lightblue':'#71C9CE'
      },
      animation:{
        blob:"blob 7s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            transform:"translate(0px, 0px) scale(1)",
          },
          "33%":{
            transform:"translate(30px,-50px) scale(1.1)"
          },
          "66%":{
            transform:"translate(-20px, 20px) scale(0.9)"
          },
          "100%":{
            transform:"translate(0px,0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}
