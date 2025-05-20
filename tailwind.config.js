export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'xd': '820px',
      'xm': '896px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        gray: {
          200: '#D5DAE1'
        },
        black: {
          DEFAULT: '#000',
          500: '#1D2235'
        },
        blue: {
          500: '#2b77e7'
        },
        'underline': '#C89F94'
      },
      zIndex: {
        'progress-bar': 5,
        'nav-content': 30,
        'nav-burger-button': 40
      },
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        neuetral: ['Neue Montreal', 'sans-serif']
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out'
      }
    }
  },
  plugins: []
}