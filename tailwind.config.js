module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray:{
          DEFAULT:'#c8ced3'
        },
        sidebar:{
          DEFAULT:'#2f353a'
        },
        container:{
          DEFAULT:'#e4e5e6'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
