module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class' 50% 50% 50% 50% / 100% 100% 0% 0% 
  theme: {
    extend: {
      width: {
        '3/8': '37.5%',
        '5/8': '62.5%',
        '5/7': '71.4285714%',
      },
      lineHeight: {
        '12': '3rem',
       },
       boxShadow: {
        '3xl': '0px 10px 25px rgba(148,151,155,0.65)',
        'around': '0px 5px 30px rgba(148,151,155,0.6)',
      },
      borderRadius: {
        'curve': '50% 50% 50% 50% / 100% 100% 0% 0% ',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, rgb(243, 244, 246) 50%, rgb(255, 255, 255) 100%)',
       },
      inset: {
        '3/10': '29%',
        '1/5': '20%',
       },
       keyframes: {
        moveLeft:{
          '0%': {transform: 'translate(0,0)'},
          '50%': {transform: 'translate(-100%,0)'},
          '100%': {transform: 'translate(0,0)'},
        }
       },
      animation: {
        moveLeft: 'moveLeft 60s linear infinite',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
