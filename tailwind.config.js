// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      default: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
    fontWeight: {
      regular: 400,
      light: 300,
    },
    extend: {
      colors: {
        green: '#8CCB75',
      },
      inset: {
        full: '100%',
        '-halfScreen': '-50vh',
      },
      width: {
        logoSmall: '200px',
        logo: '532px',
      },
      height: {
        18: '4.5rem',
        fullLogoSmall: '41px',
        logoSmall: '35px',
        logo: '92px',
        fullLogo: '108px',
      },
      backgroundImage: {
        blackout: 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, 0))',
      },
      animation: {
        fallParticles: 'fallParticles 1.7s ease-in forwards',
        bounceParticles: 'bounceParticles 1.4s ease-in-out infinite',
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
        bounceParticles: {
          '0%': {
            transform: 'translateY(0)',
          },
          '20%': {
            transform: 'translateY(-13px)',
          },
          '40%': {
            transform: 'translateY(13px)',
          },
          '60%': {
            transform: 'translateY(0px)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.filter-blur-3': {
          filter: 'blur(3px)',
        },
        '.backdrop-blur-3': {
          'backdrop-filter': 'blur(3px)',
        },
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
        '.drag-none': {
          '-webkit-user-drag': 'none',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
