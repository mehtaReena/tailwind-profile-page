module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        darkCyan: 'hsl(185, 75%, 39%)',
        desaturatedBlue: 'hsl(229, 23%, 23%)',
        grayishBlue: 'hsl(227, 10%, 46%)',
        darkGray: 'hsl(0, 0%, 59%)'
      },
      fontFamily: {
        body: ['Kumbh Sans', 'sans-serif'],
      },
      borderWidth: {
        6: '6px',
      },
      inset: {
        '-30rem': '-30rem',
        '-34rem': '-34rem',
      },
      spacing: {
        '60rem': '60rem',
        '40%': '40%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
