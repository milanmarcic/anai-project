module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontWeight: {
  
      'extra-light': 100,
    },
  

    extend: {
      fontFamily: {
        'sans-caption': ['"PT Sans Caption"', 'sans-serif']
        
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
