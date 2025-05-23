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
        'underline': '#C89F94',
        latte: {
          50: '#FFF8F0',
          100: '#FAF6F0',
          200: '#F0E6D2',
          300: '#D2B48C', // Màu tan
          400: '#C4A484', // Latte nhạt
          500: '#A67C52', // Cà phê sữa
          600: '#8B5A2B', // Nâu trung
          700: '#6F4E37', // Nâu đậm
        },
        accent: {
          copper: '#B87333', // Đồng (thay thế amber)
          rust: '#B7410E' // Gỉ sắt (điểm nhấn)
        }
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
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        fadeOut: {
          from: { opacity: 1, transform: 'translateY(0)' },
          to: { opacity: 0, transform: 'translateY(10px)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.2s ease-in forwards'
      }
    }
  },
  plugins: []
}