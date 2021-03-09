module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: '#8CCB75',
      },
      inset: {
        '-halfScreen': '-50vh',
      },
      width: {
        logoSmall: '200px',
        logo: '532px',
      },
      height: {
        fullLogoSmall: '41px',
        logoSmall: '35px',
        logo: '92px',
        fullLogo: '108px',
      },
      animation: {
        fallParticles: 'fallParticles 1.7s ease-in forwards',
      },
      keyframes: {
        fallParticles: {
          '0%': {
            top: '-50vh',
          },
          '50%': {
            top: 0,
          },
          '60%': {
            top: '-10px',
          },
          '70%': {
            top: '10px',
          },
          '80%': {
            top: '-4px',
          },
          '90%': {
            top: '4px',
          },
          '100%': {
            top: 0,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
